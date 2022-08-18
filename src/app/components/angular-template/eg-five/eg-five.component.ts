// viewContainerRef表示可以将一个或多个视图附着到组件中的容器
// createEmbeddView() 实例化内嵌视图，并把它插入到该容器中 返回值为新创建的这个视图viewRef实例
import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-eg-five',
  templateUrl: './eg-five.component.html',
  styleUrls: ['./eg-five.component.css']
})
export class EgFiveComponent implements OnInit {
    @ViewChild('template1') tpl: TemplateRef<any>;

    constructor(
        private viewContainer: ViewContainerRef
    ) { }

    ngOnInit() {
      /*
          当angular通过调用createEmbeddedView创建模板时，它也可以传递将在ng-template中使用的上下文。
          使用键$implicit将设置上下文对象中的默认值
       */
      this.viewContainer.createEmbeddedView(this.tpl, { $implicit: 'Hello', name: 'World' });
    }

}
