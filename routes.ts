import { index, physical, rootRoute } from "@tanstack/virtual-file-routes"

export const routes = rootRoute("./src/routes/root.tsx", [
	index("./src/routes/home.tsx"),
	physical("/example", "example"),
])
