let personInfo: [string, number] = ["taozi", 1568888888888];
personInfo[1] = 15600700700.023; // 只赋值其中一个

console.log(personInfo);
console.log(personInfo.slice(1));
// console.log(personInfo.toFixed(2));

// personInfo = ["土豆"]; // 不能将类型“[string]”分配给类型“[string, number]”。
personInfo = ["土豆", 12]; // 初始赋值时，需要提供所有类型的初始值

/* 添加越界元素 */
personInfo.push("喜欢吃桃子");
personInfo.push(true); // error  添加更多越界元素的类型必须是声明的联合类型
console.log(personInfo);
