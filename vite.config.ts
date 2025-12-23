import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

export default defineConfig(async () => {
  const plugins = [
    nitro(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ];

  // Conditionally add devtools only in development
  // In production, this will be skipped if the package is not available
  if (process.env.NODE_ENV !== "production") {
    try {
      const { devtools } = await import("@tanstack/devtools-vite");
      plugins.unshift(devtools());
    } catch {
      // Devtools not available (e.g., in production), skip it
    }
  }

  return {
    plugins,
    preview: {
      host: "0.0.0.0",
      port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
      allowedHosts: [
        ".railway.app", // Allow all Railway subdomains
        "localhost",
        "127.0.0.1",
      ],
    },
  };
});
