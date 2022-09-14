const appName = require('./package.json').name;
module.exports = {
    devServer: {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
    },
    output: {
        library: `${appName}-[name]`,
        libraryTarget: 'umd',
        // publicPath: process.env.NODE_ENV == 'prod' ? '/WebApi/isoc/static/base/' : 'http://localhost:4200/'
    },
};

