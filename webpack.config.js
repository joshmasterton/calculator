module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};