// 화살표 함수 기본 문법
// ES6에서 도입 된 화살표 함수는 function 키워드 대신 화살표 사용해 좀 더 간략한 방법으로 함수를 선언할 수 있다.
// 화살표 함수는 항상 익명함수로 정의한다. 본문이 한 줄인 함수를 작성할 때 유용하다.

let message;
message = function() {
    return "Nice yonex"
}

console.log(message());

message = () => {
    return "Nice Victor";
};
console.log('==========================');
console.log(message());

message = () => "Nice Yonex!!"

console.log(message());

message = (val1,val2) => "Nice" + val1 + val2;

console.log(message('Yonex', '!!'));

message = val1 => "Nice" + val1;

console.log(message(`Yonex LYD Attack`));

// 객체 리터럴을 반환하는 경우 소괄호로 감싼다.
// 소괄호로 감싸지 않을 경우 함수 몸체 중괄호로 잘못 해석한다.
const yonexRacket = (name,gut) =>({name,gut});
console.log(yonexRacket("Nano",32));


// 고차 함수에 인수로 전달 가능하여 일반적인 함수 표현식 보다 표현이 간결해진다.
// val는 이용도가 어디까지 
console.log([1, 2, 3, 4, 5].map(function(val) {return val * 10}));
console.log([1, 2, 3, 4, 5].map(val =>  val * 10));

console.log([5, 10, 15, 20, 25].map(val1 => val1 * 5));
console.log([2, 3, 4, 5].map(val2 => val2 * 5));

