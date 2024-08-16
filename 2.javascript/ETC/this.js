// Method This => Object
function method_this() {
    const audio = {
        title: 'a',
        play() {
            console.log('play this', this);
        },
        whatIs() {
            console.log('this at method', this);
        }
    };

    audio.stop = function (){
        console.log('stop this', this);
    };

    audio.whatIs();
}

method_this();


// Function This => Window Object
function function_this() {
    console.log('-----function-----');
    console.log(this);

}

function_this();


// Constructor Function => 만들어지는 object
function constructor_this() {
    console.log('-----constructor-----');
    
    function Audio(title) {
        this.title = title;
        console.log(this);

    }
    
    const audio = new Audio('a');
}

constructor_this();



// 좀 더 어려운 예시!
function developed_example() {
    console.log('-----developed example------');
    const audio = {
        title:'나야나',
        categories: ['rock', 'pop','hiphop'],
        displayCategories() {
            this.categories.forEach(function(category) {
                console.log(this.title, category);
                // 이 this는 window를 가리키게 됩니다!
                // 메소드가 아니라 함수 안에 들어있기 때문에..
                // 하지만 this Arg를 주게된다면 얘기가 달라지죠..
            }, this)}
    }
    audio.displayCategories();
}

developed_example();



// 화살표 함수 => 상위 스코프의 this
function arrow() {
    console.log('------화살표 함수-----');
    const audio = {
    title:'나야나',
    categories: ['rock', 'pop','hiphop'],
    displayCategories() {
        this.categories.forEach((category) =>{
            console.log(this.title, category);
        })}
    }
    audio.displayCategories();
}

arrow();