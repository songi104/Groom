console.warn('---------hoisting---------');

console.log(what);
var what= 'hi';


func();
function func() {
    console.log('hoisting test');
}
func();