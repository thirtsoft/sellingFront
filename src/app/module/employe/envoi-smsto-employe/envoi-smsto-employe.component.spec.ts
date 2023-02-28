import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoiSMSToEmployeComponent } from './envoi-smsto-employe.component';

describe('EnvoiSMSToEmployeComponent', () => {
  let component: EnvoiSMSToEmployeComponent;
  let fixture: ComponentFixture<EnvoiSMSToEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoiSMSToEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoiSMSToEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
