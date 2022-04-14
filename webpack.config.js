const path = require("path");

module.exports = {
    entry: "./index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: { fallback: { fs: false } },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    target: "node",
};
