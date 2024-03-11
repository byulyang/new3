// 메서드 오버라이딩
// 부모 메서드 전체를 교체하지 않고, 부모 메서드를 토대로 일부 기능만 변경하고 싶을 떄,
// 부모 메서드의 기능을 확장하고 싶을 때 메서드 오버라이딩을 사용한다.

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

class Yonex extends Racket{

    attack(smash) {
        console.log(`${this.name}는 ${smash}으로 공격합니다.`);
    }
    move(smash) {
        super.down(30);
        this.attack(smash);
    }
}

let yonex = new Yonex("나노플레어",32, 32);
yonex.move("대각선");