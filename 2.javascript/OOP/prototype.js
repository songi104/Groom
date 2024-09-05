let user = {
    name: 'songi',
    age: 25
}

console.log(user.name);
console.log(user.hasOwnProperty('email')); // false
console.log(user.hasOwnProperty('name')); // true

function Person(name, email, birthday) {
    this.name = name;
    this.email = email;
    this.birthday = new Date(birthday);
}

// prototype
Person.prototype.calculateAge = function() {
    const diff = Date.new() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const john = new Person('john', 'john@abc', '7-10-91');
const song = new Person('songi', 'songi@abc', '10-4-00')
console.log(john, song);



// prototype 만드는 법 2번째
const personsPrototype = {
    calculateAge() {
        const diff = Date.new() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

function Person2(name, email, birthday) {
    const person = Object.create(personsPrototype);
    person.name = name;
    person.email = email;
    person.birthday = new Date(birthday);
    return person;
}
const john2 = new Person2('john2', 'john2@abc', '7-10-91');
const song2 = new Person2('song2i', 'song2i@abc', '10-4-00');
song2.calculateAge();
console.log(john2, song2);
