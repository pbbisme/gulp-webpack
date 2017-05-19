import _ from "lodash"; //导入鲁大师
import EventEmitter from "wolfy87-eventemitter"; //导入事件驱动 EventEmitter2

let emitter = new EventEmitter();
let contractDetail = {
    //模块默认属性
    prop: { b: 1, c: 3 },
    //设置模块属性
    setProps: (arg) => {
        _.assign(contractDetail.prop, arg);
        return contractDetail.prop;
    },
    //获取模块属性
    getProps: () => {
        console.log(contractDetail.prop);
        return contractDetail.prop;
    },
    init: (context) => { //模块初始化      
        emitter.emit('init_befor', 34); //往外抛出个事件  
        _.assign(contractDetail, context);//
        $("#download").on("click", function () {

            emitter.emit('download', "下载卖方合同（商标及其它）"); //往外抛出个事件  

        })
        emitter.emit('init_after', 67); //往外抛出个事件
    },
    on: emitter.addListeners.bind(emitter)
}
export default contractDetail;

// class A {
//     constructor() {

//     } aF1 = () => {

//     }
// }


// const contractDetail1 = () => {
//     const a = () => {
//         alert("a")
//     }
//     const b = () => {
//         alert("b")
//     }

//     return {
//         a: a,
//         b: b
//     }
// }

// export default contractDetail1();
// //当前模块默认属性
// let owerProps = {};
// /**
//  * 设置当前模块属性
//  */
// function setProps(obj) {
//     return owerProps = obj;
// }
// /**
//  * 获取当前模块属性
//  */
// function getProps() {
//     console.log(owerProps)
//     return owerProps;
// }

// export { a, setProps, getProps }
