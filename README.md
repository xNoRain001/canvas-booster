## 介绍

canvas工具库。

## 下载

### npm

```
npm i canvas-booster
```

### src

```html
<script src="../dist/canvas-booster.js"></script>
```

## 使用

```javascript
// import canvasBooster from 'canvas-booster'

canvasBooster[method]()
```

## API

### isSupport

```javascript
/**
 * 判断浏览器是否支持 canvas
 *
 * @returns {boolean} - 是否支持的结果
 */
canvasBooster.isSupport()
```

### drawGrid 

```javascript
/**
 * 绘制网格
 *
 * @param {(HTMLCanvasElement|Object)} options - 配置项
 * @param {CanvasRenderingContext2D} options.context - 二维渲染上下文
 * @param {string} [options.color=black] - 网格线条颜色
 * @param {number} [options.lineWidth=1] - 网格线宽
 * @param {number} [options.stepX=10] - 网格竖线间距
 * @param {number} [options.stepY=10] - 网格横线间距
 * @param {number} [options.margin=0] - 网格距离上下左右的偏移
 */
// 只传 canvas element，会使用默认配置
canvasBooster.drawGrid(canvas) 

// 使用自定义配置
canvasBooster.drawGrid({ 
  context: canvas.getContext('2d'),
  color: 'black',
  lineWidth: 1,
  stepX: 10,
  stepY: 10,
  margin: 0
}) 
```

### drawAxis 

```javascript
/**
 * 绘制坐标轴
 *
 * @param {(HTMLCanvasElement|Object)} options - 配置项 
 * @param {CanvasRenderingContext2D} options.context - 二维渲染上下文
 * @param {Object} [options.axis] - 坐标轴配置项
 * @param {number} [options.axis.margin=20.5] - 坐标轴距离上下左右的偏移
 * @param {number} [options.axis.lineWidth=1] - 坐标轴的线度
 * @param {string} [options.axis.color=black] - 坐标轴的颜色
 * @param {Object} [options.tick] - 刻度线配置项
 * @param {number} [options.tick.spacing=10] - 刻度线之间的距离
 * @param {number} [options.tick.lineWidth=1] - 刻度线的线宽
 * @param {number} [options.tick.length=6] - 刻度线的长度
 * @param {string} [options.tick.color=black] - 刻度线的颜色
 * @param {Object} [options.highlightedTick] - 大刻度线的配置项
 * @param {number} [options.highlightedTick.lineWidth=1] - 大刻度线的线宽
 * @param {number} [options.highlightedTick.length=10] - 大刻度线的长度
 * @param {string} [options.highlightedTick.color=black] - 大刻度线的颜色
 */
// 使用默认配置
canvasBooster.drawAxis(canvas)

// 使用自定义配置
canvasBooster.drawAxis({
  context: canvas.getContext('2d'),

  axis: {
    margin: 20.5,
    lineWidth: 1,
    color: 'black'
  },

  tick: {
    spacing: 10,
    lineWidth: 1,
    length: 6,
    color: 'black'
  },

  highlightedTick: {
    lineWidth: 1,
    length: 10,
    color: 'black'
  }
})
```

### drawDashedLine 

```javascript
/**
 * 绘制虚线
 *
 * @param {Object} options - 配置项
 * @param {CanvasRenderingContext2D} options.context - 二维渲染上下文
 * @param {number} options.x1 - 虚线起始位置 x 坐标
 * @param {number} options.y1 - 虚线起始位置 y 坐标
 * @param {number} options.x2 - 虚线结束位置 x 坐标
 * @param {number} options.y2 - 虚线结束位置 y 坐标
 * @param {string} [options.color=black] - 虚线颜色
 * @param {number[]} [options.pattern=[10, 5]] - 一组描述交替绘制线段长度和间距长度
 *  的数字。
 */
canvasBooster.drawDashedLine({
  context: canvas.getContext('2d'),
  color: 'black',
  x1: 10,
  y1: 10,
  x2: 290,
  y2: 10,
  pattern: [10, 5]
})
```