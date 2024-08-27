const sum = (x, y) => x+y;
const curriedSum = x => y => x+y;

console.log(sum(3,5));
console.log(curriedSum(10));
console.log(curriedSum(10)(20));

const tenPlus = curriedSum(10);
console.log(tenPlus(1));


// advanced Example
const makeFood = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1} ${ingredient2} ${ingredient3}`
        }
    }
}
const hamburger = makeFood('bread')('ham')('tomato');
console.log(hamburger);

const cleanerMakeFood = ing1 => ing2 => ing3 => 
    `${ing1} ${ing2} ${ing3}`;

const cleanHamburger = cleanerMakeFood('ham')('bread')('tomato');
console.log(cleanHamburger);


// currying function
function log(date, importance, message) {
    alert(`${date.getHours()}:${date.getMinutes()} ${importance} ${message}`)
}
//log(new Date(), "debug", "some msg");


function curry(f) {
    return function(a) {
        return function(b) {
            return function(c) {
                return f(a,b,c);
            }
        }
    }
}

const curriedLog = curry(log);
//curriedLog(new Date())('debug')('some bug');

// 그냥 이것을 이용하면 매개변수가 몇 개이든 curry로 바꿔줄 수 있단 것만 알아둬
function dynamicCurry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}

const sum1 = (x,y,z,j) => x +y+z+j;
const curriedSum1 = dynamicCurry(sum1);
console.log(curriedSum1(1)(2)(3)(4));