import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-antd-timepicker',
  templateUrl: './antd-timepicker.component.html',
  styleUrls: ['./antd-timepicker.component.css']
})
export class AntdTimepickerComponent implements OnInit {
  time: Date | null = null;

  dateFormat = 'yyyy/MM/dd';

  constructor() { }

  ngOnInit() {
  }

  log(time: Date): void {
    console.log(time && time.toTimeString());
  }

}
