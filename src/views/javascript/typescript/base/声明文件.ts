// $("#foo");

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
jQuery(() => {
  alert("dom ready");
});

const cat = new Animal("tm");

/* declare namespace */
const directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
];

jQuery.ajax("/api/get_something");
console.log(jQuery.version);
const e = new jQuery.Event();
e.blur(jQuery.EventType.CustomClick);

jQuery.fn.extend(function () {
  return this.each(function () {
    this.chcked = true;
  });
});

const settings: jQuery.AjaxSettings = {
  methos: "GET",
  data: {
    name: "taozi",
  },
};

jQuery.ajax("/api/get_some", settings);

/* npm 包 */
/* export */

import { name, getName, Animal, Directions, Options } from "@/types/foo";

console.log(name);
const myName = getName();
const dog = new Animal("tom");
const directions2 = [
  Directions.Down,
  Directions.Up,
  Directions.Left,
  Directions.Right,
];
const options: Options = {
  data: {
    name: "foo",
  },
};

import { foo } from "@/types/foo";
foo.name;
foo.bar.baz();

/* import bar from "@/types/foo";
bar(); */

/* ------------- commonjs export = -------------- */
const foo2 = require("@/types/foo");
const bar2 = require("@/types/foo").bar;

// 2、 import * as
// import * as foo3 from "@/types/foo";
/* import { bar } from "@/types/foo";
console.log(bar);
 */

/* import * as jQuery from "@/types/foo";

jQuery.foo({
  bar: "",
});
 */

"bar".prependHello();
