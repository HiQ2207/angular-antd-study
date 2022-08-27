import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QiankunViewComponent } from './qiankun-view.component';

describe('QiankunViewComponent', () => {
  let component: QiankunViewComponent;
  let fixture: ComponentFixture<QiankunViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QiankunViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QiankunViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
