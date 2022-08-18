import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eg-one',
  templateUrl: './eg-one.component.html',
  styleUrls: ['./eg-one.component.css']
})
export class EgOneComponent implements OnInit {
  public flag: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
