import {UserModel} from "./model";

const arrt: Array<keyof UserModel> = ["name", "age", "role_id"];

function strip(x: string | number) {
    if(typeof x === 'number'){
        return x.toFixed(2)
    }
    return x
}

console.log(strip('     HELO WORLD'));



class Car {
    year: number;
    producer: string

    constructor(year: number, producer: string) {
        this.year = year;
        this.producer = producer;
    }
}


const car = new Car(2002,'Volvo');

car.privateCaller();


class HotWheels extends Car {
    color: string;

    constructor(year: number, producer: string, color: string) {
        super(year, producer);
        this.color = color;
    }
}


let h = new HotWheels(2202, 'Disco', 'Red');

h.privateCaller();



abstract class absChair {
    material: string;
    legs: number = 4;


    constructor(material: string) {
        this.material = material;
    }
}


class moderChair extends absChair {
    color: string

    constructor(material: string, color: string) {
        super(material);
        this.color = color;
    }
}

class oldChair extends absChair {
    owner: string


    constructor(material: string, owner: string) {
        super(material);
        this.owner = owner;
    }
}

let ch1 = new moderChair('gold', 'yellow');
let ch2 = new oldChair('tree', 'царь государь');

console.log(ch1);
console.log(ch2);

// в майні зробити через switch меню 1 - Верховна рада 2 - Фракція 3 - Депутат відповідно при вводі з
//     клави певної цифри ми попадаєио в інше меню якщо ми нажали 1 то нам промалюється в консолі
//     таке меню 1-додати фракцію 2-вивести всі фракції 3-вивести найбільшого хабарника меню робимо
//     на свій смак це просто створити switch, і створити меню, а як їх зєднати шось не дуже розумію

// клас Верховна рада
// поля:
// масив фракцій
// методи:
// додати\видалити фракцію
// вивести всі фракції
// вивести конкретну фракцію
// додати\видалити депутата з фракції
// вивести всіх хабарників фракції
// вивести найбільшого хабарника у фрації
// вивести найбільшого хабарника верховної ради
// вивести фсіх депутатів фракції
//
// Це теж не робити?
