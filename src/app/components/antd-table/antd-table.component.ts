import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-antd-table',
  templateUrl: './antd-table.component.html',
  styleUrls: ['./antd-table.component.css']
})
export class AntdTableComponent implements OnInit {
  @Input() data;

  constructor() { }

  // 表格数据
  public myTable: any[] = []

  ngOnInit(): void {
  }

  // 监听父组件异步获取的数据
  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes.data.currentValue);
    this.myTable = changes.data.currentValue;
  }

  // 编辑
  edit() {
    alert('编辑')
  }

  // 删除
  delete() {
    alert('删除')
  }
}
