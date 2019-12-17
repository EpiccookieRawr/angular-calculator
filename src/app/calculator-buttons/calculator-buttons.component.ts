import { CalculatorService } from './../calculator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-buttons',
  templateUrl: './calculator-buttons.component.html',
  styleUrls: ['./calculator-buttons.component.css']
})
export class CalculatorButtonsComponent implements OnInit {
  rightPanel = ['x', '/', '+', '-'];
  leftPanel = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '0', '='];

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    console.log(this.calculatorService.test);
  }

  clickButton(clickValue: HTMLElement) {
    const calculateValue = clickValue.innerText;
    if(calculateValue !== '=') {
      this.calculatorService.addToExpression(clickValue.innerText);
    } else {
      this.calculatorService.eval();
    }

  }

}
