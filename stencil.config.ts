import { Config } from '@stencil/core';
import { postcss } from "@stencil/postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import purgecss from "@fullhuman/postcss-purgecss";

const purge = purgecss({
  content: ["./src/**/*.tsx", "./src/index.html", "./src/**/*.css"],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

export const config: Config = {
  namespace: 'stencil-virtual-scroll',
  taskQueue: 'async',
  globalStyle: "./src/global/app.css",
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    postcss({
      plugins: [
        tailwindcss("./tailwind.config.js"),
        autoprefixer,
        ...(process.env.NODE_ENV === "production" ? [purge, cssnano()] : []),
      ],
    }),
  ],
};
