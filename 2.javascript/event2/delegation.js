// event 추가
const btns = document.querySelectorAll('.btn');
for (const btn of btns) {
    btn.addEventListener('click', ()=>
    alert(btn.innerHTML));
}

// btn 하나 만들어주기
const buttonList =document.querySelector('#buttons');
const button = document.createElement('button');
button.setAttribute('class', 'btn');
button.innerText = 'By JS';
buttonList.appendChild(button);

// 위와같은 방법으로는 By JS는 못한다
// 그러니까 상위 요소에 이벤트 만들어주기
buttonList.addEventListener('click', () => {
    alert('상위에서 알려줄게요');
})