import { Component, OnInit } from '@angular/core';

import { format, subHours, subDays, startOfDay, startOfHour } from 'date-fns';

@Component({
    selector: 'app-antd-timepicker',
    templateUrl: './antd-timepicker.component.html',
    styleUrls: ['./antd-timepicker.component.css']
})
export class AntdTimepickerComponent implements OnInit {

    public ranges: any = {
        '今天': [new Date(), new Date()],
        '一小时': [subHours(new Date(), 1), new Date()],
        '七天': [subDays(startOfDay(new Date()), 7), new Date()]
    };
    public startTime: any;
    public endTime: any;
    public timeData: any [] = [];

    onChange(result: Date[]): void {
      console.log('From: ', result[0], ', to: ', result[1]);
      this.startTime = result[0];
      this.endTime = result[1];
      console.log('result', result);
      this.timeData = result;
    }

    constructor() { }

    ngOnInit() {
    }
}
