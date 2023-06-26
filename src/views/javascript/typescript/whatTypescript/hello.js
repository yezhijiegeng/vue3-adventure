function sayHello(person) {
    if (typeof person === 'string') {
        return 'Hello,' + person;
    }
    else {
        throw new Error('person is not a string ');
    }
}
// const user = 'Tom';
var user = 11;
console.log(sayHello(user));
