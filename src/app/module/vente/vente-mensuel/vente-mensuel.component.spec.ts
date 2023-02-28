import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteMensuelComponent } from './vente-mensuel.component';

describe('VenteMensuelComponent', () => {
  let component: VenteMensuelComponent;
  let fixture: ComponentFixture<VenteMensuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenteMensuelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteMensuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
