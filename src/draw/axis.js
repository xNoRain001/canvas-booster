import { isCanvas, isObject } from "../utils/index"

const drawAxis = (options = {}) => {
  
  // options is canvas element
  if (isCanvas(options)) {
    const canvas = options
    options = Object.create(null)
    options.context = canvas.getContext('2d')
  }

  if (!isObject(options.axis)) {
    options.axis = {}
  } else {
    options.axis.margin
      ? options.axis.margin += 0.5
      : null
  }

  if (!isObject(options.tick)) {
    options.tick = {}
  }

  if (!isObject(options.highlightedTick)) {
    options.highlightedTick = {}
  }

  const { 
    margin: axisMargin = 20.5,
    lineWidth: axisLineWidth = 1,
    color: axisColor = 'black'
  } = options.axis

  const { 
    spacing: tickSpacing = 10,
    lineWidth: tickLineWidth = 1,
    color: tickColor = 'black',
    length: tickLength = 6
  } = options.tick
  
  const { 
    lineWidth: highlightedTickLineWidth = 1,
    color: highlightedTickColor = 'black',
    length: highlightedTickLength = 10
  } = options.highlightedTick

  const { context } = options
  const width = context.canvas.width
  const height = context.canvas.height

  const xAxisStart = {
    x: axisMargin,
    y: height - axisMargin
  }
  const xAxisEnd = {
    x: width - axisMargin,
    y: height - axisMargin
  }
  const yAxisStart = {
    x: axisMargin,
    y: height - axisMargin
  }
  const yAxisEnd = {
    x: axisMargin,
    y: axisMargin
  }

  const _drawAxis = function () {
    context.strokeStyle = axisColor
    context.lineWidth = axisLineWidth
    drawXAxis()
    drawYAxis()

    drawXAxisTick()
    drawYAxisTick()
  }
  
  // X 轴
  const drawXAxis = function () {
    context.beginPath()
    context.moveTo(xAxisStart.x, xAxisStart.y)
    context.lineTo(xAxisEnd.x, xAxisEnd.y)
    context.stroke()
  }
  
  // Y 轴
  const drawYAxis = function () {
    context.beginPath()
    context.moveTo(yAxisStart.x, yAxisStart.y)
    context.lineTo(yAxisEnd.x, yAxisEnd.y)
    context.stroke()
  }
  
  const drawXAxisTick = function () {
    let length = null
  
    for (let i = xAxisStart.x + tickSpacing, counter = 1; i < xAxisEnd.x; i += tickSpacing, counter++) {
      context.beginPath()
  
      if (counter % 5 === 0) {
        context.strokeStyle = highlightedTickColor
        context.lineWidth = highlightedTickLineWidth
        length = highlightedTickLength >> 1
      } else {
        context.strokeStyle = tickColor
        context.lineWidth = tickLineWidth
        length = tickLength >> 1
      }
      
      context.moveTo(i, xAxisStart.y + length)
      context.lineTo(i, xAxisStart.y - length)
      context.stroke()
    }
  }
  
  const drawYAxisTick = function () {
    let length = null
  
    for (let i = yAxisStart.y - tickSpacing, counter = 1; i > yAxisEnd.y; i -= tickSpacing, counter++) {
      context.beginPath()
  
      if (counter % 5 === 0) {
        context.strokeStyle = highlightedTickColor
        context.lineWidth = highlightedTickLineWidth
        length = highlightedTickLength >> 1
        context.restore()
      } else {
        context.strokeStyle = tickColor
        context.lineWidth = tickLineWidth
        length = tickLength >> 1
      }
      
      context.moveTo(yAxisStart.x + length, i)
      context.lineTo(yAxisStart.x - length, i)
      context.stroke()
    }
  }

  _drawAxis()
}

export default drawAxis


