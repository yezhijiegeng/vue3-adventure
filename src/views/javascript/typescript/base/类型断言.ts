// import { fa } from "element-plus/es/locale";

import { iteratee } from "lodash-es";

/* 类型断言（Type Assertion）可以用来手动指定一个值的类型。 */
interface Cat {
  name: string;
  run(): void;
}

interface Fish {
  name: string;
  swim(): void;
}

function getName(animal: Cat | Fish) {
  return animal.name;
}

function isFish(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === "function") {
    return true;
  }
  return false;
}
/* 类型“Cat | Fish”上不存在属性“swim”。
此时可以把animal类型断言为：fish */
/* 这样就可以解决访问 animal.swim 时报错的问题了。
需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误： */

function swim(animal: Cat | Fish) {
  (animal as Fish).swim();
}

const tom: Cat = {
  name: "Tom",
  run() {
    console.log("run");
  },
};

swim(tom); // TypeError: animal.swim is not a function
/* 原因是 (animal as Fish).swim() 这段代码隐藏了 animal 可能为 Cat 的情况，将 animal 直接断言为 Fish 了，而 TypeScript 编译器信任了我们的断言，故在调用 swim() 时没有编译错误。
可是 swim 函数接受的参数是 Cat | Fish，一旦传入的参数是 Cat 类型的变量，由于 Cat 上没有 swim 方法，就会导致运行时错误了。
总之，使用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误。 */

/* 将一个父类断言为更加具体的子类§
当类之间有继承关系时，类型断言也是很常见的： */
class ApiError extends Error {
  code: number = 0;
}
class HttpError extends Error {
  statusCode: number = 200;
}

function isApiError(error: Error) {
  if (typeof (error as ApiError).code === "number") {
    return true;
  }
  return false;
}

/* 将任何一个类型断言为 any */
const foo: number = 1;
(foo as any).length = 1; // 类型“number”上不存在属性“length”。

(window as any).foo = 1; // 将window 断言为any 类型

/* 将any 断言为一个具体的类型 */
function getCacheData(key: string): any {
  return (window as any).cache[key];
}

interface Cat {
  name: string;
  run(): void;
}

const jimmy = getCacheData("tom") as Cat;
jimmy.run(); // 有代码补全了

/* 类型断言的限制 */
interface Animal {
  name: string;
}
interface tigger {
  name: string;
  run(): void;
}

/* interface tigger extends Animal { 
  run(): void;
}
// 与上面等价
 */
const wuzi: tigger = {
  name: "wuzi",
  run: () => {
    console.log("run");
  },
};

const animal: Animal = wuzi;

function testCat(cat: Cat) {
  return cat as Animal;
}

function testAnimal(animal: Animal) {
  return animal as Animal;
}

/* 类型断言 vs 类型转换 */
function toBoolean(something: any): boolean {
  return Boolean(something);
}

console.log(toBoolean(1));

/* 类型断言 vs 泛型 */
function getCacheData2<T>(key: string): T {
  return (window as any).cache[key];
}

interface Dog {
  name: string;
  run: () => {};
}

const caisi = getCacheData2<Dog>("caisi");
caisi.run();
