// // const NORMAL_NUMBER = 789;
// // //
// // // const FIRST_NUMBER = parseInt(NORMAL_NUMBER / 100);
// // // const SECOND_NUMBER = parseInt((NORMAL_NUMBER % 100) / 10);
// // // const thirdNumber = parseInt(NORMAL_NUMBER % 10);
// // //
// // // console.log(thirdNumber + '' + SECOND_NUMBER + '' + FIRST_NUMBER)
// // //
// // //
// //
// // let normalCopy = NORMAL_NUMBER;
// // let reversed = 0;
// //
// // while (normalCopy > 0) {
// //     let lastNumber = normalCopy % 10;
// //     reversed = (reversed * 10) + lastNumber;
// //     normalCopy = parseInt(normalCopy / 10);
// // }
// //
// // console.log(reversed);
//
// // 1. Три різних числа вводяться через prompt().
// //     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
// // бо світлофори дались, а це нє
// //
// // const a = +prompt('Enter a');
// // const b = +prompt('Enter b');
// // const c = +prompt('Enter c');
// //
// //
// // // if (a < b && a < c && b < c) { // 123
// // //     console.log(a, b, c);
// // // }
// // // if (a < b && a < c && b > c) { // 132
// // //     console.log(a, c, b);
// // // }
// // //
// // // if (a > b && a < c && b < c) { // 213
// // //     console.log(b, a, c);
// // // }
// // //
// // // if (a < b && a > c && b > c) { //231
// // //     console.log(22);
// // //     console.log(c, a, b);
// // // }
// // // if (a > b && a > c && b > c) { //321
// // //     console.log(c, b, a);
// // // }
// // //
// // // if (a > b && a > c && b < c) { //312
// // //     console.log(b, c, a);
// // // }
// //
// // if (a >= b && b >= c) { // 3 2 1
// //     console.log(a, b, c);
// // }
// //
// // if (a >= c && c >= b) { // 3 1 2
// //     console.log(a, c, b)
// // }
// //
// // if (b >= c && c >= a) { // 1 3 2
// //     console.log(b, c, a)
// // }
// //
// // if (b >= a && a >= c) { // 2 3 1
// //     console.log(b, a, c)
// // }
// //
// // if (c >= a && a >= b) { // 2 1 3
// //     console.log(c, a, b)
// // }
// //
// // if (c >= b && b >= a) { // 1 2 3
// //     console.log(c, b, a)
// // }
//
// // Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// // Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// // Улучшаем предыдущее задание. Если светофор зеленый и машин нет - вывести "иди".
// // Если светофор зеленый и машины есть - вывести подожди пока нарушители проедут". " +
// // "Если светофор желтый и машины есть - вывести "жди". Если светофор желтый и машин нет - " +
// // "вывести "все рано жди". Если светофор красный и машин нет- вывести "стой все рано". " +
// // "Если светофор красный - и машины есть вывести "стой и жди". Если светофор в аварийном " +
// // "режиме вывести "делай что хочешь"!
//
//
// const color = prompt('color');
// // const isRoadClear = confirm('isRoadClear');
//
// // if (color.toLocaleLowerCase() === 'green' && isRoadClear) {
// //     console.log('go');
// // } else if (color.toLocaleLowerCase() === 'green' && !isRoadClear) {
// //     console.log('waiting for oleni');
// //
// // } else if (color.toLocaleLowerCase() === 'red' && isRoadClear) {
// //     console.log('STOP');
// //
// // } else if (color.toLocaleLowerCase() === 'red' && !isRoadClear) {
// //     console.log('Still waiting');
// //
// // } else if (color.toLocaleLowerCase() === 'yellow' && isRoadClear) {
// //     console.log('подивсь і йди');
// //
// // } else if (color.toLocaleLowerCase() === 'yellow' && !isRoadClear) {
// //     console.log('Трошки почекай');
// // } else {
// //     console.log('АВАРІЯ. Роби що хочеш');
// // }
//
// // switch (color.toLocaleLowerCase()) {
// //     case 'green':
// //         isRoadClear ? console.log('Green + true') : console.log('Green + false');
// //         break;
// //     case 'red':
// //         isRoadClear ? console.log('Red + true') : console.log('REd + false');
// //         break;
// //     case 'yellow':
// //         isRoadClear ? console.log('yellow + true') : console.log('yellow + false');
// //         break;
// //     default:
// //         console.log('DEFAULT');
// //         break;
// // }
//
//
// if (color.toLocaleLowerCase() === 'green') {
//     const isRoadClear = confirm('isRoadClear');
//     isRoadClear ? console.log('Green + true') : console.log('Green + false');
//
// } else if (color.toLocaleLowerCase() === 'red') {
//
//     const isRoadClear = confirm('isRoadClear');
//     isRoadClear ? console.log('RED + true') : console.log('RED + false');
//
// } else if (color.toLocaleLowerCase() === 'yellow') {
//     const isRoadClear = confirm('isRoadClear');
//     isRoadClear ? console.log('yellow + true') : console.log('yellow + false');
//
// } else {
//     console.log('ELSE');
// }
//
//
//
//
//
//
//


function DataBase(name, password) {

    let instance;

    function CreateConnction() {
        console.log(`New connect with ${name} and ${password}`)
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = new CreateConnction();
            }
            return instance;
        }
    }
}


let db = new DataBase('Nastya', 12345);

db.getInstance();
db.getInstance();




let arr = [
    {name: 'Vaktor', id: 9},
    {name: 'Ibessa', id: 2},
    {name: 'Ncstya', id: 3},
    {name: 'Sdrgey', id: 7}
];

let sortedArray = arr.sort((a, b) => {
    let secondLiterA = a.name[1];
    let secondLiterB = b.name[1];

    if (secondLiterA > secondLiterB) {
        return -1;
    }
    if (secondLiterB > secondLiterA) {
        return 1
    }
    return 0;
});

// console.log(arr);
console.log(sortedArray);
console.log('_____________________');


arr.forEach((el, i) => {
    if (i > 1) {
        return
    }
    console.log(el);
});


let obj = {name: 'Viktor', age: 23};



function asyHello() {
    console.log(this.name + ' HELLO')
}


asyHello.call(obj)
