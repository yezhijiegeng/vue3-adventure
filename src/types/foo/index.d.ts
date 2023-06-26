/* export */

/* export const name: string;
export function getName(): string;
export class Animal {
  constructor(name: string) {}
  sayHi(): string;
}
export enum Directions {
  Up,
  Down,
  Left,
  Right,
}
export interface Options {
  data: any;
}

 */

/* -------------declare 和 export--------------- */
/* declare const name: string;
declare function getName(): string;
declare class Animal {
  constructor(name: string);
  sayHi(): string;
}
declare enum Directions {
  Up,
  Down,
  Left,
  Right,
}

// interface 前不需要declare
interface Options {
  data: any;
}
export { name, getName, Animal, Directions, Options };

export namespace foo {
  const name: string;
  namespace bar {
    function baz(): string;
  }
}
 */

/* -------------export default-------------- */
// export default function bar(): string;

// 只有function、interface和class 可以直接导出出来
/* export default enum Directions { // Parsing error: Expression expected
    Up,
    Down,
    Left,
    Right,
}
 */

/* export default Directions2;
declare enum Directions2 { // Parsing error: Expression expected
  Up,
  Down,
  Left,
  Right,
}
 */

/* ------------- commonjs export = -------------- */

/* module.exports = foo;
export.bar = bar; */

/* export = foo;
declare function foo(): string;
declare namespace foo(){
    const bar:number;
} */

/* -------------UMD库------------------- */

/* export as namespace   */
export as namespace foo; // 声明为全局变量
// export = foo;
export default foo;

declare function foo(): string;
declare namespace foo {
  const bar: number;
}

/* -------------直接扩展全局变量------------------ */
/* interface String {
  prependHello(): string;
}

"foo".prependHello();
 */

declare namespace JQuery {
  interface CustomOptions {
    bar: string;
  }
}

interface JQueryStatic {
  foo(options: JQuery.CustomOptions): string;
}

declare global {
  interface String {
    prependHello(): string;
  }
}
export {}; // 空对象 表明是模块声明文件，而不是全局变量的声明文件

/* -------------模块插件------------------ */

declare module "foo" {
  export interface Foo {
    foo: string;
  }
}

declare module "bar" {
  export function bar(): string;
}
