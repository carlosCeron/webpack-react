module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /nodue_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}