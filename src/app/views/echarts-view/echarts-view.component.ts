import { Component, OnInit } from '@angular/core';

import * as echarts from 'echarts';

@Component({
  selector: 'app-echarts-view',
  templateUrl: './echarts-view.component.html',
  styleUrls: ['./echarts-view.component.css']
})
export class EchartsViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initCharts();
    this.initCharts1();
    this.initCharts2();
    this.initCharts3();
  }

  initCharts() {
    const ec = echarts as any;
    // 基于准备好的dom（id），初始化echarts实例
    const lineChart = ec.init(document.getElementById('Chart'));
    const lineChartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'cross' }
      },
      // 图表标题
      title: {
        text: 'ECharts 入门示例1'
      },
      // x轴坐标
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        name: '月份'
      },
      // y轴坐标
      yAxis: {
        type: 'value',
        name: '数值'
      },
      // 数据
      series: [{
        data: [100, 250, 310, 480, 550, 420, 370],
        type: 'line'
      }]
    }
    lineChart.setOption(lineChartOption);
  }

  initCharts1() {
    const ec = echarts as any;
    // 基于准备好的dom（id），初始化echarts实例
    const lineChart = ec.init(document.getElementById('Chart1'));
    const lineChartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'cross' }
      },
      // 图表标题
      title: {
        text: 'ECharts 入门示例2'
      },
      legend: {},
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ]
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '降水量',
          min: 0,
          max: 250,
          position: 'right',
          axisLabel: {
            formatter: '{value} ml'
          }
        },
        {
          type: 'value',
          name: '温度',
          min: 0,
          max: 25,
          position: 'left',
          axisLabel: {
            formatter: '{value} °C'
          }
        }
      ],
      series: [
        {
          name: '降水量',
          type: 'bar',
          yAxisIndex: 0,
          data: [6, 32, 70, 86, 68.7, 100.7, 125.6, 112.2, 78.7, 48.8, 36.0, 19.3]
        },
        {
          name: '温度',
          type: 'line',
          smooth: true,
          yAxisIndex: 1,
          data: [
            6.0,
            10.2,
            10.3,
            11.5,
            10.3,
            13.2,
            14.3,
            16.4,
            18.0,
            16.5,
            12.0,
            5.2
          ]
        }
      ]
    }
    lineChart.setOption(lineChartOption);
  }

  initCharts2() {
    const ec = echarts as any;
    // 基于准备好的dom（id），初始化echarts实例
    const lineChart = ec.init(document.getElementById('Chart2'));
    const lineChartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'cross' }
      },
      // 图表标题
      title: {
        text: 'ECharts 入门示例3'
      },
      series: [
        {
          type: 'pie',
          data: [
            {
              value: 335,
              name: '直接访问'
            },
            {
              value: 234,
              name: '联盟广告'
            },
            {
              value: 1548,
              name: '搜索引擎'
            }
          ]
        }
      ]
    }
    lineChart.setOption(lineChartOption);
  }

  initCharts3() {
    const ec = echarts as any;
    // 基于准备好的dom（id），初始化echarts实例
    const lineChart = ec.init(document.getElementById('Chart3'));
    const lineChartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'cross' }
      },
      // 图表标题
      title: {
        text: 'ECharts 入门示例4'
      },
      xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      },
      yAxis: {},
      series: [
        {
          type: 'scatter',
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ]
    };
    lineChart.setOption(lineChartOption);
  }

  // 使用自定义指令后，指定声明echarts的配置项即可
  option1 = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' }
    },
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
  }

  option2 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' }
    },
    // 图表标题
    title: {
      text: 'ECharts 入门示例2'
    },
    legend: {},
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        data: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月'
        ]
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '降水量',
        min: 0,
        max: 250,
        position: 'right',
        axisLabel: {
          formatter: '{value} ml'
        }
      },
      {
        type: 'value',
        name: '温度',
        min: 0,
        max: 25,
        position: 'left',
        axisLabel: {
          formatter: '{value} °C'
        }
      }
    ],
    series: [
      {
        name: '降水量',
        type: 'bar',
        yAxisIndex: 0,
        data: [6, 32, 70, 86, 68.7, 100.7, 125.6, 112.2, 78.7, 48.8, 36.0, 19.3]
      },
      {
        name: '温度',
        type: 'line',
        smooth: true,
        yAxisIndex: 1,
        data: [
          6.0,
          10.2,
          10.3,
          11.5,
          10.3,
          13.2,
          14.3,
          16.4,
          18.0,
          16.5,
          12.0,
          5.2
        ]
      }
    ]
  }

  option3 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' }
    },
    // 图表标题
    title: {
      text: 'ECharts 入门示例3'
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 335,
            name: '直接访问'
          },
          {
            value: 234,
            name: '联盟广告'
          },
          {
            value: 1548,
            name: '搜索引擎'
          }
        ]
      }
    ]
  }

  option4 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' }
    },
    // 图表标题
    title: {
      text: 'ECharts 入门示例4'
    },
    xAxis: {
      data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [
      {
        type: 'scatter',
        data: [220, 182, 191, 234, 290, 330, 310]
      }
    ]
  }
}
