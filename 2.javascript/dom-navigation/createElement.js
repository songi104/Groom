

let list = document.querySelector('ul.list-group');
console.log('list', list);


// element 생성
const li = document.createElement('li');
li.className = 'list-group-item';
//list.appendChild(li);


const link = document.createElement('a');
link.innerHTML = '<i>hi</i>';
li.appendChild(link);
list.appendChild(li);

for (let i = 5; i < 10; i++) {
    console.log(i);
}