// 스프레드 문법을 이용한 배열 , 객체 복사

let arr = [10, 30 ,20];
let arrCopy = [...arr];
console.log(arr);
console.log(arrCopy);

console.log(arr === arrCopy);
arrCopy.push(50);
//arr.push(100); ? 
console.log(arr);
console.log(arrCopy);

let obj = { name : '홍길동', age : 20};
let objCopy = {...obj};
console.log(obj);
console.log(objCopy);
console.log(obj === objCopy);
objCopy.age = 30;
console.log(obj);
console.log(objCopy);


