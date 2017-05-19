require("_components/contractDetail/content.scss")
import content from '_components/contractDetail/content.js'
import _ from "lodash";

//监听内容模块导出的时间
content.on({
    'init_befor': function () { //
        console.log(arguments);
    },
    'init_after': function () {
        console.log(arguments);
    }
})

console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
content.setProps({ a: 1, b: 2, c: 3, bbb: 3432 })
content.getProps();
console.log(content);
content.init()
