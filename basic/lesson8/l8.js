class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeteng() {
       console.log(`Hello humans. My name is ${this.name}`)
    }
}

let Viktor = new Human('Viktor', 23);
let Petka = new Human('Petka', 88);

// console.log(Viktor);

class Developer extends Human {
    constructor(name, age, skill) {
        super(name, age);
        this.skill = skill;
    }
}

let Dimas = new Developer('Dimas', 20, 'Noob');


Dimas.greeteng();
// console.log(Dimas);
// console.log(Viktor);


class TeamLead extends Developer{
    constructor(name, age, skill, project, reward) {
        super(name, age, skill);
        this._project = project;
        this._reward = reward;
    }

    greeteng() {
       console.log(`Hello guys. Welcome to ${this.project} project`)
    }

    raiseReward(money) {
        let tenPercent = this._reward * .1;

        if (money > tenPercent) {
            throw new Error('багато хочеш')
        }

        this._reward += money;
    }

    get project() {
        // throw new Error('NDA')

        console.error('ERRR');
        return this._project
    }

    set project(newProject) {
       // this._project = this._project
    }

}

Viktor.greeteng();
Petka.greeteng();


let TL = new TeamLead('Oksana', 18, 'PHP', 'FreHost', 200);

TL.greeteng();

TL.raiseReward(10);

console.log(TL.project);

TL.project = 'NA NA NA';

console.log(TL.project);

