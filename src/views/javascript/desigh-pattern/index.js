var strategies = {
    "S": function (salary) {
        return salary * 4;
    },
    "A": function (salary) {
        return salary * 3;
    },
    "D": function (salary) {
        return salary * 2;
    }
};
let caculateBonus = function (level, salary) {
    return strategies[level](salary);
}
console.log(caculateBonus("S", 10000));
console.log(caculateBonus("S", 15000));
console.log(caculateBonus("D", 20000));