console.warn('---------------------warn-----------------------');

const user = {
    name: 'song',
    age: 25,
    university: 'DGIST'
};

for (let x in user) {
    console.log(`${x}: ${user[x]}`);
}

const locations = ['서울', '부산', '대구','대전'];
locations.forEach(function (location, index) {
    console.log(`${index}: ${location}`)
})