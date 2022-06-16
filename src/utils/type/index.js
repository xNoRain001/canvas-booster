const getType = v => {
  if (v == null) {
    return `${v}`
  }

  const type = typeof v

  return !/^(object|function)$/.test(type)
    ? type
    : Object.prototype.toString.call(v).slice(8, -1)
}

const isObject = v => {
  return getType(v) === 'Object'
}

const isCanvas = v => {
  return getType(v) === 'HTMLCanvasElement'
}

const isContext = v => {
  return getType(v) === 'CanvasRenderingContext2D'
}

export {
  getType,
  isObject,
  isCanvas,
  isContext
}