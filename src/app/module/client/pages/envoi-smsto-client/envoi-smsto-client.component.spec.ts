import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoiSMSToClientComponent } from './envoi-smsto-client.component';

describe('EnvoiSMSToClientComponent', () => {
  let component: EnvoiSMSToClientComponent;
  let fixture: ComponentFixture<EnvoiSMSToClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoiSMSToClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoiSMSToClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
