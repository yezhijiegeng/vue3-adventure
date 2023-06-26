/* 函数声明 */

import { number } from "@intlify/core-base";
import { last } from "lodash";

function sum1(x: number, y: number): number {
  return x + y;
}

sum1(1, 2, 3); // 应有 2 个参数，但获得 3 个。

/* 函数表达式 */
const mySum: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  // 这个=>是ts 的符号。左边表示输入类型，右边表示输出类型
  return x + y;
};

/* 用接口定义函数的形式 */
interface SearchFunc {
  (source: string, subString: string): boolean; // 保持参数类型、个数、返回值类型不变
}
const mySearch: SearchFunc = function (source, subString) {
  return source.search(subString) !== -1;
};

console.log(mySearch);

/* 可选参数 */
function buildName(firstName: string, lastName?: string) {
  // 可选参数后面不允许再出现必选参数
  if (lastName) {
    console.log(firstName + " " + lastName);

    return firstName + " " + lastName;
  } else {
    console.log(firstName);
    return firstName;
  }
}
buildName("tao", "zi");
buildName("tao");
console.log(buildName);

/* 参数默认值 */
function buildName2(fristName: string, lastName: string = "子") {
  return fristName + " " + lastName;
}
console.log(buildName2("桃"));
console.log(buildName2("桃", "李"));

/* 剩余参数 */
function push(array, ...items: any[]) {
  items.forEach(function (item) {
    array.push(item);
  });
}

const a: [] = [];
push(a, [1, 2, "3"]);

/* 重载
 不同参数类型和数量的时候，做出不同处理 */
function reverse(x: number | string): number | string | void {
  if (typeof x === "number") {
    return x.toString().split("").reverse().join("");
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}

console.log(reverse(123));
console.log(reverse("taozi"));

/* 修改上面的代码：输入数字，返回数字。输入字符串，返回字符串 */
function reverse2(x: number): number;
function reverse2(x: string): string;
function reverse2(x: number | string): number | string | void {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}

console.log(reverse(123));
console.log(reverse("taozi"));
