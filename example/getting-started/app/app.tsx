import { Context } from "@ctxlyr/react-state/use"

export const Layer = () => {
	return (
		<Context.FooBar.Layer initial={{ foo: "jux" }}>
			<App />
		</Context.FooBar.Layer>
	)
}

const App = () => {
	return <p>home example</p>
}
