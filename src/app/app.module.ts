import { CalculatorService } from './calculator.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorDisplayComponent } from './calculator-display/calculator-display.component';
import { CalculatorButtonsComponent } from './calculator-buttons/calculator-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorDisplayComponent,
    CalculatorButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
