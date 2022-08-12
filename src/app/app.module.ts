// angular 核心模块导入
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ng-zorro模块导入
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

// 引入组件模块
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AntdTableComponent } from './components/antd-table/antd-table.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd';
import { AntdBreadcrumbComponent } from './components/antd-breadcrumb/antd-breadcrumb.component';
import { TableViewComponent } from './views/table-view/table-view.component';
import { EchartsViewComponent } from './views/echarts-view/echarts-view.component';
import { EchartsDirTestDirective } from './directives/echarts-dir-test.directive';
import { AntdInputComponent } from './components/antd-input/antd-input.component';
import { FormViewComponent } from './views/form-view/form-view.component';
import { BasePageComponent } from './views/base-page/base-page.component';
import { AntdFormComponent } from './components/antd-form/antd-form.component';
import { AntdTimepickerComponent } from './components/antd-timepicker/antd-timepicker.component';
import { AntdUploadComponent } from './components/antd-upload/antd-upload.component';
registerLocaleData(zh);

// 引入服务
// import { HttpserviceService } from './services/httpservice.service';
// import { FuzzyqueryService } from './services/fuzzyquery.service';

@NgModule({
  declarations: [
    AppComponent,
    AntdTableComponent,
    AntdBreadcrumbComponent,
    TableViewComponent,
    EchartsViewComponent,
    EchartsDirTestDirective,
    AntdInputComponent,
    FormViewComponent,
    BasePageComponent,
    AntdFormComponent,
    AntdTimepickerComponent,
    AntdUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule, // 声明组件
    NzLayoutModule, // 声明组件
    NzBreadCrumbModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    // HttpserviceService,
    // FuzzyqueryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
