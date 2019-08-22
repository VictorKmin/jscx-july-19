// створити методи які :
// 1. приймає три числа та виводить та повертає найменьше.
// 2. приймає три числа та виводить та повертає найбільше.
// 3. приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// 4. виводить масив
// 5. повертає найбільше число з масиву
// 6. повертає найменьше число з масиву
// 7. виводить масив, але напрямок вивденння(сходження\ спадання) визначається колбеком
// function firstTask(n1, n2, n3) {
//     const biggest = Math.max(n1, n2, n3);
//     console.log(biggest);
//
//     return biggest;
// }
// let res1 = firstTask(8, 1, 9999);
// console.log(res1 + ' FROM RETURN');
// function thirdTask() {
//     let values = Object.values(arguments);
//
//     let biggest = values[0];
//
//     for (let i = 1; i < values.length; i++) {
//         if (biggest < values[i]) {
//             biggest = values[i];
//         }
//     }
//     console.log(biggest);
// }
//
// thirdTask(1, 54, 43, 5, 3, 5435, 345, 34, 999999);\
// function fourthTask() {
//     console.log(Object.values(arguments))
// }
//
// fourthTask(1,543,543,3,654,63,43,4143,634,6)
// 8. приймає масив та число (i). та міняє місцями
// об`єкт який знаходиться в індексі "i" на "i+1"

function lastTask(array, i) {
    if (!Array.isArray(array) || typeof i !== 'number') {
        throw new Error('Bad request');
    }

    if (i < 0  || i > array.length -1) {
        throw new Error('I is not correct')
    }

    let valueToChange = array[i];

    array[i] = array[i+1];
    array[i+1] = valueToChange;


    console.log(array);
}

lastTask([5,534,65,67,646,7], 9999999);
