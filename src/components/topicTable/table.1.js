import * as topicService from "_service/topic.js";
require("./table.scss");

import _ from "lodash"; //导入鲁大师
import EventEmitter from "wolfy87-eventemitter"; //导入事件驱动 EventEmitter2
import { f1 } from "_service/contractDetail.js"; //

let emitter = new EventEmitter();

class Table {
    constructor(prop) {
        this.prop = prop;//模块的属性
        this.tableQueryParams = { mdrender: false };//表格查询对象        
        this.on = emitter.addListeners.bind(emitter);
        this.table = null;
    };
    //设置模块属性
    setProps(arg) {
        this.prop = _.assign(this.prop, arg);
        return this.prop;
    };
    //获取模块属性
    getProps() {
        return this.prop;
    };
    //页面初始化事件
    init() {
        this.bindEvent();
        this.initTable();
    };
    initTable() {
        var _this = this;
        this.table = $('#table_id_example').DataTable({
            ajax: function (data, callback, settings) {//ajax配置为function,手动调用异步查询 {
                // topicService.queryTopic(_this.tableQueryParams).then(function (data) {
                //     callback(data);
                // });

                $.ajax({
                    url: "https://cnodejs.org/api/v1/topics",
                    data: params,
                    success: function (data) {
                        callback(data);
                    },
                })
            },
            searching: false,
            ordering: false,
            paging: true,
            aLengthMenu: [10, 20, 30, 40],
            info: true,
            columns: [{
                data: "img",
                render: function (data, type, row) {
                    return `<img class='topic-img' src="${row.author.avatar_url}" alt="${row.author.loginname}"/>`
                }
            }, {
                data: "",
                render: function (data, type, row) {
                    return row.author_id;
                }
            }, {
                data: "name",
                render: function (data, type, row) {
                    return row.author.loginname;
                }
            }, {
                data: "title"
            }],
            "oLanguage": {
                /*转换语言*/
                "sLengthMenu": "每页显示 _MENU_ 条记录",
                "sInfo": "共 _TOTAL_ 条记录     第 _PAGE_ 页/共 _PAGES_ 页",
                "sInfoEmpty": "",
                "sInfoFiltered": "共 _MAX_ 条数据",
                "oPaginate": {
                    "sFirst": "首页",
                    "sPrevious": "前一页",
                    "sNext": "后一页",
                    "sLast": "尾页"
                },
                aria: {
                    sortAscending: ": 递增",
                    sortDescending: ": 递减"
                },
                "sLoadingRecords": "载入中...",
                "sZeroRecords": "没有检索到数据",
                "sProcessing": "数据加载中，请稍后"
            }
        })
    };
    //页面事件绑定
    bindEvent() {
        var _this = this;
        $("#mdrender").on("click", function () {
            var old = _this.tableQueryParams.mdrender;
            _this.tableQueryParams.mdrender = !old;
            console.log(_this.tableQueryParams.mdrender)
        })
        $("#reload").on("click", function () {
            _this.table.ajax.reload();
        })
    };
}

export default new Table();