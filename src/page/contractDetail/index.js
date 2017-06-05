//@ts-check
require("_components/contractDetail/content.scss")
import content from '_components/contractDetail/content.js'
import content1 from '../../components/contractDetail/content1.js'
import _ from "lodash";

// console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
// content.setProps({ a: 1, b: 2, c: 3, bbb: 3432 })
// content.getProps();
// console.log(content);
content.init()
//监听内容模块导出的时间
content.on({
    'init_befor': function () { //
        console.log(arguments);
    },
    'download': function (arg) { //
        alert(arg);
    },
    'init_after': function () {
        console.log(arguments);
    }
})
console.log(content1)
content1.init();
//监听内容模块导出的时间
content1.on({
    'init_befor': function () { //
        console.log(arguments);
    },
    'download': function (arg) { //
        alert(arg);
    },
    'init_after': function () {
        console.log(arguments);
    }
})

content1.setProps({ a: 1, b: 2, c: 3, bbb: 3432 })
content1.getProps();

// console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
// content.setProps({ a: 1, b: 2, c: 3, bbb: 3432 })
// content.getProps();
// console.log(content);
// content.init()


