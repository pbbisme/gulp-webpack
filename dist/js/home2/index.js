webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {


var o = 0;
function a() {
    alert("aaa")
}


module.exports = {
    init: function (o1) {
        o = o1;
        var _this = this;
        $(".content").click(function () {
            alert(1)
            _this.show();
            console.log("神马玩意哦")
        })
        console.log(111);
    }, show: function () {
        a();
        alert("o")
    }
}

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);
__webpack_require__(1);

var content=__webpack_require__(2);
content.init(); 

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
],[13]);