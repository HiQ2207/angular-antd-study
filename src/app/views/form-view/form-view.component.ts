import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit {

  public tabData: any [] = [];

  public inputChildVal:any = '';

  constructor() { }

  ngOnInit() {
  }

  getInputVal(event) {
    console.log(event);
    this.inputChildVal = event;
  }
}

