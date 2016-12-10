const webpack = require("webpack");
const path = require("path");
const combineLoaders = require("webpack-combine-loaders");
const WebpackNotifierPlugin = require("webpack-notifier");
const autoprefixer = require("autoprefixer");

module.exports = {
    devtool: "source-map",
    entry: [
        "react-hot-loader/patch",
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        "bootstrap-loader",
        "./src/app/index.tsx"
    ],
    output: {
        filename: "app.js",
        publicPath: "/dist",
        path: path.resolve("dist")
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        modules: ["src", "node_modules"]
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.ts$/,
                loaders: ["babel-loader", "ts-loader"]
            },
            {
                test: /\.tsx?$/,
                loaders: ["babel-loader", "ts-loader"]
            },
            {
                test: /\.woff$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.ttf$/,
                loader: "file-loader"
            },
            {
                test: /\.eot$/,
                loader: "file-loader"
            },
            {
                test: /\.svg$/,
                loader: "file-loader"
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.scss$/,
                loader: combineLoaders([
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        query: {
                            modules: true,
                            localIdentName: "[name]__[local]___[hash:base64:5]"
                        }
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader"
                    },
                    {
                        loader: "autoprefixer-loader",
                        query: {
                            browsers: "last 2 versions"
                        }
                    }
                ])
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackNotifierPlugin({ alwaysNotify: true }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Tether: "tether",
            "window.Tether": "tether",
            Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
            Button: "exports-loader?Button!bootstrap/js/dist/button",
            Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
            Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
            Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
            Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
            Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
            Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
            Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
            Util: "exports-loader?Util!bootstrap/js/dist/util",
        })
    ],
    externals: {
        "react/addons": "react/addons",
        "react/lib/ExecutionEnvironment": "react/lib/ExecutionEnvironment",
        "react/lib/ReactContext": "react/lib/ReactContext"
    }
};