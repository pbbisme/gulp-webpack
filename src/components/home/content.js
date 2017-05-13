
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