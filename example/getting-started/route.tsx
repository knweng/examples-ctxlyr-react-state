import { createFileRoute } from "@tanstack/react-router"
import { Layer } from "./app/app.tsx"

export const Route = createFileRoute("/example/getting-started")({
	component: Layer,
})
