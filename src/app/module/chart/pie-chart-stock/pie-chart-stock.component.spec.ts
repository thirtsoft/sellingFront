import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartStockComponent } from './pie-chart-stock.component';

describe('PieChartStockComponent', () => {
  let component: PieChartStockComponent;
  let fixture: ComponentFixture<PieChartStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
