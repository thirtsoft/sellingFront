import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileContratComponent } from './upload-file-contrat.component';

describe('UploadFileContratComponent', () => {
  let component: UploadFileContratComponent;
  let fixture: ComponentFixture<UploadFileContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFileContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
