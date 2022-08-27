import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    // @ts-ignore
    providers: [{ provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/base/qiankunview/angularDemoSubapp' : '/' }]
})
export class AppRoutingModule { }
