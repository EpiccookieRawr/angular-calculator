import { HistoryService } from './history.service';
import { CalculatorService } from './calculator.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorDisplayComponent } from './calculator-display/calculator-display.component';
import { CalculatorButtonsComponent } from './calculator-buttons/calculator-buttons.component';
import { CalculatorLogComponent } from './calculator-log/calculator-log.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorDisplayComponent,
    CalculatorButtonsComponent,
    CalculatorLogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CalculatorService, HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
