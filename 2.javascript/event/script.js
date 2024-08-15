window.onload = function() {
    // 문서가 로드되면이 함수 실행
    let text = document.getElementById('text');
    text.textContent = 'HTML loaded';
}

const aElement = document.querySelector('a');
aElement.addEventListener('click', () => {
    alert('당신은 사실 aElement를 클릭했어요');
})


const buttonElement = document.querySelector('.btn2');
buttonElement.addEventListener('click', (event) => {
    let val;
    val = event.target;
    val = event.target.className;
    val = event.target.classList;
    
    val = event.type;
    val = event.clientY; //window로부터 거리
    val = event.offsetY; //요소로부터 거리

    console.log(val);
    
})