
// Impure
let x = 0;
const numberUp = () => x += 1;
console.log(numberUp());
console.log(x);


// Pure
x = 0;
const pureNumberUp = (num) => {
    num += 1;
    return num;
}
console.log('num', pureNumberUp(x));
console.log(x);


// 배열 Impure
const alphabetArray = ['A', 'B'];
const addItemToArray = (originalArray, newItem) => {
    originalArray.push(newItem);
    return originalArray;
}
console.log(addItemToArray(alphabetArray, 'C'));
console.log(alphabetArray);

// 배열 Pure: Spread 이용
const pureAddItemToArray = (originalArray, newItem) => {
    return [...originalArray, newItem]
}
const testArray = ['h', 'i']
console.log(pureAddItemToArray(testArray, 'hello'));
console.log(testArray);