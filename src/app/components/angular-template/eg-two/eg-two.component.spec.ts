import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgTwoComponent } from './eg-two.component';

describe('EgTwoComponent', () => {
  let component: EgTwoComponent;
  let fixture: ComponentFixture<EgTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
