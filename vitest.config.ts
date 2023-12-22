import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
  plugins: [vue()],
  
});
