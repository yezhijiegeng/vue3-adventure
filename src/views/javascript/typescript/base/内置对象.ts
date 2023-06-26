/* ECMA 标准内置对象 */
const b: Boolean = new Boolean(1);
const e: Error = new Error("error occured");
const d: Date = new Date();
const r: RegExp = /[a-z]/;

/* dom 和bom 的内置对象 */
const boby: HTMLElement = document.body;
const allDiv: NodeList = document.querySelectorAll("div");
document.addEventListener("click", function (e: MouseEvent) {});

/* ts 核心库内置文件
定义了所有浏览器环境所需要的类型 */
Math.pow(10, 2);
document.addEventListener("click", function (e) {
  //   console.log(e.targetCurrent); // 类型“MouseEvent”上不存在属性“targetCurrent”
});
