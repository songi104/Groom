// function* sayNumbers() {
//     yield 1;
//     yield 2;
//     yield 3;
// }


// // 제너레이터 함수의 return = 제너레이터
// const numbers = sayNumbers();
// console.log(numbers);
// console.log(numbers.next());
// console.log(numbers.next());


// function* generatorFunction() {
//     yield 1;
// }

// const myGenerator = generatorFunction();
// console.log(generator.next());

function* createIds() {
    let index = 1;
    while(true) {
        yield index ++;
    }
}

const idGenerator1 = createIds();
const idGenerator2 = createIds();

console.log(idGenerator1.next());
console.log(idGenerator1.next());
console.log(idGenerator1.next());

console.log(idGenerator2.next());
console.log(idGenerator2.return(10));


function* generatorFunction() {
    yield* [1,2,3] // yield 1, yield 2, yield 3
}
const myGenerator = generatorFunction();
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next()); // done: true
console.log(myGenerator.next());
