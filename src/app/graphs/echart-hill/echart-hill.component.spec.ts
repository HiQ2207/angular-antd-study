import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartHillComponent } from './echart-hill.component';

describe('EchartHillComponent', () => {
  let component: EchartHillComponent;
  let fixture: ComponentFixture<EchartHillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartHillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartHillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
