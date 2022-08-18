import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgThreeComponent } from './eg-three.component';

describe('EgThreeComponent', () => {
  let component: EgThreeComponent;
  let fixture: ComponentFixture<EgThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
