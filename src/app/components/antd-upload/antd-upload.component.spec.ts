import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntdUploadComponent } from './antd-upload.component';

describe('AntdUploadComponent', () => {
  let component: AntdUploadComponent;
  let fixture: ComponentFixture<AntdUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntdUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntdUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
