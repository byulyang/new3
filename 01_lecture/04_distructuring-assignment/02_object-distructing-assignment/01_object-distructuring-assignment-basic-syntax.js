// 객체 구조 분해 할당

// 01. 객체 구조 분해 할당 기본 문법
let pants = {
    productNmae : "배기팬츠",
    color: "검정색",
    price: 30000
};


let {productNmae, color, price} = pants

console.log(productNmae);
console.log(color);
console.log(price);

let {color : co, price : pr, productNmae : pn} = pants;
console.log(co);
console.log(pr);
console.log(pn);