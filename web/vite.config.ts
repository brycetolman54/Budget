import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCommonJs from "vite-plugin-commonjs";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), viteCommonJs()],
    server: {
        open: true,
    },
});
