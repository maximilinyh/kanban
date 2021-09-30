import path from 'path';
import { HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const SOURCE = 'src';
const DIST = 'dist';
const PUBLIC = 'public';

const config = {
    mode: 'development',
    entry: { index: path.resolve(__dirname, SOURCE, 'index.tsx') },
    output: {
        path: path.resolve(__dirname, DIST),
    },
    module: {
        rules: [
            // {
            //     test: /\.(js|jsx)$/,
            //     exclude: /node_modules/,
            //     use: 'babel-loader',
            // },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.module\.(s*)css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
        alias: {
            src: path.resolve(__dirname, 'src/'),
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, PUBLIC, 'index.html'),
        }),
        new HotModuleReplacementPlugin(),
    ],
    devtool: 'inline-source-map',
    devServer: {
        static: path.join(__dirname, DIST),
        historyApiFallback: true,
        port: 4000,
        open: true,
        hot: true,
    },
};

export default config;
