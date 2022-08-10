import { Component, OnInit } from '@angular/core';
// 引入httpClient
import { HttpClient } from '@angular/common/http';
// 引入封装的axios服务
import { HttpserviceService } from 'src/app/services/httpservice.service';
// 引入FuzzyqueryService服务
import { FuzzyqueryService } from 'src/app/services/fuzzyquery.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  public inputChildVal: any = '';

  // 表格数据
  public tableData: any [] = [];

  constructor(
    public http: HttpClient,
    public httpAxios: HttpserviceService,
    public query: FuzzyqueryService
  ) { }

  ngOnInit() {
    this.getTableData();
  }

  async getTableData() {
    const api: any = '../../../assets/data/customdata.json';
    let result: any;
    result = await this.httpAxios.axiosGet(api);
    this.tableData = result.data.result;
  }

  // 获取input子组件的数据
  getInputVal(e) {
    this.inputChildVal = e;
  }

  search() {
    if (this.inputChildVal.trim().length !== 0) {
      // 调用服务中的filter方法
      this.tableData = this.query.filter(this.tableData, this.inputChildVal);
    }
  }
}
