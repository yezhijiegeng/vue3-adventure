/* es6 中类的用法 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* 属性和方法

使用class 定义类，用constructor 定义函数
 通过new 生成新实例时，会自动调用constructor 函数*/
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        return "my name is ".concat(this.name);
    };
    return Animal;
}());
var a = new Animal("cat");
console.log(a.sayHi());
/* 类的继承*/
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
        // this.name = name;
    }
    Bird.prototype.sayHi = function () {
        return "qiu~ " + _super.prototype.sayHi.call(this);
    };
    return Bird;
}(Animal));
var bird = new Bird("阿风");
console.log(bird.sayHi());
