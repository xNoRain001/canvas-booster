import isSupport from "../support/index"
import drawGrid from "../draw/grid"

const init = (booster) => {
  booster.isSupport = isSupport
  booster.drawGrid = drawGrid
}

export default init