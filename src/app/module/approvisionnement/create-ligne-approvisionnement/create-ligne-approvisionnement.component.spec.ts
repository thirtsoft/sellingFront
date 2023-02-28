import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLigneApprovisionnementComponent } from './create-ligne-approvisionnement.component';

describe('CreateLigneApprovisionnementComponent', () => {
  let component: CreateLigneApprovisionnementComponent;
  let fixture: ComponentFixture<CreateLigneApprovisionnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLigneApprovisionnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLigneApprovisionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
