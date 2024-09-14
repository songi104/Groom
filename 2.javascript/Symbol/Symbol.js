// const sym1 = Symbol(1);
// const sym2 = Symbol(2);
// console.log(sym1===sym2);
// console.log(sym1.description);

let carA = {
    id: 1,
    name: 'morning',
    brand: 'kia',
    price: 1000
}

// 이렇게 하면 항상 unique한 값을 줄 수 있다.
// 원래 있던 속성의 값을 덮지 않는다.
// const idSym = Symbol('id');
// carA[idSym] = 300;

// console.log(Object.getOwnPropertyNames(carA));
// for (const key in carA) {
//     console.log(key);
// }
// console.log(Object.getOwnPropertySymbols(carA));

// const sym1 = Symbol('1');
// const sym2 = Symbol('1');
// console.log(sym1==sym2);
// console.log(sym1===sym2);

// const sym3 = Symbol.for(1);
// const sym4 = Symbol.for(1);
// console.log(sym3===sym4);

// console.log(Symbol.keyFor(sym3));


// 같은 string일 때 에러 안 나도록 symbol 이용
// const RED = Symbol('red');
// const ORANGE = Symbol('orange');
// const YELLOW = Symbol('yellow');
// const BLUE = Symbol('blue');
// const dog = 'blue';

// function getImportantLevel(color) {
//     switch(color) {
//         case RED:
//             return 'very important';
//         case ORANGE:
//             return 'important';
//         case YELLOW:
//             return 'little important';
//         case BLUE:
//             return 'not important';
//         default:
//             console.log(`${color} not included`);
//     }
// }

// console.log(getImportantLevel(BLUE));
// console.log(getImportantLevel(dog));

const length = Symbol('length');
class Car {
    constructor() {
        this[length] = 0;
    }

    add(brand, name) {
        this[brand] = name;
        this[length]++;
    }
}

let myCars = new Car();
myCars.add('kia', 'morning');
myCars.add('hyundai', 'tucson');
myCars.add('genesis', 'gv80');

for (const car in myCars) {
    // length가 안 나오게 하려면 Symbol을 이용하세요
    console.log(car, myCars[car]);
}