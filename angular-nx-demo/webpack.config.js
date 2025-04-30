module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$|\.css$/,
                use: [
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: {
                                    '@tailwindcss/postcss': {},
                                    autoprefixer: {},
                                },
                            },
                        },
                    },
                ],
            },
        ],
    },
};
