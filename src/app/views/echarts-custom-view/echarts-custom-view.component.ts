import { Component, ElementRef, Input, OnInit, SimpleChange, ViewChild } from '@angular/core';

@Component({
  selector: 'app-echarts-custom-view',
  templateUrl: './echarts-custom-view.component.html',
  styleUrls: ['./echarts-custom-view.component.css']
})
export class EchartsCustomViewComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(changes: {
    [propKey: string]: SimpleChange
  }) {
  }

}
