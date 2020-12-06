module.exports = ({ env }) => ({
  plugins: {
    autoprefixer: {},
    'postcss-import-ext-glob': {},
    'postcss-import': {},
    cssnano: env === 'production' ? {} : false,
  },
});
