const swcPlugin = require('./craco.swcPlugin');
const path = require('path');
module.exports = {
  plugins: [
    {
      plugin: swcPlugin,
      options: {
        swcLoaderOptions: {
          jsc: {
            externalHelpers: true,
            target: 'es5',
            parser: {
              syntax: 'typescript',
              tsx: true,
              dynamicImport: true,
              exportDefaultFrom: true,
            },
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@/*': path.resolve(__dirname, './src/*'),
      '@Pages/*': path.resolve(__dirname, './src/pages/*'),
      '@Public/*': path.resolve(__dirname, './public/*'),
      '@Assets/*': path.resolve(__dirname, './src/assets/*'),
    },
  },
};
