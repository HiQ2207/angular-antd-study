import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '#angularDemoAntd',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AnguarDemoAntd';

  public isCollapsed: boolean = false;

  constructor() {}

  ngOnInit() {
  }
}
