import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgFourComponent } from './eg-four.component';

describe('EgFourComponent', () => {
  let component: EgFourComponent;
  let fixture: ComponentFixture<EgFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
