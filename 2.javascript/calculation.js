console.warn('-------------calculation-------------');
let val = 1.2345;

console.log(Math.round(val));
console.log('ceil of 1.2345:', Math.ceil(val));
console.log('ceil of -1.2345:', Math.ceil(-1*val));
console.log(Math.floor(val));

console.log('random을 사용해보죠');
console.log(Math.floor(Math.random() * 10 + 5)); //5-10까지 랜덤
