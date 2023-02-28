import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMontantApprovisionnementComponent } from './update-montant-approvisionnement.component';

describe('UpdateMontantApprovisionnementComponent', () => {
  let component: UpdateMontantApprovisionnementComponent;
  let fixture: ComponentFixture<UpdateMontantApprovisionnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMontantApprovisionnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMontantApprovisionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
