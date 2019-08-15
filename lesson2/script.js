let a = 25;

console.time('If');

if (a > 10) {
    console.log('A is biggest than 10');

    if (a > 20) {
        console.log('A is biggest than 20');
    }
} else {
    console.log(22);
}

console.timeEnd('If');

console.log('I am here');


// let day = '20';
// let month = 'winter';
//
// if (day == 20 && month === 'winter') {
//     console.log('new Year')
// }


let login = 'Dima';
let password = '12345';
let role = 'user';

//      true      && ( true || false ) -> true && true -> true
if (login === 'Dima' && (password === '12345' || role === 'admin')) {
    console.log('login');
}


/**
 * switch
 */



let poraRoku = 'utulus';


switch (poraRoku) {
    case 'spring' :
        console.log('Summer is coming');
        break;
    case 'winter' :
        console.log('Lets drink tea');
        break;
    case 'summer' :
        console.log('Go to Cyprus');
        break;
    default:
        console.log('Another planet');
        break;
}


if (poraRoku === 'winter') {
    console.log('SNOWING')
} else {
    console.log('swimming')
}

(poraRoku === 'winter') ? console.log('SNOWING') : console.log('swimming');

let x = 1;
let b = (x === 5) ? 'one' : (x > 5) ? 'two' : 'three';
console.log(b);

/**
 * Loops
 */


console.time('loop');
for (let i = -10; i <= 10; i++) {
    console.log(i);
    console.log('____________');
    for (let x = 10; x > 0; x--) {
        if (x === 5) {
            console.log('WINNER')
        }
        console.log(x);
    }
}
console.timeEnd('loop');


let z = 0;

while (z < 15) {
    console.log(z);
    z++; // z = z+1
}


if (x > 5) {
    console.log(2);
}


// 789, 123, 678, 936 (* / - + %)
// 987


//1. Якщо змінна a дорівнює нулю, то виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте роботу скрипта при a, що дорівнює 1, 0, -3
//
// 2. В змінної min лежить число від 0 до 59.
// Визначте в яку чверть години потрапляє це число (в першу, другу, третю або четверту).
//
// 3.Якщо змінна a дорівнює або менше 1, а змінна b більше або дорівнює 3,
// то виведіть суму цих змінних,
// інакше виведіть їх різницю (результат віднімання).
//  Перевірте роботу скрипта при a і b, що дорівнює 1 і 3, 0 і 6, 3 і 5.
//
// 4. В змінної month лежить якесь число з інтервалу від 1 до 12.
// Визначте в яку пору року потрапляє цей місяць (зима, літо, весна, осінь).
//
// 5. switch
// Переменная num может принимать 4 значения: 1, 2, 3 или 4.
// Если она имеет значение '1', то в переменную result запишем 'зима',
// если имеет значение '2' – 'весна' и так далее.
//
// 6. Переменная num может принимать 12 значений: 1, 2 ..... 12.
// Если она имеет значение '1', то в переменную result запишем 'январь',
// если имеет значение '2' – 'февраль' и так далее.

console.log('__________');

// let firstTaks = 0;
//
// if (firstTaks === 0) {
//     console.log('OK');
// } else {
//     console.log('NE OK');
// }
//
// (firstTaks === 0) ? console.log('OK') : console.log('NE OK');

//
// let secondTask = parseInt(Math.random() * 59);
//
// console.log(secondTask);
//
// if (secondTask >= 0 && secondTask <= 15) {
//     console.log('1');
// } else if (secondTask >= 16 && secondTask <= 30) {
//     console.log('2');
// } else if (secondTask >= 31 && secondTask <= 45) {
//     console.log('3');
// } else if (secondTask >= 46 && secondTask <= 59) {
//     console.log('4');
// } else {
//     console.log('BAD');
// }

// let zz = 1;
// let bzz = 2;
//
// console.time('IF')
// if (zz <= 1 && bzz >= 3) {
//     console.log(zz + bzz)
// } else {
//     console.log(zz - bzz)
// }
// console.timeEnd('IF')
//
// console.time('ELSE');
// zz <= 1 && bzz >= 3 ? console.log(zz + bzz) : console.log(zz - bzz)
//
// console.timeEnd('ELSE')

// //
// let month = Math.random() * (12 - 1) + 1;
//
// console.log(month);
// month = month.toFixed(2)
// console.log(month);
//
// if (month >= 1 && month <= 2 || month === 12) {
//     console.log('Winter')
// } else if (month >= 3 && month <= 5) {
//     console.log('Spring')
// } else if (month >= 6 && month <= 8) {
//     console.log('Summer')
// } else if (month >= 9 && month <= 11) {
//     console.log('Fall')
// } else {
//     console.log('ANOTHER PLANET')
// }

// let season = parseInt(Math.random() * (4 - 1) + 1);
// let result = '';
// console.log(season);
//
// switch (season) {
//     case 1:
//         result = 'winter';
//         break;
//     case 2 :
//         result = 'spring';
//         break;
//     case 3:
//         result = 'summer';
//         break;
//     case 4:
//         result = 'fall';
//         break;
//     default:
//         result = 'BAD NUMBER';
//         break;
// }
//
// console.log(result);
