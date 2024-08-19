// 객체 할당
let person = {
    name: 'Song',
    age: 25,
    phone: 123,
    address: {
        zipcode: 1234,
        street: 'rainbow',
        number: 1
    }
}

let {address: {zipcode, street, number}} = person; //꺼내주는 느낌
console.log( zipcode, street, number);


// 배열 구조 분해 할당
const week = ['mon', 'tue', 'wed', 'thu', 'fri'];
const [d1, d2, d3,d4,d5] = week;
console.log(d1, d2, d3, d4, d5);


const animals = ['dog', 'cat', 'elephant', 'chick', 'rabbit', 'bird']
const [,,one,,two] = animals; // 쉼표 하나가 요소 하나
console.log(one, two);

const person2 = {
    what :'what',
    lastName: 'Barr',
    firstName: 'John',
}
const {what: firstName=true, lastName} =person2 ;
console.log(firstName, lastName);


// advanced example
let people = [
    {name: 'Mike Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            brother: 'Sam Smith'
        }
    },
    {name: 'Tom Jones',
        family: {
            mother: 'Norah Jones',
            father: 'Richard Jones',
            brother: 'Howard Jones'
        }
    }
]

for (let {name: n, family: {father:f}} of people) {
    console.log(`${n}'s father: ${f}`);
}