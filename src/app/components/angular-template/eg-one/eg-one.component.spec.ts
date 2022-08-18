import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgOneComponent } from './eg-one.component';

describe('EgOneComponent', () => {
  let component: EgOneComponent;
  let fixture: ComponentFixture<EgOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
