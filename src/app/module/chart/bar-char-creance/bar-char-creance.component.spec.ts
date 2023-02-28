import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarCharCreanceComponent } from './bar-char-creance.component';

describe('BarCharCreanceComponent', () => {
  let component: BarCharCreanceComponent;
  let fixture: ComponentFixture<BarCharCreanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarCharCreanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarCharCreanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
