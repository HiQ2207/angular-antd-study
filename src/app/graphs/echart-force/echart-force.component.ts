import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
// 1.导入echarts
import * as echarts from 'echarts';

// 自定义文本格式
function transform(value: string, limit?: number) {
  let result = '';
  let newLength = 0;
  let charCode = 0;
  const limitLen = limit ? limit : 128;
  if (!value) {
    return;
  }
  for (let i = 0; i < value.length; i++) {
    if (newLength >= limitLen) {
      result = result + '...';
      break;
    } else {
      charCode = value.charCodeAt(i);
      if (charCode === 94 || charCode > 127) {
        newLength += 2;
      } else {
        newLength += 1;
      }
      result += value.substring(i, i + 1);
    }
  }
  return result;
}

// 定义默认图表配置
const defaultOption = {
  title: {
    text: '事件数(单位: 个)',
    top: '100',
    left: 'right',
    textStyle: {
      color: "rgba(255,255,255,0.65)",
      fontSize: 12
    }
  },
  tooltip: {
    position: 'right',
  },
  series: [
    {
      data: [],
      force: {
        repulsion: 100,
      },
      itemStyle: {
        borderColor: '#ff0000',
        borderWidth: 1,
        color: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#ff0000', // 0% 处的颜色
            },
            {
              offset: 0.3,
              color: 'rgba(9,21,45,0.1)', // 50% 处的颜色
            },
            {
              offset: 0.7,
              color: 'rgba(9,21,45,0.1)', // 50% 处的颜色
            },
            {
              offset: 1,
              color: '#ff0000', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
          type: 'linear',
        },
      },
      name: '',
      type: 'graph',
      layout: 'force',
      links: [],
      roam: true,
      label: {
        show: true,
        position: 'inside',
        formatter: params => {
          return transform(params.name, 8);
        },
      },
    },
  ],
}

@Component({
  selector: 'app-echart-force',
  templateUrl: './echart-force.component.html',
  styleUrls: ['./echart-force.component.css']
})

export class EchartForceComponent implements OnInit {
  // 2.获取容器
  @ViewChild('el') el: ElementRef;

  // 接收数据
  @Input() width = 400;
  @Input() height = 300;
  @Input() data = {
    xAxis: {
      label: "value",
      value: [
        {
          fontSize: 24,
          name: "因素1因素1因素1因素1",
          symbolSize: 100,
          value: 865
        },
        {
          fontSize: 16.912131613131194,
          name: "因素2因素2因素2因素2因素2因素2",
          symbolSize: 70.46721505471332,
          value: 726
        },
        {
          fontSize: 16.010465199082933,
          name: "因素3因素3因素3因素3因素3因素3因素3因素3",
          symbolSize: 66.71027166284556,
          value: 710
        },
        {
          fontSize: 13.724609564126027,
          name: "因素4因素4因素4因素4",
          symbolSize: 70,
          value: 671
        },
        {
          fontSize: 10,
          name: "因素5因素5因素5因素5因素5因素5因素5因素5因素5因素5因素5",
          symbolSize: 66,
          value: 643
        },
      ],
    },
  };
  // 定义echarts实例
  chart: any;

  constructor() { }

  ngOnInit() {
    this.initChart();
    this.handleInput();
  }

  // 3.初始化表格
  initChart() {
    // 基于准备好的dom（id），初始化echarts实例
    this.chart = echarts.init(this.el.nativeElement);
    // 5.2 自适应大小
    this.resize();
  }

  // 4.处理数据及配置
  handleInput() {
    if (this.data && this.data.xAxis && this.data.xAxis.value) {
      const chartOption = defaultOption;
      chartOption.series[0].data = this.data.xAxis.value;
      this.chart.setOption(chartOption);
    }
  }

  // 5.1 自适应大小
  resize() {
    if (this.chart) {
      this.chart.resize({
        width: this.width,
        height: this.height
      });
    }
  }

}
