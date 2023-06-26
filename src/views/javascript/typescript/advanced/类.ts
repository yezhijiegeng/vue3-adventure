/* es6 中类的用法 */

/* 属性和方法

使用class 定义类，用constructor 定义函数
 通过new 生成新实例时，会自动调用constructor 函数*/

class Animal {
  name;
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `my name is ${this.name}`;
  }
}

const a = new Animal("cat");
console.log(a.sayHi());

/* 类的继承*/

class Bird extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
    // this.name = name;
  }
  sayHi() {
    return "qiu~ " + super.sayHi();
  }
}

const bird = new Bird("阿风"); // 阿风
console.log(bird.sayHi()); // qiu~ my name is 阿风
