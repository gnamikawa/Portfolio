const path = require('path')
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = async (phase, { defaultConfig }) => {
    const nextConfig = {};
    // @ts-check
    /**
     * @type {import('next').NextConfig}
     **/
    nextConfig[PHASE_DEVELOPMENT_SERVER] = {
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
            return config;
        },
    }
    return nextConfig[phase];
}