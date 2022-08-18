import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-eg-three',
    templateUrl: './eg-three.component.html',
    styleUrls: ['./eg-three.component.css']
})
export class EgThreeComponent implements OnInit {

    public context = {
        $implicit: 'Hello',
        name: 'World'
    };

  constructor() { }

  ngOnInit() {
  }

}
