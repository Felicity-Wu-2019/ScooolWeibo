//专门配置开发环境
const path=require('path');
const merge=require('webpack-merge');
const common=require('./webpack.common.config');

const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');


module.exports=merge(common,{
    mode:'development',
    output:{
        //filename:'js/[name].[hash:8].bundle.js',
        filename:'js/[name].bundle.js',
    },

    module:{//遇到后缀名.css的文件，webpack先用css-loader加载器去解析这个文件。遇到@import等语句会将相应样式文件引入
        rules:[//计算完css再使用style-loader生成一个style标签放去head里
        {
            test:/\.css$/,
            use:[
                'style-loader',
                'css-loader',//webpack loader的执行顺序是从右到左
                'postcss-loader'
            ]
        },
        {
            test:/\.less$/,
            use:[
                'style-loader',
                'css-loader',
                'postcss-loader',
                'less-loader'
            ]
        },

        ]
    },


    devServer:{
        contentBase:path.resolve(__dirname,'../public'),
        open:true,
        port:9000,
        compress:true,
        hot:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'template.html',//打包之后的名字
            template:'./views/index.ejs',
            inject:'body',
            path:'public/',
            hash:false,
            minify:{//压缩html文件
                removeComments:true,//去除注释
                collapseWhitespace:true,//去除空格
            },
        }),
        new webpack.HotModuleReplacementPlugin(),//webpack的热更插件
    ]
});