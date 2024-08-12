// var: 재선언, 재할당 가능. 자유도 제일 높다
console.log('var는 자유도가 제일 높아요');
var greeting = 'hello';
console.log(greeting);
var greeting = 'hi';
console.log(greeting);

// let: 재선언은 불가능. 재할당은 가능.
console.log('let은 재선언은 안 돼요. let let 불가능')
let A = 'hello';
console.log(A);
// let A = 'hi'; 불가능!
A = 'hi'
console.log(A);

// const: 재선언,재할당 불가능
const B = 'hello';
console.log('const는 재선언 재할당 안 돼요');
console.log(B);