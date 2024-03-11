// 01_클래스 기본 문법
// 동일한 종류의 객체를 여러 개 생성해야 하는 경우 객체 리터럴을 여러 개 생성하기 보다 클래스 문법을 통해 동일한 종류의 객체를 재생성 할 수 있다.

// 01 class declaration(클래스 선언) 
class Racket {

    // 생성자를 통해 인스턴스 생성 및 초기화
    // 생성자는 1개 이상 정의 될 수 없으며 생략할 경우 암묵적으로 정의 된다.
    constructor(name) {
        this.group = 1;
        this.name = name;
    }

    introduce() {
        // 프로토타입 메서드
        console.log(`안녕하세요. 이라켓은 ${this.group} 이름은${this.name}입니다.`);
    }
}

// Racket 클래스를 선언하고 new Racket()을 호출하면 새로운 객체가 생성되며
// 넘겨받은 인수 name과 함께 constructor가 자동으로 실행되어 "나노"가 this.name에 할당된다.
// 클래스 몸체에 정의한 메서드는 기본적으로 프로토타입 메서드가 된다.

let racket = new Racket("나노");
racket.introduce();

console.log(typeof Racket); // 클래스는 함수의 한 종류이다
console.log(Racket.prototype.introduce); // 클래스 내부에 정의한 메소드는 클래스.prototype에 저장된다
console.log(Object.getOwnPropertyNames(Racket.prototype)); // 생성자와 introduce 메소드를 가지고 있다.

function Yonex(name) {
    this.group = 1;
    this.name = name;
}
Yonex.prototype.introduce = function() {
    console.log(`소개합니다 이것은 ${this.group} 브랜드의 제품 ${this.name}입니다.`);

}

let yonex = new Yonex("나노 플레어");
yonex.introduce();

// Racket(); // 에러 발생 new 키워드 사용해야함
Yonex();  // 에러발생하지 않음