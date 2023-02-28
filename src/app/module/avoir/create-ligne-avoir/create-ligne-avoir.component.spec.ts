import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLigneAvoirComponent } from './create-ligne-avoir.component';

describe('CreateLigneAvoirComponent', () => {
  let component: CreateLigneAvoirComponent;
  let fixture: ComponentFixture<CreateLigneAvoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLigneAvoirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLigneAvoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
