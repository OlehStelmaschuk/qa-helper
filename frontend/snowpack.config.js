/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
    /* ... */
  },
  plugins: [
    '@snowpack/plugin-sass',
    '@snowpack/plugin-postcss',
    // '@snowpack/plugin-webpack',
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: 'routes', src: '.*', dest: '/index.html' },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    bundle: true,
    minify: true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    open: 'none',
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
}
