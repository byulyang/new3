// 중첩 구조 분해
let product = {

    size : {
        width : 10,
        height : 30
    },

    item : ["doll", "robot"]
};

let {

    size : {
        width,
        height
    },
    item : [item1, item2],

    producer = "요넥스"   // 왜 프로듀서는 안나올까?
} = product;

console.log(width);
console.log(height);
console.log(item1);
console.log(item2);
console.log(producer);
console.log(product);
