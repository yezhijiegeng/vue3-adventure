const isDone:boolean = false;
console.log(isDone);

/* 注意，使用构造函数 Boolean 创造的对象不是布尔值：
能将类型“Boolean”分配给类型“boolean” 
事实上 new Boolean() 返回的是一个 Boolean 对象： */
const createByNewBoolean:Boolean = new Boolean(1); 
console.log(createByNewBoolean); 

// 其中 0b1010 和 0o744 是 ES6 中的二进制和八进制表示法，它们会被编译为十进制数字。
const decLiteral: number = 6;
const hexLiteral:number = 0xf00d;
const binaryLiteral:number = 0b1010; // es6 二进制
const octalLiteral:number = 0o744; // es6 八进制
const notANumber:number = Infinity;

console.log(decLiteral);

// --------------------------字符串---------------------------------

const myName: string = 'Tom';
const myAge: number = 32;
const sentence:string = `Hello,my name is ${myName}`;
console.log(sentence);
console.log(`I'll be ${myAge+1} next month`);

// --------------------------空值---------------------------------

// avaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function aletName():void {
    alert("My name is melissa")
}

// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null（只在 --strictNullChecks 未指定时）：
const unusable:void = undefined;
// const unusable2:void =11; // 不能将类型“number”分配给类型“void”


// -----------------------null 和undefined------------------------------------

// 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
const u:undefined = undefined;
const n:null = null;

// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
/* tsconfig strct：false 才不报错 */
const num: number = undefined;  

let u1:undefined;
const num2:number = u1;

// 而 void 类型的变量不能赋值给 number 类型的变量：
let u3:void;
const num3 = u3;