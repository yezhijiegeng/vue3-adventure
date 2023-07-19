
let strategies = {
    "S":function(salary:number){
        return salary*4
    },
    "S":(salary:number) {
        return salary*3
    },
    "D":(salary:number){
        return salary*2
    }
}

function caculateBonus(level,salary){
    return strategies[level](salary)
}

const employS = caculateBonus("S",10000)
const employA = caculateBonus("A",20000)
const employD = caculateBonus("S",30000)

console.log(employS);
console.log(employA)
console.log(employD)
