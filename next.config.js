// next.config.js
module.exports = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /.mdx?$/,
      use: [
        defaultLoaders.babel,
        '@mdx-js/loader',
      ]
    })

    return config
  }
}
