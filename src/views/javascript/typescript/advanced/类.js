var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHi = function () {
        return "Hi~ ".concat(this.name);
    };
    return Person;
}());
var a = new Person("桃子");
console.log(a.sayHi());
