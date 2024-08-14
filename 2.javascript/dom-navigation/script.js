let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

console.log('list', list);
console.log('listItem', listItem);


// childNodes와 children 차이
val = list.childNodes;
console.log('list.childNodes', val);
val = list.children;
console.log('list.children', val);

list.children[0].textContent = '내가 다 바꿔버려';

// next sibling 반환
val = listItem.nextElementSibling;

console.log('val', val);