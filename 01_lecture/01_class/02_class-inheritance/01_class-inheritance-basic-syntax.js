// 클래스 상속
// 클래스 상속을 사용하면 클래스를 다른 클래스로 확장할 수 있다.

// 01. 상속 기본 문법
class Animal{

    constructor(name,gut) {
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
};

let animal = new Animal("나노", 32);

animal.maeda(32);
animal.down(30);

class Human extends Animal {

    develop(language) {
        console.log(`${this.name}은 ${language}로 개발을 합니다.`);
    }
}

let human = new Human("수강생",70);
human.maeda(32);
human.down(1);
human.develop("요넥스");
