import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateApprovisionnementComponent } from './create-approvisionnement.component';

describe('CreateApprovisionnementComponent', () => {
  let component: CreateApprovisionnementComponent;
  let fixture: ComponentFixture<CreateApprovisionnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateApprovisionnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateApprovisionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
