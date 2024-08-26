// Call();
console.log('======Call======');
const fullName = function(city, country){
    const firstName = 'Songi';
    const lastName = 'Park';
    console.log(this.firstName, this.lastName, city, country);
}
const person1 = {
    firstName: 'John',
    lastName: 'Park'
}

fullName();
fullName.call(person1, 'Daegu', 'Korea');


// Apply();
console.log('======Apply======');
fullName.apply(person1, ["Seoul", "Korea"]);



// bind();
console.log('======bind======');
function func(lang) {
    if (lang ==='ko') {
        console.log(`lang: ${this.korGreeting}`);
    } else {
        console.log(`lang: ${this.engGreeting}`);
    }
}
const greeting = {
    korGreeting: '안녕!',
    engGreeting: 'hello'
}
const bindingFunc = func.bind(greeting);
bindingFunc('ko');