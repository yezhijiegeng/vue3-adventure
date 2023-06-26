"use strict";
// $("#foo");
Object.defineProperty(exports, "__esModule", { value: true });
/* 使用declare var 定义类型 */
// declare let jQuery: (select: string) => any;
// jQuery("#foo");
/* 全局变量模式 */
// jQuery("#foo");
/*
第三方声明文件
npm install @types/jquery --save-dev*/
// import type jQuery from "@types/jquery";
jQuery("#foo");
/* jQuery = function (selector) {
  return document.querySelector(selector);
};
 */
jQuery(function () {
    alert("dom ready");
});
var cat = new foo_1.Animal("tm");
/* declare namespace */
var directions = [
    foo_1.Directions.Up,
    foo_1.Directions.Down,
    foo_1.Directions.Left,
    foo_1.Directions.Right,
];
jQuery.ajax("/api/get_something");
console.log(jQuery.version);
var e = new jQuery.Event();
e.blur(jQuery.EventType.CustomClick);
jQuery.fn.extend(function () {
    return this.each(function () {
        this.chcked = true;
    });
});
var settings = {
    methos: "GET",
    data: {
        name: "taozi",
    },
};
jQuery.ajax("/api/get_some", settings);
/* npm 包 */
/* export */
var foo_1 = require("@/types/foo");
console.log(foo_1.name);
