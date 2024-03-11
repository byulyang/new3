// 클래스 표현식

// 1. 익명 클래스 표현식
let Tutor = class {
       racket() {
        console.log(`요넥스`);
       }
};

new Tutor().racket();

// 2. 기명 클래스 표현식
let Yonex = class MyYonex {
    nano() {
        console.log(`나노`);
    }
}
new Yonex().nano();