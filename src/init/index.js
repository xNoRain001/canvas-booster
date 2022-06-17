import isSupport from "../support/index"
import { drawGrid, drawAxis } from "../draw/index"

const init = (booster) => {
  booster.isSupport = isSupport
  booster.drawGrid = drawGrid
  booster.drawAxis = drawAxis
}

export default init