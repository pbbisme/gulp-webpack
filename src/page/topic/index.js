
import table from '_components/topicTable/table.js';

table.init();
//监听组件内部抛出来的事件
table.on({
    "table_out_click": function (a) {
        console.log(a)
    }
})
//往组件内部推送事件
table.Event.emit("table_input_test");
console.log(table)