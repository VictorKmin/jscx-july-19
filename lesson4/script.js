// // // let x = 0;
// // //
// // // {
// // //     console.log(x);
// // //     let z = 22;
// // // }
// // //
// // // console.log(z);
// // // let i = 0;
// // //
// // // let b = ++i;
// // //
// // // console.log(i);
// // // console.log(b);
// // //
// // // let x = NaN;
// // //
// // // let smtToBool = !!x;
// // // console.log(smtToBool)
// // //
// // //
// // // let id = 'TEST';
// // //
// // // let isNumber = +id || 0;
// // //
// // // console.log(isNumber);
// // //
// // //
// // // let x = 12;
// // //
// // // // const x = 22
// // //
// // // console.log(x)
// // /**
// //  * -primities
// //  * number
// //  * strung
// //  * boolean
// //  * undefined
// //  *
// //  * -reference
// //  * object
// //  * null
// //  * Symbol
// //  */
// // //
// // // let a = 22;
// // // let b = a;
// // //
// // // b = 90;
// // // console.log(a);
// // // console.log(b);
// // //
// // //
// // // let obj = {a: 20, b: 999};
// // //
// // // let antObj = obj;
// // //
// // // antObj.a = 17;
// // // obj.b = 6;
// // //
// // // console.log(antObj);
// // // console.log(obj);
// // //
// // //
// // // let arr = [1,2,3,4,5];
// // //
// // // let refArr = arr;
// // //
// // // refArr[0] = 55;
// // //
// // // arr[2] = 99999;
// // //
// // // console.log(refArr);
// // // console.log(arr);
// // //
// // //
// // // let x = undefined;
// // // let y = x;
// // //
// // // y = 17;
// // // console.log(y);
// // // console.log(x);
// //
// //
// // function sumator(yyy = 1, b = 20) {
// //     if (typeof yyy !== 'number' || typeof b !== 'number') {
// //         throw new Error('Something is not number')
// //     }
// //
// //     // console.log(yyy + b);
// //
// //     for (let i = 0; i < arguments.length; i++) {
// //         const argument = arguments[i];
// //         console.log(argument);
// //     }
// //
// //     let i = 0;
// //
// //     while (i < arguments.length) {
// //         console.log(arguments[i]);
// //         i++
// //     }
// // }
// //
// //
// // sumator(99, 2);
// // // sumator(21, 32);
// //
// // console.log('))))))))))))');
// //
// // // let array = {name: 'Viktor', age: 23, car: false};
// //
// // // let keys = Object.keys(array);
// // // let values = Object.values(array);
// //
// // // console.log(keys);
// // // console.log(values);
// //
// // let array = [1,2,4,55,3,4,4234,5345,34534];
// //
// // for (const arrayElement of array) {
// //     console.log(arrayElement);
// // }
// //
// //
// //
//
//
// function sum(a, b) {
//     let result = a + b;
//     console.log(result);
//     return result;
//     // console.log(22);
//     // return 'xxx'
//     // return a + b;
// }
//
// let x = sum(2, 5);
//
// console.log(x);
//
// console.log(x / 2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// let obj = {a: 20, b: 0}
//
// let copy = obj;
//
// copy.a = 777;
// obj.b = copy.a;
//
// console.log(obj);
// console.log(copy);
//
//
// let z = 22;
//
// let y = z;
//
// y = 7777;
// z = 9999;
//
// console.log(z);
// console.log(y);
//
//
// /**
//  * number
//  * null
//  * undef
//  * obj
//  * str
//  * bool
//  * symb
//  */
//
//
//
// let obj = {a: 20, b: 9999};
// let copy = obj;
// copy.a = 777;
// obj.b = copy.a;
// console.log(obj);
// console.log(copy);

class Cinderella {
    constructor(name, age, legSize) {
        this.name = name;
        this.age = age;
        this.legSize = legSize;
    }
}

let Cinderella1 = new Cinderella('Alisa', 23, 39);
let Cinderella2 = new Cinderella('Vivienna', 20, 35);
let Cinderella3 = new Cinderella('Anna', 18, 37);
let Cinderella4 = new Cinderella('Matilda', 19, 38);
let Cinderella5 = new Cinderella('Jordana', 22, 36);
let Cinderella6 = new Cinderella('lesly', 20, 42);
let Cinderella7 = new Cinderella('Jenifer', 23, 41);
let Cinderella8 = new Cinderella('Karina', 25, 34);
let Cinderella9 = new Cinderella('Olga', 24, 33);
let Cinderella10 = new Cinderella('Cindi', 20, 30);


class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let Prince1 = new Prince('Leonardo', 25, 35);
let Prince2 = new Prince('Jhon', 23, 39);
let Prince3 = new Prince('Mohammed', 27, 37);
let Prince4 = new Prince('Vasia', 24, 38);
let Prince5 = new Prince('Yaroslav', 24, 36);
let Prince6 = new Prince('Ahmed', 24, 42);
let Prince7 = new Prince('Aladin', 28, 41);
let Prince8 = new Prince('Georg', 20, 34);
let Prince9 = new Prince('Ramil', 19, 33);
let Prince10 = new Prince('Petro', 35, 30);


let cinderellaArr = [Cinderella1, Cinderella2, Cinderella3, Cinderella4, Cinderella5, Cinderella6, Cinderella7,
    Cinderella8, Cinderella9, Cinderella10];


let princeArr = [Prince1, Prince2, Prince3, Prince4, Prince5, Prince6, Prince7, Prince8, Prince9, Prince10];


princeArr.forEach(prince => {

    let cindi = cinderellaArr.find(cindi => {
        return cindi.legSize === prince.shoeSize
    });

    console.log(cindi.name, prince.name);
})


for (let i = 0; i < cinderellaArr.length; i++) {
    for (let j = 0; j < princeArr.length; j++) {
        if (cinderellaArr[i].legSize === princeArr[j].shoeSize) {
            console.log(cinderellaArr[i].name);
            console.log(princeArr[j].name);
            console.log('______________________');
        }
    }
}


