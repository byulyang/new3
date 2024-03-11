// 화살표 함수의 특징
// 화살표 함수는 기존의 함수보다 표현만 간략한 것이 아니라 내부 동작 또한 간략화 되어 있다.

let theater = {
    store : "건대점",
    titles : ["어벤져스","겨울왕국","스파이더맨","라이온킹","알라딘"],

    showMovieList() {
        this.titles.forEach(
            // 화살표 함수 본문에서 this에 접근하면 외부에서 값을 가져오므로
            // this.store은 tehater.store "건대점"을 의미한다.
            title => console.log(this.store + ':' + title)
        );
    }
};

// theater.showMovieList() {
//     this.titles.forEach(function(title) {
//          console.log(this.store + ':' + title);
//     });
// };

theater.showMovieList();

// 화살표 함수는 new와 함꼐 호출할 수 없다.
const arrowFunc = () => {};

// 화살표 함수는 생성자 함수로 사용할 수 없다.
// new arrowFunc();
// 화살표 함수는 인스턴스를 생성할 수 없으므로 prototype프로토타입도 가질수 없다
// console.log(arrowFunc.hasOwnproperty(`prototype`));

class Racket{

    constructor(name,gut,gut1) {
        this.name = name;
        this.gut = gut;
        this.gut1 = gut1;
    
    
    }
    maeda(racketgut) {
        this.gut += racketgut;
        console.log(`${this.name}은 ${racketgut}강도 로 매져있습니다.`);
    }
    down(powerdown) {
        
        if(this.gut > powerdown)
        this.gut -= powerdown;
        
    console.log(`${this.name}의 장력은 ${this.gut1} 이었지만, 거트끊어짐으로 인해 땡땡함이${powerdown} 감소되어 ${this.gut}땡땡함으로 변경되었습니다.`);
    }
}

class Yonex extends Racket {
    down(powerdown) {

        setTimeout(() => super.down(powerdown), 40);
        console.log('거트가 끊어져서 파워가');
    }
}

// 화살표 함수는 arguments를 지원하지 않는다.
// 화살표 함수는 본인의 arguments 3,4가 아닌 상위 스코프인 즉시 실행 함수의 arguments 1,2를 참조한다.
let yonex = new Yonex("나노플레어",100, 100);
yonex.down(60);

// 화살표 함수는 arguments를 지원하지 않는다.
(function() {
    const arrowFunc = () => console.log(arguments);
    arrowFunc(3,4);
})(1,2);
