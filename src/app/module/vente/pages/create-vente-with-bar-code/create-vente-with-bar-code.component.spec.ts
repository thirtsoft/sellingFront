import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVenteWithBarCodeComponent } from './create-vente-with-bar-code.component';

describe('CreateVenteWithBarCodeComponent', () => {
  let component: CreateVenteWithBarCodeComponent;
  let fixture: ComponentFixture<CreateVenteWithBarCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVenteWithBarCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVenteWithBarCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
