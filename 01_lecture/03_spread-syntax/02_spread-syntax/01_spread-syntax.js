// 스프레드 문법, 전개 문법
// rest parameter처럼 매개변수 목록을 배열로 가져오는 것과는 반대로 배열으 통째로 매개변수에 넘겨주는 기능이다.
// 하나로 뭉쳐 있는 여러 값들의 집합을 전개해서 개별적인 값들의 목록으로 만든다.
// 사용 대상은 for...of 문으로 순회할 수 있는 이터러블에 한정된다.

console.log(`가장 큰 값 : ${Math.max(10, 30, 20)}`);

let arr = [10 , 30, 20];
console.log(`가장 큰 값 : ${Math.max(arr)}`);

// Math.max()는 배열이 아닌 숫자 목록을 인수로 받기 때문에 배열의 경우 원하는대로 동작하지 않는다.
// 스프레드 문법을 사용한다.
console.log(`가장 큰 값 : ${Math.max(...arr)}`);

let arr1 = [10, 30, 20];
let arr2 = [100, 300, 200];

console.log(`가장 작은 값 : ${Math.min(...arr1, ...arr2)}`);
// 일반 값과 혼합해서 사용 가능
console.log(`가장 작은 값 : ${Math.min(1, ...arr1, 2, ...arr2, 3)}`);

// 배열 병합에도 사용 가능 concat 보다 간결
let merged = [0, ...arr, 2, ...arr2, 3]; // ? 
console.log(merged);

let str = 'javascript';
console.log([...str]);

