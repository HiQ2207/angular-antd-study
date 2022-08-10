import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntdBreadcrumbComponent } from './antd-breadcrumb.component';

describe('AntdBreadcrumbComponent', () => {
  let component: AntdBreadcrumbComponent;
  let fixture: ComponentFixture<AntdBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntdBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntdBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
