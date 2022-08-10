// 2.引入Output, EventEmitter，子组件给父组件传值
// 5.引入Input，父组件给子组件传值
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-antd-input',
  templateUrl: './antd-input.component.html',
  styleUrls: ['./antd-input.component.css']
})
export class AntdInputComponent implements OnInit {
  // 3.新建一个EventEmitter对象，并用@Output装饰
  @Output() public inputVal = new EventEmitter();

  // 6.接受父组件传递的方法
  // @Input() run: any;
  @Input() tableView: any;

  // 1.子组件数据
  public searchVal: any = '';

  constructor() { }

  ngOnInit() {
  }

  sendSearch() {
    // 4.通过$emit给父组件广播数据
    this.inputVal.emit(this.searchVal);

    // 7.调用父组件传递的方法
    // this.run();
    this.tableView.search();
  }

  clear() {
    // alert(111);
    this.searchVal = '';
    this.tableView.getTableData();
  }
}
