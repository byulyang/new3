// 다양한 사용법

let user = {};
[user.firstName, user.lastName] = 'Gwansoon Yu'.split(' ');

console.log(user.firstName);

let student = "유관순";
let teacher = "홍길동";

[student, teacher] = [teacher, student];
console.log(`학생 : ${student}, 교사 : ${teacher}`);

// rest parameter ...로 나머지 요소를 한 번에 가져올 수도 있다.
let [sign1, sign2, ...rest] = ["양자리","황소자리","쌍둥이자리","게자리","사자자리"];
console.log(sign1);
console.log(sign2);
console.log(rest);

// 기본값으 설정하고 사용할 수도 있다.
let [firstName4 = "아무개", lastName4 = "김"] = ["길동"];
console.log(firstName4);
console.log(lastName4);




