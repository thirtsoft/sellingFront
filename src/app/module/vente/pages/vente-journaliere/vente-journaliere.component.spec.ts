import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteJournaliereComponent } from './vente-journaliere.component';

describe('VenteJournaliereComponent', () => {
  let component: VenteJournaliereComponent;
  let fixture: ComponentFixture<VenteJournaliereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenteJournaliereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteJournaliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
