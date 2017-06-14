webpackJsonp([2],{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var o = 0;
function a() {
    alert("aaa");
}

module.exports = {
    init: function init(o1) {
        o = o1;
        var _this = this;
        $(".content").click(function () {
            alert(1);
            _this.show();
            console.log("神马玩意哦");
        });
        console.log(111);
    }, show: function show() {
        a();
        alert("o");
    }
};

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);
__webpack_require__(9);

var content = __webpack_require__(11);
var bootStrapTable = __webpack_require__(61);
// debugger;
content.init();

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var table = $('#table').bootstrapTable({
    undefinedText: "无",
    striped: true,
    selectItemName: "id",
    pagination: true,
    clickToSelect: true,
    columns: [{
        checkbox: true,
        field: 'id',
        title: 'Item ID'
    }, {
        field: 'name',
        title: 'Item Name'
    }, {
        field: 'price',
        title: 'Item Price'
    }],
    data: [{
        id: 1,
        name: 'Item 1',
        price: '$1'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }]
});
console.log($('#table').bootstrapTable('getData'));
debugger;

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),

/***/ 8:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[71]);