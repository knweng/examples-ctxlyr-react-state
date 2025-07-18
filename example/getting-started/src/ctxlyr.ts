import { makeContextLayer } from "@ctxlyr/react-state"
import { Chat } from "./store"

const ctxlyr = makeContextLayer({ Chat })

export const { Context, select$, useWatch } = ctxlyr
