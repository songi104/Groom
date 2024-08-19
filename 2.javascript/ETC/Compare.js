// Shallow Freeze, Shallow copy
const aObject = {
    a: 'a',
    b: 'b',
    cObject: {
        a: 1,
        b: 2
    }
}
Object.freeze(aObject);
aObject.a = 'c';
console.log(aObject); // a, b, 1, 2 변하지 않는다

aObject.cObject.a = 3;
console.log(aObject) // a, b, 3, 2 변한다