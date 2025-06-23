import { Action, Store, to, peek$ } from "@ctxlyr/react-state"
import type { $Model } from "./model.ts"

export const FooBar = Store.make(
	Store.type<$Model>(),
	Store.initial("Foo"),
	Store.actions(
		Action.onEntry("Foo", () => {}),
		Action.when("pauseThing", () => {}),
		Action.when("doNextThing", ({ context, payload }) => {
			return context.set({ foo: payload })
		}),
		Action.when("doThing", ({ payload, context }) => {
			const contextPeek$ = context.peek()
			const foo = peek$(context.foo$)

			return to.slice("Bar.Qux", { items: [foo], name: payload })
		}),
		Action.exhaustive,
	),
)
