// function fetchData() {
//     return new Promise((resolve, reject) => {
//         // 비동기 요청
//         const success = false;
//         if (success) {
//             resolve('songi');
//         } else {
//             reject('실패');
//         }
//     })
// }

// const myPromise = fetchData();
// myPromise
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// fetch('http://jsonplaceholder.typicode.com/todos/1')
//     .then(response1 => response1.json())
//     .then(json => console.log(json))
//     .then(() => fetch('http://jsonㅇㅇaceholder.typicode.com/todos/2'))
//     .then(r => {
//         r.json();
//         console.log(r);}
//     )
//     .catch((e) =>
//         console.error('에러남', e))
//     .finally(() => {
//         console.log('작업 끝!');
//     })

async function makeRequests() {
    try {
        const response1 = await fetch('http://jsonplaceholder.typicode.com/todos/1');
        const jsonR = await response1.json();
        console.log(jsonR);
    } catch (error) {

        console.error(error);
    } finally {
        console.log('모든 작업 끝!')
    }
}

makeRequests();