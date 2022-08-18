import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgFiveComponent } from './eg-five.component';

describe('EgFiveComponent', () => {
  let component: EgFiveComponent;
  let fixture: ComponentFixture<EgFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
