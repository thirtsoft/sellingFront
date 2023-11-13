import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoiEmailToFournisseurComponent } from './envoi-email-to-fournisseur.component';

describe('EnvoiEmailToFournisseurComponent', () => {
  let component: EnvoiEmailToFournisseurComponent;
  let fixture: ComponentFixture<EnvoiEmailToFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoiEmailToFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoiEmailToFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
