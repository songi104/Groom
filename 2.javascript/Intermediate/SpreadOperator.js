
// Array
const arr = [1,2,3];

const new_arr = arr;
arr[0] = 'new';
console.log(new_arr);

const spread_arr = [...arr];
arr[0] = 'spread';
console.log(spread_arr, new_arr);


// Object
const obj1 = {
    a: 'a',
    b: 'b'
}
const obj2 = {
    c: 'c',
    d: 'd'
}

const objWrap = {obj1, obj2}
console.log(objWrap); // 객체 자체가 들어감

const objSpread = {...obj1, ...obj2};
console.log(objSpread); // 객체 내부 값이 들어감
