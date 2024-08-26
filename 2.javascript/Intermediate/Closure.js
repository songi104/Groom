function outerFunc(outerVal) {
    return function innerFunc(innerVal) {
         console.log('outer:', outerVal);
         console.log('inner:', innerVal);
    }
}


const newFunc = outerFunc('outer');
console.log(newFunc);
newFunc('inner');


let a = 'a';
function functionA() {
    let b= 'b';
    function functionB() {
        let c = 'c';
        console.log(a,b,c);
    }
    functionB();
    console.log(a,b);

}
functionA();