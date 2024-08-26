const score = (() => {
    let count = 0;
    return {
        current: () => {return count},
        increment: () => {count ++ },
        reset: () => {count = 0}
    }
})()

console.log(typeof score);
console.log(score);

console.log(score.current());
score.increment();
console.log(score.current());

console.log('------ increment ------')
const increment = (() => {
    let counter = 0;
    console.log(counter);
    const number = (num) => 
        console.log(`it is ${num} number`);
    return () => {
        counter ++;
        number(counter);
    }
})()

increment();
console.log(increment);
increment();