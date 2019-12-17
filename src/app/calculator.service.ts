import { Injectable } from '@angular/core';
@Injectable()

export class CalculatorService {
    test = 'value';
    expression = [];
    currentValue = [];
    valueType = {
        '0' : 'integer',
        '1' : 'integer',
        '2' : 'integer',
        '3' : 'integer',
        '4' : 'integer',
        '5' : 'integer',
        '6' : 'integer',
        '7' : 'integer',
        '8' : 'integer',
        '9' : 'integer',
        '.' : 'decimal',
        '+' : 'operator',
        '-' : 'operator',
        '*' : 'operator',
        '/' : 'operator',
    }

    constructor() {}

    addToExpression(value: string) {
        const currnetType = this.valueType[value];
        console.log(currnetType);

        this.expression.push(value);
        console.log(this.expression);
    }

    eval() {
        let finalExpression = this.expression.slice();
        if (finalExpression.length > 1) {
            finalExpression = this.evalFirstOrder(finalExpression);
            finalExpression = this.evalSecondOrder(finalExpression);
        }

        this.expression = finalExpression;
        console.log(this.expression);
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

        switch(operator) {
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
