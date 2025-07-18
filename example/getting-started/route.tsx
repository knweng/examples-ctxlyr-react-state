import { createFileRoute } from "@tanstack/react-router"
import { StoreLayer } from "./app/app.tsx"

export const Route = createFileRoute("/example/getting-started")({
	head: () => ({
		meta: [
			{
				title: "Getting Started › example › @ctxlyr/react-state",
			},
		],
	}),
	component: StoreLayer,
})
