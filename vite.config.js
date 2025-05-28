import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import eslint from "vite-plugin-eslint2";
import stylelint from "vite-plugin-stylelint";

export default defineConfig({
  plugins: [tailwindcss(), eslint(), stylelint()],
  server: {
    watch: {
      ignored: ["**/.stylelintcache", "**/.eslintcache"],
    },
  },
});
