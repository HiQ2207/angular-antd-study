import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

// 引入组件
import { BasePageComponent } from './views/base-page/base-page.component';
import { TableViewComponent } from './views/table-view/table-view.component';
import { EchartsViewComponent } from './views/echarts-view/echarts-view.component';
import { FormViewComponent } from './views/form-view/form-view.component';
import { TemplateViewComponent } from './views/template-view/template-view.component';
import { RollingloadViewComponent } from './views/rollingload-view/rollingload-view.component';
import { QiankunViewComponent } from './views/qiankun-view/qiankun-view.component';
import { EmptyComponent } from './components/empty/empty.component';
import { EchartsCustomViewComponent } from './views/echarts-custom-view/echarts-custom-view.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: `full`
  },
  {
    path: 'base',
    component: BasePageComponent,
    children: [
      {
        path: 'tableview',
        component: TableViewComponent
      },
      {
        path: 'echartsview',
        component: EchartsViewComponent
      },
      {
        path: 'echartscustomview',
        component: EchartsCustomViewComponent
      },
      {
        path: 'formview',
        component: FormViewComponent
      },
      {
        path: 'formview',
        component: FormViewComponent
      },
      {
        path: 'templateview',
        component: TemplateViewComponent
      },
      {
        path: 'rollingloadview',
        component: RollingloadViewComponent
      },
      {
        path: 'qiankunview',
        component: QiankunViewComponent,
        children: [
          {
            path: '**',
            component: EmptyComponent
          }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // @ts-ignore
  // tslint:disable-next-line: max-line-length
  providers: [{ provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/AngularDemoAntd' : '/' }]
})
export class AppRoutingModule { }
