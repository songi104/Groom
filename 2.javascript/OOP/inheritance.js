class Person {
    constructor(name, email, birthday) {
        this.name = name;
        this.email = email;
    }

    introduce() {
        return `hello my name is ${this.name}`
    }

}

class Client extends Person {
    constructor(name, email, phone, address) {
        super(name, email);
        this.phone = phone;
        this.address = address;
    }
}

const john = new Client('John', 'john@abc', '010-0000-0000', '서울');
console.log(john.introduce());