module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["syle-loader", "css-loader"],
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};