/* 联合类型
联合类型（Union Types）表示取值可以为多种类型中的一种。 */

/* 简单的例子 */
let myFavoriteNumber:string | number;
myFavoriteNumber = 'eight';
myFavoriteNumber = 7;
// myFavoriteNumber = false; // 不能将类型“boolean”分配给类型“string | number”
console.log(myFavoriteNumber);
/* 联合类型使用 | 分隔每个类型。
这里的 let myFavoriteNumber: string | number 的含义是，允许 myFavoriteNumber 的类型是 string 或者 number，但是不能是其他类型。 */

/* 访问联合类型的属性或方法§
当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法： */
function getLength(something:string | number):number{
    return something.length; // 类型“number”上不存在属性“length”。
} 

/* 上例中，length 不是 string 和 number 的共有属性，所以会报错。
访问 string 和 number 的共有属性是没问题的： */
function getLength2(something:string | number):string{
    return something.toString(); // 类型“number”上不存在属性“length”。
} 

/* 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型： */

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
/* let myFavoriteNumber2:string | number;
myFavoriteNumber2 = 'seven';
// myFavoriteNumber2 = 7;
console.log(myFavoriteNumber2.length); */

let myFavoriteNumber2: string | number;
myFavoriteNumber2 = 'seven';
console.log(myFavoriteNumber2.length); // 5
myFavoriteNumber2 = 7;
console.log(myFavoriteNumber2.length); // 编译时报错