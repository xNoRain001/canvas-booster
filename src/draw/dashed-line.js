const drawDashedLine = (options = {}) => {
  const {
    context,
    x1, 
    y1, 
    x2, 
    y2, 
    color = black,
    pattern = [10, 5]
  } = options

  context.strokeStyle = color
  context.setLineDash(pattern)
  context.beginPath()
  context.moveTo(x1, y1)
  context.lineTo(x2, y2)
  context.stroke()
}

export default drawDashedLine