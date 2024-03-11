// 배열 구조 분해 할당
// 구조 분해 할당을 사용하면 배열이나 객체를 변수로 '분해'하여 연결할 수 있다.

// 배열 구조 분해 할당 기본 문법
let nameArr = ['Gildong', 'Hong'];

let [firstName, lastName] = nameArr;
// let firstName = nameArr[0];
// let lastame = nameArr[1];

console.log(firstName);
console.log(lastName);

let [firstName2, lastName2] = "Saimdang Shin".split(' ');
console.log(firstName2);
console.log(lastName2);

let[firstName3, , lastName3] = ['firstName', 'middleName', 'lastName'];
console.log(firstName3);
console.log(lastName3);
