const submitBtn = document.querySelector('.submit-btn');
const title = document.querySelector('h2');

// CLICK EVENT 종류들 테스트
submitBtn.addEventListener('click', handleEvent);
submitBtn.addEventListener('dblclick', handleEvent);
submitBtn.addEventListener('mousedown', handleEvent);
submitBtn.addEventListener('mouseup', handleEvent);


const form = document.querySelector('form');
const emailInput = document.getElementById('email');

// FORM EVENT 종류 테스트
form.addEventListener('click', handleEvent);
emailInput.addEventListener('keydown', handleEvent);
emailInput.addEventListener('paste', handleEvent)


function handleEvent(e) {
    if (e.type === 'submit') {
        e.preventDefault();
    } else if (e.type ==='paste') {
        alert('붙여넣기는 금지되어있습니다');
    }
    console.log(`Event type: ${e.type}`);
    //title.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`
    title.textContent = e.target.value;
}