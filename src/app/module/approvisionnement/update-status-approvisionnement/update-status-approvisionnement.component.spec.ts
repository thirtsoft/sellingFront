import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStatusApprovisionnementComponent } from './update-status-approvisionnement.component';

describe('UpdateStatusApprovisionnementComponent', () => {
  let component: UpdateStatusApprovisionnementComponent;
  let fixture: ComponentFixture<UpdateStatusApprovisionnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStatusApprovisionnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStatusApprovisionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
