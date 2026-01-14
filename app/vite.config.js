import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	server: {
		host: "localhost",  // Change from "0.0.0.0" to "localhost"
		proxy: {
			"/api": {
				target: "http://localhost:3010", // Change from "0.0.0.0" to "localhost"
				changeOrigin: true,  // Set to true for proper proxying
				secure: false,
				ws: true,
			},
		},
	},
});
