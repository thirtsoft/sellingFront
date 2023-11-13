import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeDepenseComponent } from './list-type-depense.component';

describe('ListTypeDepenseComponent', () => {
  let component: ListTypeDepenseComponent;
  let fixture: ComponentFixture<ListTypeDepenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypeDepenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
