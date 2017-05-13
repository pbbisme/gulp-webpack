dist 为打包目录


运行打包命令
npm run build

主要思路先使用 gulp-art-include生成HTM了模版 
然后在使用webpack 打包js css 等资源


node-sass安装错误解决
1、使用cnpm 
2、

Error: Chunk.entry was removed. Use hasRuntime() 错误解决
npm install --save-dev extract-text-webpack-plugin@2.0.0-beta.4