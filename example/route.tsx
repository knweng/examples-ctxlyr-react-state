import { createFileRoute } from "@tanstack/react-router"
import "./global.css"

export const Route = createFileRoute("/example/")({
	head: () => ({
		meta: [
			{
				title: "Examples @ctxlyer/react-state",
			},
		],
	}),
	component: () => <div />,
})
