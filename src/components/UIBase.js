import EventEmitter from "wolfy87-eventemitter"; //导入事件驱动 EventEmitter2

class UIBase {
    constructor() {
        this.guid = new Date().getTime();
        this.Event = EventEmitter.prototype;
        this.on = EventEmitter.prototype.addListeners.bind(this.Event);
    }
}

export default UIBase;