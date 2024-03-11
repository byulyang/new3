// 생성자 오버라이딩
// 클래스가 다른 클래스를 상속 받고 constructor가 없는 경우에는 비어있는 constructor가 만들어진다.
// 생성자는 기본적으로 부모 constructor를 호출한다.
// 이 때 부모 constructor에도 인수를 모두 전달하는데 클래스에 자체 생성자가 없는 경우엔 이런 일이 모두 자동으로 일어난다.

class Racket{

    constructor(name, gut) {
        this.name = name;
        this.gut = gut;
    
    }
    maeda(racketgut) {
        this.gut += racketgut;
        console.log(`${this.name}은 ${racketgut}강도 로 매져있습니다.`);
    }
    down(powerdown) {
        if(this.gut > powerdown)
        this.gut -= powerdown;
    console.log(`${this.name}은 거트끊어짐으로 인해${powerdown}감량되어 ${this.gut}가 되었습니다`);
    }
}

class Deer extends Racket {

    constructor(name, gut, length) {
        super(name , gut);
        this.length = length;
    }
    shuttle(defense) {
        console.log(`${this.name}는 ${defense}를 성공했습니다.`);
    }
}

let deer = new Deer('나노플레어', 32, 1);
deer.shuttle('수비');
