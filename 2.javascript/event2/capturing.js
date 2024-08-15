const arr = document.querySelectorAll('*');
console.log(arr);
for (let elem of arr) {
    elem.addEventListener('click', e =>
        alert(`캡쳐링: ${elem.tagName}`), true);
    elem.addEventListener('click', e=>
        alert(`버블링: ${elem.tagName}`));
}