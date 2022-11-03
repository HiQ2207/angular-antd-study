import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsCustomViewComponent } from './echarts-custom-view.component';

describe('EchartsCustomViewComponent', () => {
  let component: EchartsCustomViewComponent;
  let fixture: ComponentFixture<EchartsCustomViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsCustomViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsCustomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
