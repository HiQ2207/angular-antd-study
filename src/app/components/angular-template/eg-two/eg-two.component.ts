import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eg-two',
  templateUrl: './eg-two.component.html',
  styleUrls: ['./eg-two.component.css']
})
export class EgTwoComponent implements OnInit {

    public flag: Boolean = true;

    constructor() { }

    ngOnInit() {}
}
