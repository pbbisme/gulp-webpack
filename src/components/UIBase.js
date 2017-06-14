import EventEmitter from "wolfy87-eventemitter"; //导入事件驱动 EventEmitter2
// import qs from 'qs'; //导入QS 获取浏览器参数?

import querystring from 'blear.core.querystring'; //导入QS 获取浏览器参数
class UIBase {
    constructor() {
        this.Guid = this.guid(); //组件的唯一标识
        this.Event = new EventEmitter(); //组件注入事件驱动
        this.on = EventEmitter.prototype.addListeners.bind(this.Event);
        this.Querystring = querystring.parse();//当前页面的查询参数
        this.checkeLogin();//function
    }
    checkeLogin() {
        console.log("检测是否登录");
        /**
         * 判断cookie 是否有登录信息
         */
        // location.href = "http://www.baidu.com"
    }
    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

export default UIBase;