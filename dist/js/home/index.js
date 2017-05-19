webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */
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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(9);

var content = __webpack_require__(3);
content.init();
console.log(4477);
console.log(444555);

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ })
],[15]);