import { Directive, Input, ElementRef } from '@angular/core';
// 引入echarts
import * as echarts from 'echarts';

@Directive({
  selector: '[appEchartsDirTest]'
})
export class EchartsDirTestDirective {
  @Input('appEchartsDirTest') Option;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    console.log(this.element.nativeElement);
    // 初始化画布
    echarts.init(this.element.nativeElement).setOption(this.Option)

    console.log('this.Option', this.Option)
  }

}
