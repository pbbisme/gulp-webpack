import _ from "lodash"; //导入鲁大师
import EventEmitter from "wolfy87-eventemitter"; //导入事件驱动 EventEmitter2

let emitter = new EventEmitter();

class ContentDetail {
    constructor(prop) {
        this.prop = prop;//模块的属性
        this.on = emitter.addListeners.bind(emitter);
    };
    //设置模块属性
    setProps(arg) {
        this.prop = _.assign(this.prop, arg);
        return this.prop;
    };
    //获取模块属性
    getProps() {
        debugger;
        console.log(this.prop)
        return this.prop;
    };
    //页面初始化事件
    init() {
        this.bindEvent();
    };
    //页面事件绑定
    bindEvent() {
        $("#download1").on("click", function () {
            emitter.emit('download', "  下载卖方合同（专利）"); //往外抛出个事件  
        })
    };
}
/**
 * 这是模块的属性存放地方
 */
ContentDetail.a = 1;
ContentDetail.b = 2;

export default new ContentDetail();