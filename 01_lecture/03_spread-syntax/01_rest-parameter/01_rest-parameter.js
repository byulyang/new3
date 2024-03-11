// 나머지 매개변수
function merge(msg1,msg2) {
    return msg1 + msg2;
}

console.log(merge('안녕하세요'));
console.log(merge('안녕하세요','반갑습니다.'));
//console.log(merge('안녕하세요','반갑습니다.','제 이름은 홍길동입니다.'));

// 함수에 정의 된 인수는 2개이고 정해진 인수보다 많이 전달 되면 해당 인수를 무시하고 기능한다.
// 이 때 나머지 매개변수... 를 사용하면 매개변수를 한데 모아 배열에 담을 수 있다.

function mergeAll(...args) {
    let message = '';

    for(let arg of args) message += arg;

    return message;
}

console.log(mergeAll('안녕하세요'));
console.log(mergeAll('안녕하세요','반갑습니다'));
console.log(mergeAll('안녕하세요','반갑습니다','제 이름은 홍길동입니다.'));


