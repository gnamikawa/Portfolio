const path = require('path')
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = async (phase, { defaultConfig }) => {
    const nextConfig = {};

    nextConfig[PHASE_DEVELOPMENT_SERVER] = {
        lessLoaderOptions: {
          javascriptEnabled: true,
        },
        experimental: {esmExternals: true},
        pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
        sassOptions: {
            includePaths: [path.join(__dirname, 'styles')],
        },
        webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
            config.module.rules.push({
                test: /\.(md|mdx)$/,
                use: [
                    defaultLoaders.babel,
                    '@mdx-js/loader',
                ]
            });
            config.module.rules.push({
                test: /\.(ts|tsx)$/,
                use: [
                    defaultLoaders.babel,
                    'ts-loader'
                ]
            });
            config.module.rules.push({
                test: /\.(js|jsx)$/,
                use: [ defaultLoaders.babel ]
            });
            return config;
        },
    };
    nextConfig[PHASE_PRODUCTION_BUILD] = nextConfig[PHASE_DEVELOPMENT_SERVER];
    return nextConfig[phase];
}