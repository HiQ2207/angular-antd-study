import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { registerMicroApps, start } from 'qiankun';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// 注册微应用
registerMicroApps([
    {
        name: 'AngularDemoSubapp',
        entry: '//localhost:4202',
        container: '#container',
        activeRule: '/base/qiankunview/angularDemoSubapp',
    },
]);
// 启动 qiankun
start();
