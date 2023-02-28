import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarCharComVenteComponent } from './bar-char-com-vente.component';

describe('BarCharComVenteComponent', () => {
  let component: BarCharComVenteComponent;
  let fixture: ComponentFixture<BarCharComVenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarCharComVenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarCharComVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
