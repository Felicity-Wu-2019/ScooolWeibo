const merge=require('webpack-merge');//webpack-merge通过通用设置，我们不必再环境特定的配置中重复代码
const common=require('./webpack.common.config');

const HtmlWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin')//用来清理旧的打包文件
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');//压缩js文件大小

const MiniCssExtractPlugin=require('mini-css-extract-plugin');//打包单独css文件
const OptimizeCssAssetsPlugin=require('optimize-css-assets-webpack-plugin');//压缩css文件

module.exports=merge(common,{
    mode:'production',

    output:{
        //filename:'js/[name].[chunkhash:8].bundle.js',//会代替common里的设置
        filename:'js/[name].bundle.js',
    },

    module:{//遇到后缀名.css的文件，webpack先用css-loader加载器去解析这个文件。遇到@import等语句会将相应样式文件引入
        rules:[//计算完css再使用style-loader生成一个style标签放去head里
        {
            test:/\.css$/,
            use:[
                //'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',//webpack loader的执行顺序是从右到左
                'postcss-loader'
            ]
        },
        {
            test:/\.less$/,
            use:[
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'less-loader'
            ]
        },
       
        ]
    },

    optimization:{//抽离index公共代码
        minimizer:[
            new UglifyJsPlugin(),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp:/\.css$/g,//正则表达式，用于匹配需要优化或压缩的资源名
                cssProcessor:require("cssnano"),//用于压缩和优化css的处理器
                cssProcessorPluginOptions:{
                    preset:['default',{discardComments:{removeAll:true}}]//去除注释
                },
                canPrint:true//表示插件能够在console中打印消息
            })
        ],
        splitChunks:{
            chunks:'all',
            minSize:3000,
            maxSize:0,
            minChunks:1,
            cacheGroups:{//定义需要被抽离的模块
                framework:{
                    priority:100,
                    test:"framework",//字符串的话会匹配入口模块名称，会从其他模块中把包含这个模块的抽离出来
                    name:"framework",//抽离后生成的名字
                    enforce:true
                },
                vendors:{//缓存组
                    priority:-10,
                    test:/node_modules/,//只从node_modules下引入模块
                    name:"vendor",
                    enforce:true,
                },
            }
        }
    },

    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',//打包之后的名字
            template:'views/index.ejs',//以我们自己定义的html为模板来写
            inject:'body',//在body后引入
            minify:{//压缩html文件
                removeComments:true,//去除注释
                collapseWhitespace:true,//去除空格
            },
        }),
        new CleanWebpackPlugin(),//正常来说new要传入dist文件路径参数，但上面定义是{}所有不用

        new MiniCssExtractPlugin({
            filename:'css/[name].[hash].css',
            chunkFilename:'css/[id].[hash].css',
        })
    ],


});