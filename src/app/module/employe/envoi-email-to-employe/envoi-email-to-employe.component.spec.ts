import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoiEmailToEmployeComponent } from './envoi-email-to-employe.component';

describe('EnvoiEmailToEmployeComponent', () => {
  let component: EnvoiEmailToEmployeComponent;
  let fixture: ComponentFixture<EnvoiEmailToEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoiEmailToEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoiEmailToEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
