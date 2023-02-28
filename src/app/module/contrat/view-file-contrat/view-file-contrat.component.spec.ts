import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFileContratComponent } from './view-file-contrat.component';

describe('ViewFileContratComponent', () => {
  let component: ViewFileContratComponent;
  let fixture: ComponentFixture<ViewFileContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFileContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFileContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
