console.warn('------------------');


function func1() {
    if (true) {
        var a = 'a';
    }
    console.log(a);
}

function func2() {
    if (true) {
        let a = 'a';
        console.log(a);
    }
    console.log(a); // 불가하다!
}

function func3() {
    if (true) {
        const a = 'a';
    }
    console.log(a); // 불가하다!
}

func1();
//func2();
func3();