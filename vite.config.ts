// vite.config.ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: "es2020",
    },
  },
  esbuild: {
    // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
  plugins: [
    react({
      babel: {
        plugins: [
          "babel-plugin-macros",
          [
            "@emotion/babel-plugin-jsx-pragmatic",
            {
              export: "jsx",
              import: "__cssprop",
              module: "@emotion/react",
            },
          ],
          [
            "@babel/plugin-transform-react-jsx",
            { pragma: "__cssprop" },
            "twin.macro",
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: "./src" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@apis", replacement: "/src/apis" },
      { find: "@reducers", replacement: "/src/reducers" },
      { find: "@store", replacement: "/src/store" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@data", replacement: "/src/data" },
      { find: "@libraries", replacement: "/src/libraries" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@components", replacement: "/src/components" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@assets", replacement: "/src/assets" },
    ],
  },
});
