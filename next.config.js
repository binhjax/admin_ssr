const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const lessToJS = require('less-vars-to-js')

const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");
const withImages = require('next-images')

const isProd = process.env.NODE_ENV === "production";

const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

// const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './css/antd.less'), 'utf8'));


// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
    require.extensions[".less"] = (file) => { };
}

// const nextCSSConfig = {
//     webpack: (config) => {
//         config.plugins.push(
//             new MiniCssExtractPlugin({
//                 ignoreOrder: true // Enable to remove warnings about conflicting order
//             })
//         );
//         return config;
//     }
// }

module.exports = withImages(withCSS(withSass(
    {
        cssModules: true,
        ...withLess({
            cssLoaderOptions: {
                esModule: true,
                importLoaders: 1,
                localIdentName: "[local]___[hash:base64:5]",
            },
            lessLoaderOptions: {
                lessOptions: {
                    javascriptEnabled: true,
                    strictMath: false,
                },
            },
            rewrites: async function () {
                return [
                    {
                        source: '/api/:path*',
                        destination: 'http://localhost:10088/api/:path*', // Matched parameters can be used in the destination
                    },
                ]
            },
            exportPathMap: async function (
                defaultPathMap,
                { dev, dir, outDir, distDir, buildId }
            ) {
                console.log("exportPathMap is called.");
                return {
                    '/': { page: '/dashboard/home' },
                    '/dashboard': { page: '/dashboard/home' },
                    '/user': { page: '/login' },
                    '/user/login': { page: '/login' },
                    '/example': { page: '/demo/DemoList' },
                    '/example/demo': { page: '/demo/DemoList' },
                    '/system/menu': { page: '/menu/MenuList' },
                    '/system/role': { page: '/role/RoleList' },
                    '/system/user': { page: '/user/UserList' },
                }
            },
            webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
                if (isServer) {
                    const antStyles = /antd\/.*?\/style.*?/;
                    const origExternals = [...config.externals];
                    config.externals = [
                        (context, request, callback) => {
                            if (request.match(antStyles)) return callback();
                            if (typeof origExternals[0] === "function") {
                                origExternals[0](context, request, callback);
                            } else {
                                callback();
                            }
                        },
                        ...(typeof origExternals[0] === "function" ? [] : origExternals)
                    ];

                    config.module.rules.unshift({
                        test: antStyles,
                        use: "null-loader"
                    });
                }
                config.plugins.push(
                    new FilterWarningsPlugin({
                        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
                    })
                );

                return config;
            },
            images: {
                // loader: 'imgix',
                // path: 'https://cdn.tuoitre.vn/',
                domains: ['cdn.tuoitre.vn', 'assets.vercel.com', '*'],
            },
        }),
    })
));