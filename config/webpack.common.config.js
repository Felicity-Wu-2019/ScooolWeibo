const path=require('path');

module.exports={
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
            }
        ]
    }
}