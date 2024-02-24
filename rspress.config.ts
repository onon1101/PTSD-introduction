import * as path from "path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  // base: "/PTSD-introduction/",
  builderConfig: {
    output: {
      assetPrefix: "https://onon1101.github.io/PTSD-introduction/",
    },
  },
  root: path.join(__dirname, "docs"),
  title: "Rspress",
  description: "Rspack-based Static Site Generator",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/web-infra-dev/rspress",
      },
    ],
  },
});
