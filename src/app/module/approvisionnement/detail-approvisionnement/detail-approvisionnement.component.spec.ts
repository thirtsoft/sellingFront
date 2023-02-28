import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailApprovisionnementComponent } from './detail-approvisionnement.component';

describe('DetailApprovisionnementComponent', () => {
  let component: DetailApprovisionnementComponent;
  let fixture: ComponentFixture<DetailApprovisionnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailApprovisionnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailApprovisionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
