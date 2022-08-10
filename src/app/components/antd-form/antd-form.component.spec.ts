import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntdFormComponent } from './antd-form.component';

describe('AntdFormComponent', () => {
  let component: AntdFormComponent;
  let fixture: ComponentFixture<AntdFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntdFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
