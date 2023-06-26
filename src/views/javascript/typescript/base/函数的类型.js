"use strict";
/* 函数声明 */
Object.defineProperty(exports, "__esModule", { value: true });
function sum1(x, y) {
    return x + y;
}
sum1(1, 2, 3); // 应有 2 个参数，但获得 3 个。
/* 函数表达式 */
var mySum = function (x, y) {
    // 这个=>是ts 的符号。左边表示输入类型，右边表示输出类型
    return x + y;
};
var mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
console.log(mySearch);
/* 可选参数 */
function buildName(firstName, lastName) {
    // 可选参数后面不允许再出现必选参数
    if (lastName) {
        console.log(firstName + " " + lastName);
        return firstName + " " + lastName;
    }
    else {
        console.log(firstName);
        return firstName;
    }
}
buildName("tao", "zi");
buildName("tao");
console.log(buildName);
/* 参数默认值 */
function buildName2(fristName, lastName) {
    if (lastName === void 0) { lastName = "子"; }
    return fristName + " " + lastName;
}
console.log(buildName2("桃"));
console.log(buildName2("桃", "李"));
/* 剩余参数 */
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, [1, 2, "3"]);
/* 重载
 不同参数类型和数量的时候，做出不同处理 */
function reverse(x) {
    if (typeof x === "number") {
        return x.toString().split("").reverse().join("");
    }
    else if (typeof x === "string") {
        return x.split("").reverse().join("");
    }
}
console.log(reverse(123));
console.log(reverse("taozi"));

