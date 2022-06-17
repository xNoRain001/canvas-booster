import { isCanvas } from "../utils/index"

const drawGrid = (options = {}) => {
  
  // options is canvas element
  if (isCanvas(options)) {
    const canvas = options
    options = Object.create(null)
    options.context = canvas.getContext('2d')
  }

  const { 
    context,
    color = 'black',
    lineWidth = 1,
    stepX = 10,
    stepY = 10,
    margin = 0
  } = options

  context.lineWidth = lineWidth
  context.strokeStyle = color

  const width = context.canvas.width
  const height = context.canvas.height

  // horizontal line
  for (
    let x1 = margin,
      x2 = width - margin,
      y = margin + stepY + 0.5,
      boundary = height - margin;
    y < boundary; 
    y += stepY
  ) {
    context.beginPath()
    context.moveTo(x1, y)
    context.lineTo(x2, y)
    context.stroke()
  }

  // vertical line
  for (
    let y1 = margin,
      y2 = height - margin,
      x = margin + stepX + 0.5,
      boundary = width - margin;
    x < boundary; 
    x += stepX
  ) {
    context.beginPath()
    context.moveTo(x, y1)
    context.lineTo(x, y2)
    context.stroke()
  }
}

export default drawGrid