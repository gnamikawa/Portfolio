import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from "next/constants.js";
import path from "path";
import { URL } from "url";
import mdx from "@next/mdx";

const withMDX = mdx();
const __filename = new URL("", import.meta.url).pathname;
const __dirname = new URL(".", import.meta.url).pathname;

const nextConfig = (phase) => {
  /**
   * @type {import('next').NextConfig}
   */
  let config = {};

  switch (phase) {
    case PHASE_PRODUCTION_BUILD: {
    }

    case PHASE_DEVELOPMENT_SERVER: {
      config = {
        experimental: { esmExternals: true },
        pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
        sassOptions: {
          includePaths: [path.join(__dirname, "/**/*")],
        },
      };
    }
  }

  return withMDX(config);
};

export default nextConfig;
