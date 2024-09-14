function makeIterator(numbers) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < numbers.length?
            {value:numbers[nextIndex++], done: false} :
            {value: undefined, done:true};
        }
    }
}

const numbersArray = [1,2,3];

// iterator 방법 (1) - i made it~
// const numbersIterator = makeIterator(numbersArray);

// iterator 방법 (2)
const numbersIterator = numbersArray[Symbol.iterator]()


console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());



const numbersIterable = [1,2,3];
const numbersNotIterable = {a:1, b:2};
console.log(typeof numbersIterable);
console.log(typeof numbersNotIterable);
// for (const n of numbersNotIterable) {
//     console.log(n);
// not iterable }

const set = new Set([1,2,3,4]);
console.log(set[Symbol.iterator]().next());