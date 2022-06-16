const isSupport = () => {
  return document.createElement('canvas').getContext
    ? true
    : false
}

export default isSupport