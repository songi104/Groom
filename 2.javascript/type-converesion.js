console.warn('--------------type conversion--------------');

let a = Number(true);
console.log(a, typeof a);

let date = String(new Date());
console.log(typeof date, date);

let arr = [1,2,3,4,5].toString();
console.log(typeof arr, arr);

let num = '123.45';
console.log(typeof parseInt(num), parseInt(num));
console.log(typeof parseFloat(num), parseFloat(num));


// String + Number = String
let val1 = 3;
let val2 = '5';
let new_val = val1+val2;
console.log(typeof new_val, new_val);

