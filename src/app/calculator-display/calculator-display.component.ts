import { CalculatorService } from './../calculator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-display',
  templateUrl: './calculator-display.component.html',
  styleUrls: ['./calculator-display.component.css']
})
export class CalculatorDisplayComponent implements OnInit {
  finalExpression = '';

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.calculatorService.evaluatedAction$.subscribe(response => {
      if(response.length === 1) {
        this.finalExpression = response[0];
      } else {
        this.finalExpression = response.join(' ');
      }
    });
  }

}
