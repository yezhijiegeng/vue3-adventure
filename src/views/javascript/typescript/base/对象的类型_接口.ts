// 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

import { number } from "@intlify/core-base";

/* 什么是接口§
在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。

TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。 */

/* 简单的例子 */

interface Person {
    name: string;
    age: number
}

const meli:Person = {
    name:'meli',
    age:30,
    // gender:'female'
}

console.log(meli);

// 可见，赋值的时候，变量的形状必须和接口的形状保持一致。

/* 可选属性§
有时我们希望不要完全匹配一个形状，那么可以用可选属性： */
interface Person2 {
    name:string;
    age?:number
}

const amy:Person2 = {
    name:'amy',
    age:20
}

const jessica:Person2 = {
    name:'jessica',
    // age:21
} 
console.log(amy);

/* 任意属性§
有时候我们希望一个接口允许有任意的属性，可以使用如下方式： */
interface Person3 {
    name: string;
    age?: number; // 注意：一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集。这里也要是string 类型。
    [propName:string]:string ;
}

const merry:Person3 = {
    name:'merry',
    age:'20',
    genger:'male'
}
console.log(merry);


interface Person4 {
    name: string;
    age?: number; 
    [propName:string]:string |number; // 联合类型
}

const cancy:Person4 = {
    name:'merry',
    age:20,
    genger:'male'
}
console.log(cancy);


/* 只读属性§
有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性： */

interface Person5 {
    readonly id :number;
    name:string;
}
const wangnm:Person5 = {
    id:7,
    name:'wangnm'
}

wangnm.id = 8; // 无法为“id”赋值，因为它是只读属性。


interface Person6 {
    readonly id?:number,
    name:string
}
const lxq:Person6 = { // 只读的约束只存在第一次赋值的时候，这里没有赋值
    name:'李雪琴' 
}
lxq.id = 1; // 无法为“id”赋值，因为它是只读属性。