import isSupport from "../support/index"
import { drawGrid, drawAxis, drawDashedLine } from "../draw/index"

const init = (booster) => {
  booster.isSupport = isSupport
  booster.drawGrid = drawGrid
  booster.drawAxis = drawAxis
  booster.drawDashedLine = drawDashedLine
}

export default init