// // 引入 ECharts 主模块
// import * as echarts from 'echarts/lib/echarts'
// // 引入提示框和标题组件
// import 'echarts/lib/component/legend'
// import 'echarts/lib/component/title'

// import 'echarts/lib/chart/bar'     // 引入柱状图
// import 'echarts/lib/chart/radar'   // 引入雷达图
// import 'echarts/lib/chart/pie'   // 引入饼状图
// import 'echarts/lib/chart/line'   // 引入折线图


// require('echarts/theme/macarons') // echarts theme
// export default echarts


import * as echarts from 'echarts/core';

// 按需引入图表类型

import { BarChart, RadarChart, PieChart, LineChart } from 'echarts/charts';

// 按需引入标题，提示框组件

import {GridComponent, TitleComponent, TooltipComponent, LegendComponent  } from 'echarts/components';

// 引入 Canvas 渲染器

import { CanvasRenderer } from 'echarts/renderers';



// 注册必须的组件

echarts.use([
  BarChart, RadarChart, PieChart, LineChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  CanvasRenderer
]);

import { VisualMapComponent } from 'echarts/components';
echarts.use([VisualMapComponent]); 


import { DataZoomComponent } from 'echarts/components';
echarts.use([DataZoomComponent]); 


require('echarts/theme/macarons') // echarts theme
export default echarts