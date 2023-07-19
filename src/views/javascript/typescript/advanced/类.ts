class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): string {  
    return `Hi~ ${this.name}`;
  }
}

const a: Person = new Person("桃子");
console.log(a.sayHi()); // Hi~ 桃子
