import { Provider } from "@/components/provider"
import {
	HeadContent,
	Link,
	Outlet,
	createRootRoute,
	redirect,
} from "@tanstack/react-router"

export const Route = createRootRoute({
	component: RootComponent,
	beforeLoad: ({ location }) => {
		if (location.pathname === "/") {
			throw redirect({
				to: "/example/getting-started",
				replace: true,
			})
		}
	},
	notFoundComponent: () => {
		return (
			<div>
				<Link to="/">Home</Link>
			</div>
		)
	},
})

function RootComponent() {
	return (
		<Provider>
			<div className="example-showcase">
				<HeadContent />
				<Outlet />
			</div>
		</Provider>
	)
}
