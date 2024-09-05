class Person {
    constructor(name, email, birthday) {
        this.name = name;
        this.email = email;
        this.birthday = new Date(birthday);
    }

    introduce() {
        return `hello my name is ${this.name}`
    }

    static multipleNumbers(x, y) {
        return x*y;
    }
}


const john = new Person('john', 'john@example.com', '10-1-98');
console.log(john);;
console.log(john.introduce())
console.log(john.multipleNumbers(3, 5))