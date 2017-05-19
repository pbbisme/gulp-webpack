webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 2:
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

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);
__webpack_require__(1);

var content = __webpack_require__(2);
content.init();

/***/ })

},[15]);