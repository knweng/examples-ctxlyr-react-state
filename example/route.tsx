import { createFileRoute, Link, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/example/")({
	component: () => (
		<div>
			Hello!
			<br /> <Outlet />
		</div>
	),
})
