import { Injectable } from '@angular/core';
@Injectable()

export class CalculatorService {
    test = 'value';
    expression = '6+9*866123/5';
    answer = 0;

    operators: string[] = [
        'x', '*', '/', '-'
    ]
    constructor() {}

    addToExpression(value) {
        this.expression += value;
        console.log(this.expression);
    }

    eval() {
        if (this.expression !== '') {
            this.evalFirstOrder(this.expression);
        }
    }

    evalFirstOrder(currentExpression: string) {
        console.log(currentExpression);
        const xPos = currentExpression.indexOf('*');
        console.log(xPos);
        if(xPos === -1) {
            return currentExpression;
        }

        currentExpression = this.evalBlock(xPos, '*', currentExpression);
    }

    evalSecondOrder(expression: string) {

    }

    evalBlock(index: number, operator: string, expression: string) {
        console.log(index, operator, expression);
        let leftNumber = '';
        let rightNumber = '';
        let leftIndex = 1;
        let rightIndex = 1;
        const numberRegex = new RegExp('[0-9]');
        while( numberRegex.test(expression[index - leftIndex])) {
            leftIndex++;
        }
        while( numberRegex.test(expression[index + rightIndex])) {
            rightIndex++;
        }
        console.log(index, rightIndex, leftIndex);
        const firstNum = expression.slice(index - leftIndex, index + leftIndex);
        const secondNum = expression.slice(index, rightIndex);
        console.log(firstNum, secondNum);
        // const evalExpression = expression.slice(leftIndex + 1, rightIndex);
        return expression;
    }
}
