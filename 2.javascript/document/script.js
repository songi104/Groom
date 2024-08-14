
const col1 = document.getElementById('col1');
console.log(col1);

// col1.style.display= 'none';
// col1.textContent = 'what is this?';
// col1.innerText = 'what what what ';
// col1.innerHTML = '<br>hi<br>hihihihi';

col1.style.color = 'red';
col1.style.backgroundColor=  'blue';

const items = document.getElementsByClassName('col-sm-4');
console.log(items);


// h3
let h3s = document.getElementsByTagName('h3');
console.log(h3s);
h3s = Array.from(h3s)
console.log(h3s);
h3s.forEach((elem, idx) => {
    elem.style.color = 'gray';
    elem.textContent = `${idx}`
});

