import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsViewComponent } from './echarts-view.component';

describe('EchartsViewComponent', () => {
  let component: EchartsViewComponent;
  let fixture: ComponentFixture<EchartsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
