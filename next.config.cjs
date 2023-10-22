import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

/**
 * @type {import('next').NextConfig}
 */
const baseNextConfig = {
  /* config options here */
  swcMinify: true,
};

export default baseNextConfig;

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...baseNextConfig,
    };
  }

  return baseNextConfig;
};
