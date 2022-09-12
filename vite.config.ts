import { UserConfig, UserConfigFn } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  includeAssets: ["icons/*.{png,svg,ico}", "splash-screens/*.png"],
  manifest: {
    name: "React PWA Jitsi Proof of concept",
    short_name: "React PWA Jitsi PoC",
    description: "React PWA Jitsi Proof of concept",
    theme_color: "#ffffff",
    icons: [
      {
        src: "icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
};

// https://vitejs.dev/config/
const defineConfig: UserConfigFn = ({ mode }) => {
  const config: UserConfig = {
    plugins: [react(), VitePWA(pwaOptions)],

    base: mode === "production" ? "/react-pwa-jitsi-poc/" : "/",

    server: {
      port: 3000,
    },
  };

  return config;
};

export default defineConfig;
