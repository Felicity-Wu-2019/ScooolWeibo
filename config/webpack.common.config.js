const path=require('path');

module.exports={
    devtool:'cheap-module-eval-source-map',//有错误时可以定位到源码
    entry:{
        index:'./src/index.js',
        framework:['react','react-dom'],
    },

    output:{
        filename:'js/bundle.js',
        path:path.resolve(__dirname,'../dist')
    },

    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:'babel-loader',//使用babel-loader必须的属性
                exclude:/node_modules/,//排除node_modules的文件
            },
            {
                test:/\.(jpg|png|gif)$/,//遇到jpg.png.gif等后缀的文件，使用url-loader进行预处理
                use:{
                    loader:'url-loader',
                    options:{
                        name:'[name].[ext]',//输出文件的【名字】.[后缀]
                        outputPath:'images/',//输出到dist目录下的路径
                        limit:8192,//文件大于8192b就用file-loader，把图片正常打包成一个单独图片文件到目录下，小于8192b就插入bundle.js文件
                    },
                }
            }
        ]
    }
}