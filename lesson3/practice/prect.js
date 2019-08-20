// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу


let arr = [2,17,13,6,22,31,45,66,100,-18];

let i = 0;

while (i < arr.length) {

    if (i % 2 !== 0) {
        console.log(arr[i]);
    }
    i++
}

console.log('__________');

for (let j = 0; j < arr.length; j++) {

    if (j % 2 === 1) {
        console.log(arr[j]);
    }

}

console.log('__________');

const length = arr.length;

for (let k = 0; k < length; k++) {
    const el = arr[k];
    console.log(el);
    if (el % 2 === 0) {
        console.log(el);
    }
}


console.log('__________');


for (let j = 0; j < length; j++) {
    let el = arr[j];

    if (el % 3 === 0) {
        arr[j] = 'okten'
    }
}



console.log('__________');

//[2,17,13,31,22,31,45,66,100,-18]

console.log(arr.length);
for (let j = arr.length-1; j >= 0; j--) {
    console.log(arr[j]);
}


let arr2 = [];

while (arr2.length < 50) {
    let randomNumber = parseInt(Math.random()*999)
    if (randomNumber % 2 === 0) {
        arr2.push(randomNumber);
    }
}

console.log(arr2);
console.log(arr2.length);
