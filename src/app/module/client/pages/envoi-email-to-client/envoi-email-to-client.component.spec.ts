import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoiEmailToClientComponent } from './envoi-email-to-client.component';

describe('EnvoiEmailToClientComponent', () => {
  let component: EnvoiEmailToClientComponent;
  let fixture: ComponentFixture<EnvoiEmailToClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoiEmailToClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoiEmailToClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
