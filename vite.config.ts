import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // for browser environment simulation
    css: true, // Optional: handles CSS imports in tests
    setupFiles: "./src/tests/setup.tsx",
  },
} as UserConfig);
