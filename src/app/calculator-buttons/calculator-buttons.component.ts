import { CalculatorService } from './../calculator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-buttons',
  templateUrl: './calculator-buttons.component.html',
  styleUrls: ['./calculator-buttons.component.css']
})
export class CalculatorButtonsComponent implements OnInit {
  rightPanel = ['*', '/', '+', '-', '<-'];
  leftPanel = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '0',  '.', '='];

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
  }

  clickButton(clickValue: HTMLElement) {
    const calculateValue = clickValue.innerText;
    switch(calculateValue) {
      case '=':
        this.calculatorService.eval();
        break;
      case '<-':
        this.calculatorService.backSpace();
        break;
      default:
        this.calculatorService.addToExpression(clickValue.innerText);
    }
  }

}
