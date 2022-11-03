import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartForceComponent } from './echart-force.component';

describe('EchartForceComponent', () => {
  let component: EchartForceComponent;
  let fixture: ComponentFixture<EchartForceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartForceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
