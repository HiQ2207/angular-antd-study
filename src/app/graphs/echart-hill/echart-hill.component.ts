import { Component, ElementRef, Input, OnInit, SimpleChange, ViewChild } from '@angular/core';
// 引入echarts
import * as echarts from 'echarts'

const defalutOption = {
  color: 'blue',
  theme: 'dark',
  // labelFormater: 20,
  formatValue: 'format',
  grid: {
    left: '20%',
    right: '20%',
    bottom: 20,
    top: 35,
    containLabel: false
  },
  seriesData: {
    series: [30, 7, 7]
  },
  axisData: ['异常资产数', '失陷资产数', '弱点资产数'],
  interval: 0
};
const defaultSvg = 'path://M0.953848677,184 C14.212771,184 42.9875578,107.333333 52.8611468,0 C63.3994595,107.333333 90.8336812,184 104.051822,184 C117.269963,184 -12.3050736,184 0.953848677,184 Z';
/**
 * 截图字符串：中文长度为2， 其他长度为1
 * value： 字符串
 * maxLength: 最大长度
 */
const judgeStringLen = (value, maxLength) => {
  let len = 0;
  let temp = '';
  for (let i = 0; i < value.length; i++) {
      if (value.charCodeAt(i) > 127 || value.charCodeAt(i) === 94) {
          len += 2;
      } else {
          len++;
      }
      if (len === maxLength - 1 || len === maxLength - 2) {
          temp = value.substr(0, i);
      }
      if (len >= maxLength) {
          value = temp + '...';
          break;
      }
  }
  return value;
};
// 将数值转换为 万、亿, 字符串格式的数值会被自动转换为数值， 如果转换失败则显示 NaN
const countTransform = (input: number): string => {
  if (isNaN(Number(input)) || !input) {
      return '0'; // input.toString();
  }
  input = Number(input);
  const digits = 2; // 保留小数位数

  if (input < Math.pow(10, 4)) {
      return String(input);
  }
  if (input < Math.pow(10, 8)) {
      return (input / Math.pow(10, 4)).toFixed(digits) + '万';
  }
  return (input / Math.pow(10, 8)).toFixed(digits) + '亿';
};
/**
 * 将数值转换:
 *     kilo   10e+3  K
 *     Mega   10e+6  M
 *     Giga   10e+9  G
 *     Tera   10e+12 T
 *     Peta   10e+15 P
 *     Exa    10e+18 E
 *     ...
 * 字符串格式的数值会被自动转换为数值， 如果转换失败则显示 NaN
 */
const ranges = [
  { divider: Math.pow(1024, 9), suffix: 'B' },
  { divider: Math.pow(1024, 8), suffix: 'Y' },
  { divider: Math.pow(1024, 7), suffix: 'Z' },
  { divider: Math.pow(1024, 6), suffix: 'E' },
  { divider: Math.pow(1024, 5), suffix: 'P' },
  { divider: Math.pow(1024, 4), suffix: 'T' },
  { divider: Math.pow(1024, 3), suffix: 'G' },
  { divider: Math.pow(1024, 2), suffix: 'M' },
  { divider: Math.pow(1024, 1), suffix: 'K' }
];
const fixed = 2;
const flowTransform = (n, unit= 'B') => {
  for (let i = 0; i < ranges.length; i++) {
      let approximate = n;
      if (ranges[i + 1]) {
          // 防止四舍五入后出现 1024.00M 这种情况
          approximate = (n / ranges[i + 1].divider).toFixed(fixed);
      }
      if (n >= ranges[i].divider || Number(approximate) >= 1024) {
          return (n / ranges[i].divider).toFixed(fixed) + ranges[i].suffix + unit;
      }
  }
  return n.toString() + unit;
};

const HillColorMap = {
  'orange': {
      beginColor: 'rgba(245,159,0,1)',
      endColor: 'rgba(225,90,34,0.5)',
  },
  'blue': {
      beginColor: '#00FFE4',
      endColor: 'rgba(51,102,255,0.50)',
  }
};

@Component({
  selector: 'app-echart-hill',
  templateUrl: './echart-hill.component.html',
  styleUrls: ['./echart-hill.component.css']
})
export class EchartHillComponent implements OnInit {
  // 接收外部传递的数据
  @Input() loading = false;
  @Input() option: any = defalutOption;
  @Input() data = {
    xAxis: {
      label: "资产异常类型分布",
      value: [
        {
          value: "x轴1",
          show: true
        },
        {
          value: "x轴2",
          show: true
        },
        {
          value: "x轴3",
          show: true
        },
        {
          value: "x轴",
          show: true
        },
        {
          value: "x轴5",
          show: true
        },
        {
          value: "x轴6",
          show: true
        },
        {
          value: "x轴7",
          show: true
        }
      ]
    },
    yAxis: {
      label: "y轴数值",
      value: [
        [1, 2, 3, 8, 7, 5, 4]
      ]
    },
  };
  @Input() width = 400;
  @Input() height = 300;
  // DOM操作
  @ViewChild('el') el: ElementRef;

  oldSelected: any;
  chart: any;
  seriesData: any = {
    series: [30, 7, 7]
  };
  axisData = ['x轴11', 'x轴22', 'x轴33'];
  options: any = defalutOption;

  constructor() { }

  ngOnInit() {
    // 处理数据
    this.handleInput();
    // 解除resize
    this.relieve();
    // 初始化图表
    this.initChart();
    // 渲染图表
    this.renderChart();
  }

  ngOnChanges(changes: {
    [propKey: string]: SimpleChange
  }) {
    this.handleInput();
    this.relieve();
    this.initChart();
    this.renderChart();
  }

  // 处理数据
  handleInput() {
    this.axisData = this.options.axisData;
    this.seriesData = this.options.seriesData;
    // 将输入数据与本地数据合并
    this.options = { ...defalutOption, ...this.option };
    // 确定x轴展示项，（得到this.axisData）
    if (this.data && this.data.xAxis && this.data.xAxis.value) {
      const showArrayIndex: number[] = []
      const axisDataItem = this.data.xAxis.value.filter((item: any, index: number) => {
        if (item.show !== false) {
          showArrayIndex.push(index);
          return true;
        };
        return false;
      });
      console.log('axisDataItem', axisDataItem);
      console.log('showArrayIndex', showArrayIndex);
      this.axisData = axisDataItem.map(item => item.value);
      console.log('this.axisData', this.axisData);

      // 根据x轴展示项过滤其y轴对应的值（得到this.seriesData）
      if (this.data && this.data.yAxis && this.data.yAxis.value) {
        this.seriesData = {
          series: this.data.yAxis.value[0].filter((item: any, index: number) => {
            return showArrayIndex.indexOf(index) !== -1;
          })
        };
        console.log('this.seriesData', this.seriesData);
      }
    }
  }

  ngOnDestroy() {
    this.relieve();
  }

  // 图表相关配置
  renderChart() {
    const op: any = {
      title: {
        text: '',
        textStyle: { fontSize: 14 },
        padding: [0, 0, 0, 0],
        textBaseline: 'top'
      },
      color: [],
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: [15, 20, 15, 20],
        textStyle: {
          fontSize: '12'
        },
        formatter: null // 自定义悬浮框信息
      },
      legend: {
        data: [],
      },
      grid: {
        left: '15%',
        right: '10%',
        top: 35,
        bottom: 50,
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: [],
        boundaryGap: false,
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          textStyle: {
            color: '#000000'
          },
          interval: 'auto',
          rotate: 45,
          formatter: null
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['rgba(255,255,255,0.65)'],
            type: 'dashed',
            width: 1
          }
        }
      }],
      yAxis: [{
        type: 'value',
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: { show: false }
      }],
      series: []
    };
    const series = [];
    const keys = Object.keys(this.seriesData);

    const labelColor = this.options.theme === 'dark' ? 'rgba(255,255,255,0.65)' : '#000000';

    let itemStyleColor = this.options.svgSymbol ? this.options.svgSymbol.color : {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
        offset: 0, color: HillColorMap[this.options.color] ?
          HillColorMap[this.options.color].beginColor
          : this.options.color.beginColor // 0% 处的颜色
      }, {
        offset: 1, color: HillColorMap[this.options.color] ?
          HillColorMap[this.options.color].endColor
          : this.options.color.endColor // 100% 处的颜色
      }],
      global: false // 缺省为 false
    };

    if (this.options.itemStyleColor) {
      itemStyleColor = this.options.itemStyleColor;
    }

    // 图表组件离容器四周的距离
    if (this.options.grid) {
      // tslint:disable-next-line: forin
      for (const key in this.options.grid) {
        op.grid[key] = this.options.grid[key];
      }
      // 这是设置grid.top
      if (!this.options.grid.top) {
        let legendWifth = 6;
        if (this.options.containerWifth) {
          legendWifth *= this.options.containerWifth;
        }
        if (op.legend.data.length > legendWifth * 3) {
          op.grid.top = 100;
        } else if (op.legend.data.length > legendWifth * 2) {
          op.grid.top = 85;
        } else if (op.legend.data.length > legendWifth) {
          op.grid.top = 70;
        }
      }

      op.grid.bottom = 50;
    }

    // 刻度标签设置
    let offset = -20;
    if (!op.grid.containLabel) {
      offset = this.height - op.grid.bottom - op.grid.top - 6 + 8;
      offset = 0 - offset;
    }
    keys.forEach((v, i) => {
      series.push({
        type: 'pictorialBar',
        barCategoryGap: this.options.svgSymbol ? this.options.svgSymbol.barCategoryGap : '-50%',
        barMinHeight: 10,  // 设置最小高度
        barMaxWidth: this.options.barMaxWidth ? this.options.barMaxWidth : 'default',
        symbol: this.options.svgSymbol ? this.options.svgSymbol.path : defaultSvg,
        itemStyle: {
          normal: {
            color: itemStyleColor,
            // opacity: 0.6
          },
          emphasis: {
            opacity: 1
          }
        },
        label: {
          show: true,
          position: op.grid.containLabel ? 'top' : 'insideBottom',
          offset: [0, offset],
          color: labelColor,
          textStyle: {
            color: labelColor,
            fontSize: 12
          },
          formatter: val => {
            if (this.options.formatValue === 'flow') {
              return flowTransform(val.value);
            } else {
              return countTransform(val.value);
            }
          }
        },
        data: this.seriesData[v],
        z: 10
      });
    });
    op.series = series;
    console.log('op.series', op.series);
    op.color = ['#6666FF', '#0099FF', '#66CC33', '#00CCCC', '#FFCC33', '#f8c300', '#FF6699', '#68b92e', '#0093dd', '#5dcdf5',
      '#e77817', '#667ab3', '#9866b4', '#36b684', '#da251d', '#68b920', '#3bb3c2', '#56c9a9', '#c55cd5', '#da307c'];
    op.xAxis[0].data = this.axisData;

    // 主题色
    if (this.options.theme === 'dark') {
      // op.xAxis[0].axisLabel['interval'] = 0;
      op.xAxis[0].splitLine.lineStyle.color = 'rgba(255,255,255, 0.65)';
      op.xAxis[0].axisLabel.textStyle.color = 'rgba(255,255,255,0.85)';
      op.xAxis[0].axisLabel.rotate = 30;
    } else if (this.options.theme === 'light') {
      op.xAxis[0].splitLine.lineStyle.color = 'rgba(0, 0, 0, 0.65)';
      op.xAxis[0].axisLabel.textStyle.color = 'rgba(0, 0, 0, 0.85)';
      op.xAxis[0].splitLine.lineStyle.color = ['rgba(0, 0, 0, 0.25)'];
    }
    // 刻度间隔
    if (this.options.interval !== undefined) {
      // op.xAxis[0].axisLabel['interval'] = 0;
      op.xAxis[0].axisLabel.interval = this.options.interval;
    }
    // 文字倾斜
    if (this.options.rotate) {
      op.xAxis[0].axisLabel.rotate = this.options.rotate;
    } else if (this.options.rotate === 0) {
      op.xAxis[0].axisLabel.rotate = 0;
    }
    // x轴文本样式自定义
    if (this.options.labelFormater) {
      op.xAxis[0].axisLabel.formatter = (value) => {
        return judgeStringLen(value, Number(this.options.labelFormater));
      };
    }

    // 调整柱子之间的间距
    if (this.options.barCategoryGap) {
      op.series[op.series.length - 1].barCategoryGap = this.options.barCategoryGap;
    }

    // 设置调色盘颜色列表
    if (this.options.color) {
      op.color = this.options.color;
    }

    // category轴间隔几个显示
    if (this.options.interval != null) {
      op.xAxis[0].axisLabel.interval = this.options.interval;
    }

    // 格式化tooltip展示的数据
    if (this.options.formatValue === 'flow') {
      op.tooltip['formatter'] = val => {
        return val.name + ': ' + flowTransform(val.value);
      };
    }
    if (this.options.formatValue === 'format') {
      op.tooltip['formatter'] = val => {
        return val.name + ': ' + countTransform(val.value);
      };
    }
    // 自定义悬浮层信息
    if (this.options.formatter) {
      op.tooltip['formatter'] = this.options.formatter;
    }
    // 是否展示X轴向的dashed
    if (this.options.showSplitLine !== undefined) {
      op.xAxis[0].splitLine.show = this.options.showSplitLine;
    }

    const selected = this.oldSelected;

    this.chart.clear();

    op.legend.selected = {};
    for (const key in selected) {
      if (selected.hasOwnProperty(key)) {
        if (selected[key] === false) {
          op.legend.selected[key] = false;
        }
      }
    }
    this.chart.setOption(op, false);
  }

  // 初始化画布，绑定resize事件
  initChart() {
    this.chart = echarts.init(this.el.nativeElement);
    const echartsheight = this.height - 15;
    // tslint:disable-next-line: no-unused-expression
    this.width && this.resize(this.width, echartsheight);
  }

  // 解除resize
  relieve() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  // 图形元素自适应
  resize(width, height) {
    if (this.chart) {
      this.chart.resize({ width: width, height: height });
    }
  }

}
