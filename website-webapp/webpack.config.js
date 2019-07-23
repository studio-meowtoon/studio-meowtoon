const path = require('path');
module.exports = {
    mode: "development", // to replace "production" in start the service.
    entry: [
        './src/main/resources/assets/index.ts'
    ],
    output: {
        path: path.join(__dirname, 'src/main/webapp/docroot/scripts'),
        filename: 'webapp.min.lib.js'
    },
    devtool: 'source-map', // to delete in start the service.
    // resolve TypeScript and Vue file
    resolve: {
        // Add `.ts` and `.vue` as a resolvable extension.
        extensions: ['.ts', '.vue', '.js', '.html'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                use: [{
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/]
                        }
                    }]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    esModule: true
                }
            },
            {
                test: /\.html$/,
                loader: 'vue-html-loader',
                options: {
                    hmr: false // disables Hot Modules Replacement
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "less-loader" // compiles Less to CSS
                ]
            }
        ]
    }
};