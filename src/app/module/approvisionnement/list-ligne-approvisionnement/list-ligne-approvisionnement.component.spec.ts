import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLigneApprovisionnementComponent } from './list-ligne-approvisionnement.component';

describe('ListLigneApprovisionnementComponent', () => {
  let component: ListLigneApprovisionnementComponent;
  let fixture: ComponentFixture<ListLigneApprovisionnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLigneApprovisionnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLigneApprovisionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
