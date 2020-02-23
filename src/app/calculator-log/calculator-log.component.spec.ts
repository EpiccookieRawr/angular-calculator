import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorLogComponent } from './calculator-log.component';

describe('CalculatorLogComponent', () => {
  let component: CalculatorLogComponent;
  let fixture: ComponentFixture<CalculatorLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
