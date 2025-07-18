import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import react from "@vitejs/plugin-react"
import { tanstackRouter } from "@tanstack/router-plugin/vite"

export default defineConfig({
	plugins: [
		tanstackRouter({
			target: "react",
			routesDirectory: "./",
			virtualRouteConfig: "./routes.ts",
			routeFileIgnorePattern: "src",
			autoCodeSplitting: true,
		}),
		tsconfigPaths(),
		react(),
	],
})
