/* 数组的类型
在 TypeScript 中，数组类型有多种定义方式，比较灵活。 */

/* 「类型 + 方括号」表示法§
最简单的方法是使用「类型 + 方括号」来表示数组： */
const fabonacci:number[] = [1,1,2,3,5];

const fabonacci2:number[] = [1,'1',2] // 不能将类型“string”分配给类型“number”

/* 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制： */
fabonacci.push('8'); //类型“string”的参数不能赋给类型“number”的参数。
/* 上例中，push 方法只允许传入 number 类型的参数，但是却传了一个 "8" 类型的参数，所以报错了。这里 "8" 是一个字符串字面量类型，会在后续章节中详细介绍。 */

/* 数组泛型§
我们也可以使用数组泛型（Array Generic） Array<elemType> 来表示数组： */
const fabonacci3:Array<number> = [1,1,2,3,5]

/* 用接口表示数组§
接口也可以用来描述数组： */
interface NumberArray {
    [index:number]:number
}
const fabonacci4 = [1,1,2,3,5]

/* 类数组§
类数组（Array-like Object）不是数组类型，比如 arguments： */
function sum() {
    let args: NumberArray2 = arguments;
}

// arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：
interface NumberArray2 {
    [index:number]:number;
    length:number;
    callee:Function;
}
// 在这个例子中，我们除了约束当索引的类型是数字时，值的类型必须是数字之外，也约束了它还有 length 和 callee 两个属性。

/* 事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等： */
function sum2(test) {
    const args:IArguments = arguments;
}

/* any 在数组中的应用§
一个比较常见的做法是，用 any 表示数组中允许出现任意类型： */
const list:any[] = ['taozi',{website:'http://'}]