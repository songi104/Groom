const arr = [0,1,2,3,4];
console.log(arr.reduce(function(accumulator, currentValue) {
    return accumulator+currentValue;
}))