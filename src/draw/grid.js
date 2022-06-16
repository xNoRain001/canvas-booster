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
    lineWidth = 0.5,
    stepX = 10,
    stepY = 10
   } = options

  context.lineWidth = lineWidth
  context.strokeStyle = color

  // horizontal line
  for (let i = stepY + 0.5; i < context.canvas.height; i += stepY) {
    context.beginPath()
    context.moveTo(0, i)
    context.lineTo(context.canvas.width, i)
    context.stroke()
  }

  // vertical line
  for (let i = stepX + 0.5; i < context.canvas.width; i += stepX) {
    context.beginPath()
    context.moveTo(i, 0)
    context.lineTo(i, context.canvas.height)
    context.stroke()
  }
}

export default drawGrid