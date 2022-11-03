import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartAttackJudgeTrendComponent } from './echart-attack-judge-trend.component';

describe('EchartAttackJudgeTrendComponent', () => {
  let component: EchartAttackJudgeTrendComponent;
  let fixture: ComponentFixture<EchartAttackJudgeTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartAttackJudgeTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartAttackJudgeTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
