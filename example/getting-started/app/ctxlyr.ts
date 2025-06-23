import { makeContextLayer } from "@ctxlyr/react-state"
import { FooBar } from "./store"

export const { Context, $, useObservable, useWatch } = makeContextLayer({
	FooBar,
})
