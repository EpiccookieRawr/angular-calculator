import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable()

export class CalculatorService {
    expression = [];
    currentValue = [];
    lastType = '';
    lastValue = '';
    valueType = {
        0 : 'integer',
        1 : 'integer',
        2 : 'integer',
        3 : 'integer',
        4 : 'integer',
        5 : 'integer',
        6 : 'integer',
        7 : 'integer',
        8 : 'integer',
        9 : 'integer',
        '.' : 'decimal',
        '+' : 'operator',
        '-' : 'operator',
        '*' : 'operator',
        '/' : 'operator',
    }
    unrestrictedType = ['integer', 'decimal'];
    private _evaluatedAction$ = new Subject<string[]>();

    constructor() {
    }

    get evaluatedAction$(): Observable<string[]> {
        return this._evaluatedAction$.asObservable();
    }

    addToExpression(value: string) {
        const currentType: string = this.valueType[value];
        if (this.lastType === '') {
            if (this.unrestrictedType.indexOf(currentType) !== -1 || (currentType === 'operator' && value === '-')) {
                this.expression.push(value);
                this.lastType = this.valueType[value];
                this.lastValue = value;
            }
        } else {
            switch (this.lastType) {
                case 'integer':
                    if (currentType === 'operator') {
                        this.expression.push(value);
                    } else {
                        this.expression[this.expression.length - 1] += value;
                    }
                    break;
                case 'operator':
                    if (currentType === 'operator') {
                        this.expression[this.expression.length - 1] = value;
                    } else if (currentType === 'integer' && this.lastValue === '-') {
                        if (this.expression.length === 1) {
                            this.expression[this.expression.length - 1] += value;
                        } else {
                            this.expression.push(value);
                        }
                    } else if (currentType === 'decimal') {
                        this.expression.push('0.');
                    } else {
                        this.expression.push(value);
                    }
                    break;
                case 'decimal':
                    if (currentType === 'operator') {
                        this.expression.push('0.');
                    } else if (currentType === 'integer') {
                        this.expression[this.expression.length - 1] += value;
                    } else {
                        this.expression.push(value);
                    }
                    break;
            }
            this.lastType = this.valueType[value];
            this.lastValue = value;
        }

        this._evaluatedAction$.next(this.expression);
        console.log(this.expression);
    }

    eval() {
        let finalExpression = this.expression.slice();
        console.log(this.expression);
        if (finalExpression.length > 1) {
            finalExpression = this.evalFirstOrder(finalExpression);
            finalExpression = this.evalSecondOrder(finalExpression);
        }

        if(finalExpression.length === 1) {
            this.expression = finalExpression;
        } else {
            this.expression = ['N/A'];
        }
        this._evaluatedAction$.next(this.expression);
        this.resetExpression();
        console.log(this.expression);
    }

    resetExpression() {
        this.expression = [];
        this.currentValue = [];
        this.lastType = '';
        this.lastValue = '';
    }

    evalFirstOrder(currentExpression: string[]) {
        if (currentExpression.length === 1) {
            return currentExpression;
        }
        currentExpression = this.evalBlock('*', currentExpression);
        currentExpression = this.evalBlock('/', currentExpression);
        return currentExpression;
    }

    evalSecondOrder(currentExpression: string[]) {
        if (currentExpression.length === 1) {
            return currentExpression;
        }
        currentExpression = this.evalBlock('+', currentExpression);
        currentExpression = this.evalBlock('-', currentExpression);
        return currentExpression;
    }

    evalBlock(operator: string, expression: string[]) {
        const operatorIndex: number = expression.indexOf(operator);
        let leftNum: number;
        let rightNum: number;
        let result: number;
        if (operatorIndex === -1) {
            return expression;
        }

        leftNum = parseFloat(expression[operatorIndex - 1]);
        rightNum = parseFloat(expression[operatorIndex + 1]);

        switch (operator) {
            case '*':
                result = leftNum * rightNum;
                break;
            case '/':
                result = leftNum / rightNum;
                break;
            case '+':
                result = leftNum + rightNum;
                break;
            case '-':
                result = leftNum - rightNum;
                break;
        }

        expression.splice(operatorIndex - 1, 3, result.toString());

        return this.evalBlock(operator, expression);

    }
}
