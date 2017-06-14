## 项目目录介绍 ##
#dist 开发目录 
#build 打包目录

**components：小模块目录**
# 当前模块的 js 都需要继承  UIBase.js 
# UIBase 提供 事件驱动，组件唯一标识，QueryString获取

**page:页面入口目录**
# 入口页面

**static:静态资源目录**
# 放置第三方未提供 npm 安装的 第三方插件


## 打包命令
    npm run build

## 开发命令
    npm run dev


## 依赖第三方组件 ##
1. dom操作：jquery.js
1. UI bootstrap
1. 时间对象扩展：moment.js
1. js原生对象扩展：lodash
1. ajax:axios