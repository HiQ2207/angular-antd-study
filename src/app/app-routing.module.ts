import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 引入组件
import { BasePageComponent } from './views/base-page/base-page.component';
import { TableViewComponent } from './views/table-view/table-view.component';
import { EchartsViewComponent } from './views/echarts-view/echarts-view.component';
import { FormViewComponent } from './views/form-view/form-view.component';
import { TemplateViewComponent } from './views/template-view/template-view.component';
import { RollingloadViewComponent } from './views/rollingload-view/rollingload-view.component';

const routes: Routes = [
  {
    path: '',
    component: BasePageComponent
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
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
