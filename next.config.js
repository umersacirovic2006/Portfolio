// const withPWA = require('next-pwa');

module.exports = {
  images: {
    domains: ['i.ibb.co'],
  },
  distDir: 'dist',
  reactStrictMode: false,
  swcMinify: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
};
