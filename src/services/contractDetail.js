//@ts-check
export function f1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(12)
        }, 3000);
    })
}

export function f2() {
   return  new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(12)
        }, 3000);
    });

}