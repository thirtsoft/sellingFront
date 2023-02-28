import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoiSMSToFournisseurComponent } from './envoi-smsto-fournisseur.component';

describe('EnvoiSMSToFournisseurComponent', () => {
  let component: EnvoiSMSToFournisseurComponent;
  let fixture: ComponentFixture<EnvoiSMSToFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoiSMSToFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoiSMSToFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
