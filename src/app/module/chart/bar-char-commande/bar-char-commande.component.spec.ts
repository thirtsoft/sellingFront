import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarCharCommandeComponent } from './bar-char-commande.component';

describe('BarCharCommandeComponent', () => {
  let component: BarCharCommandeComponent;
  let fixture: ComponentFixture<BarCharCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarCharCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarCharCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
