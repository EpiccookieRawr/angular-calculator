import { HistoryService } from './../history.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-log',
  templateUrl: './calculator-log.component.html',
  styleUrls: ['./calculator-log.component.css']
})
export class CalculatorLogComponent implements OnInit {
  entries: string[];

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.historyService.insertLogAction$.subscribe(response => {
      this.entries = response;
    });
  }

  displayExpression(entry: string[]) {
    return entry.join(' ');
  }

}
