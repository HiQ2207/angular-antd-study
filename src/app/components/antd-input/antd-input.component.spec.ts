import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntdInputComponent } from './antd-input.component';

describe('AntdInputComponent', () => {
  let component: AntdInputComponent;
  let fixture: ComponentFixture<AntdInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntdInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
