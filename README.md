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
/*
 * 判断浏览器是否支持 canvas
 *
 * @return {boolean} 是否支持的结果
 */
canvasBooster.isSupport()
```

### drawGrid 

```javascript
/*
 * 绘制网格
 *
 * @param {HTMLCanvasElement|object} options 配置项 
 */

// 只传 canvas element，会使用默认配置
canvasBooster.drawGrid(canvas) 

// 使用自定义配置
canvasBooster.drawGrid({ 
    context: canvas.getContext('2d'), // required
    color: 'black', // optional，默认值： 'black'
    lineWidth: 1, // optional，默认值： 1
    stepX: 10, // optional，默认值： 10
    stepY: 10, // optional，默认值： 10
    margin: 0 // optional，默认值： 0
}) 

```

### drawAxis 

```javascript
/*
 * 绘制坐标轴
 *
 * @param {HTMLCanvasElement|object} options 配置项 
 */

// 使用默认配置
canvasBooster.drawAxis(canvas)

// 使用自定义配置
canvasBooster.drawAxis({
  context: canvas.getContext('2d'), // required

  axis: {
    margin: 20.5,
    lineWidth: 1,
    color: 'black'
  },

  tick: {
    spacing: 10,
    lineWidth: 1,
    color: 'black',
    length: 6
  },

  highlightedTick: {
    lineWidth: 1,
    color: 'black',
    length: 10
  }
})
```

### drawDashedLine 

```javascript
/*
 * 绘制虚线
 *
 * @param {object} options 配置项
 */

canvasBooster.drawDashedLine({
  context: canvas.getContext('2d'), // required
  x1: 10, // required
  y1: 10, // required
  x2: 290, // required
  y2: 10, // required
  color: 'black',
  pattern: [10, 5]
})
```