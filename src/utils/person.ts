import HelloWorld from "src/components/HelloWorld.vue";

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    
    desc(){
        return this.name + "的年龄是" + this.age;
    }
    sayHello(){
        return 'Hello,'+this.name
    }
}
export default Person;
