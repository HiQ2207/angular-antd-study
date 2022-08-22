import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollingloadViewComponent } from './rollingload-view.component';

describe('RollingloadViewComponent', () => {
  let component: RollingloadViewComponent;
  let fixture: ComponentFixture<RollingloadViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollingloadViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollingloadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
