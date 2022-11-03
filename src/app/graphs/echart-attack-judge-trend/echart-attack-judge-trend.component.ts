import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
// 1.导入echarts
import * as echarts from 'echarts';

// 定义默认图表配置
const defalutOption = {
  color: ['#00FFE4'],
  grid: {
    left: '8%',
    right: '4%',
    top: 50,
    bottom: 10,
    containLabel: true,
  },
  title: {
    text: '',
    textStyle: { fontSize: 14 },
    padding: [0, 0, 0, 0],
    textBaseline: 'top',
    left: 0,
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: [15, 20, 15, 20],
    textStyle: {
      fontSize: '12',
    },
    // formatter: this.appEchartsLine.formatter || null, // 自定义悬浮框信息
    formatter: null, // 自定义悬浮框信息
  },
  legend: {
    data: ['对象1', '对象2'],
    icon: 'rect',
    inactiveColor: "#656565",
    itemHeight: 8,
    itemWidth: 8,
    right: 40,
    show: true,
    textStyle: {
      color: 'rgba(255,255,255,1)',
    },
    top: 10,
    type: 'scroll',
  },
  xAxis: [
    {
      axisLine: {
        lineStyle: { color: '', width: 0 }
      },
      axisLabel: {
        rotate: 30,
        // interval: 0,
        margin: 9,
        textStyle: { color: 'rgba(255,255,255,0.65)' },
      },
      type: 'category',
      boundaryGap: [0, 0.03], // 设置x轴最大最小刻度,可以解决图表展示不全的问题
      data: [],
    },
  ],
  yAxis: [
    {
      name: '',
      nameTextStyle: { color: '#ff0000' },
      axisLine: { lineStyle: { color: '', width: 0 } },
      axisLabel: {
        formatter(val) {
          return val;
        },
        interval: 0,
        margin: 8,
        textStyle: { color: 'rgba(255,255,255,0.65)' },
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#ff0000',
        },
      },
      axisTick: { show: false },
      type: 'value',
    },
  ],
  series: [
    {
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(255,122,0,1)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(255,122,0,0)', // 100% 处的颜色
            },
          ],
        },
        opacity: 0.3,
      },
      lineStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: '#FF7A00', // 0% 处的颜色
            },
          ],
        },
      },
      data: [],
      name: "对象1",
      smooth: 0.3,
      symbol: "none",
      type: "line",
      itemStyle: {
        normal: {
          borderWidth: 1,
          color: "#FF7A00"
        }
      }
    },
    {
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#3366FF', // 0% 处的颜色
            },
          ],
        },
        opacity: 0.3,
      },
      lineStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: '#3366FF', // 0% 处的颜色
            },
          ],
        },
      },
      data: [],
      name: "对象2",
      smooth: 0.3,
      symbol: "none",
      type: "line",
      itemStyle: {
        normal: {
          borderWidth: 1,
          color: "#3366FF"
        }
      }
    },
  ]
};

@Component({
  selector: 'app-echart-attack-judge-trend',
  templateUrl: './echart-attack-judge-trend.component.html',
  styleUrls: ['./echart-attack-judge-trend.component.css']
})
export class EchartAttackJudgeTrendComponent implements OnInit {
  // 2.获取DOM
  @ViewChild('el') el: ElementRef;

  // 3.接收数据
  @Input() width = 800;
  @Input() height = 300;
  @Input() data = {
    xAxis: {
      label: "time",
      value: [
        { 'value': '2022-10-13 00:00:00' },
        { 'value': '2022-10-13 01:00:00' },
        { 'value': '2022-10-13 02:00:00' },
        { 'value': '2022-10-13 03:00:00' },
        { 'value': '2022-10-13 04:00:00' },
        { 'value': '2022-10-13 05:00:00' },
        { 'value': '2022-10-13 06:00:00' },
        { 'value': '2022-10-13 07:00:00' },
        { 'value': '2022-10-13 08:00:00' },
        { 'value': '2022-10-13 09:00:00' },
        { 'value': '2022-10-13 10:00:00' },
      ],
    },
    yAxis: {
      label: "value1",
      value: [
        { 'value': 78 },
        { 'value': 1775 },
        { 'value': 6123 },
        { 'value': 7671 },
        { 'value': 6319 },
        { 'value': 7514 },
        { 'value': 6213 },
        { 'value': 4526 },
        { 'value': 4575 },
        { 'value': 2427 },
        { 'value': 8642 },
      ],
    },
    zAxis: {
      label: "value2",
      value: [
        { 'value': 1 },
        { 'value': 25 },
        { 'value': 88 },
        { 'value': 128 },
        { 'value': 546 },
        { 'value': 532 },
        { 'value': 8556 },
        { 'value': 7889 },
        { 'value': 5634 },
        { 'value': 4653 },
        { 'value': 5467 },
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

  // 4.初始化图表
  initChart() {
    // 4.1 基于准备好的dom（id），初始化echarts实例
    this.chart = echarts.init(this.el.nativeElement);
    // 6.2 自适应
    this.resize();
  }

  // 5.处理数据
  handleInput() {
    const chartOption = defalutOption;
    chartOption.xAxis[0].data = this.data.xAxis.value;
    chartOption.series[0].data = this.data.yAxis.value;
    chartOption.series[1].data = this.data.zAxis.value;
    this.chart.setOption(chartOption);
  }

  // 6.1 自适应大小
  resize() {
    if (this.chart) {
      this.chart.resize({
        width: this.width,
        height: this.height
      });
    }
  }

}
