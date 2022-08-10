import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntdTimepickerComponent } from './antd-timepicker.component';

describe('AntdTimepickerComponent', () => {
  let component: AntdTimepickerComponent;
  let fixture: ComponentFixture<AntdTimepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntdTimepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntdTimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
