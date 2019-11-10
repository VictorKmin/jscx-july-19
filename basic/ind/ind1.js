// // let arrToChange = [1, 0, 6, 0, 3];
// //
// // let normalizedArr = [];
// //
// // for (let i = 0; i < arrToChange.length; i++) {
// //     if (arrToChange[i] === 0) {
// //         normalizedArr.push(arrToChange[i])
// //     }
// // }
// //
// // for (let i = arrToChange.length - 1; i >= 0; i--) {
// //     console.log(i + ' INDEX');
// //     console.log(arrToChange[i]);
// //     if (arrToChange[i] !== 0) {
// //         normalizedArr.unshift(arrToChange[i])
// //
// //     }
// // }
// //
// // console.log(normalizedArr);
//
//
// // console.log(2);
// //
// // setTimeout(() => {
// //     console.log(1);
// // }, 0);
// //
// // console.log(0);
//
//
//
// // function cleanRoom(isDone) {
// //     setTimeout(()=> {
// //         if (isDone) {
// //             cb('OK')
// //         }
// //         else {
// //             cb(null)
// //         }
// //     },2000)
// // }
// //
// // cleanRoom(false, function (something) {
// //     console.log(something);
// // });
// //
// // cleanRoom(true, (result)=> {
// //     console.log(result);
// // })
//
//
//
//
// function time() {
//     setTimeout(()=> {
//         console.log('DONE');
//     }, 2000)
// }
//
// time();
//
//
//
//
//
// function clc(a, b, cb) {
//     const res = a + b;
//
//     setTimeout(()=> {
//         cb(res)
//     }, 999)
// }
//
// clc(10,5, logger);
//
//
// function logger(valueToLog) {
//     console.log(valueToLog);
// }
//
//
// console.log(logger.toString());

// function littleCalc(a, b, cb) {
//     cb('-', a, b)
// }
//
// littleCalc(10,5 , function (action, a ,b) {
//     if (action === '+') {
//         console.log(a + b);
//     }
//     if (action === '-') {
//         console.log(a - b);
//     }
// });

// function lC(a, b, cb) {
//     let action = cb('+');
//
//     if (action === '+') {
//         console.log(a + b);
//     } else {
//         console.log(a - b);
//     }
// }
//
// lC(10, 5, (action) => {
//     return action
// })
//
//
// let arrToSort = [1, 2, 3, 6, 9, 0, 5, 44, 545, 3];
//
// function sorter(arr, cb) {
//     cb('+')
// }
//
// sorter(arrToSort, function (action) {
//     if (action === '+') {
//         arrToSort = arrToSort.sort((a, b) => a - b)
//     }
//
//     if (action === '-') {
//         arrToSort = arrToSort.sort((a, b) => b - a)
//     }
//
//     console.log(arrToSort);
// })
//
//
// let arr = [1, {name: "Vasya", car: "true"}, null, 3, [5, [2, [2,5,5,['HELOO', 'CHATIK'],3,5]], -1, 87], 9];
//
// console.log(arr.flat(3));



//
// function counter() {
//     let a = 0;
//
//     return {
//         increment: () => {
//             a++;
//             console.log(a);
//         }
//     }
// }
//
// let x = counter();
//
// counter().
//
// x.increment();
// x.increment();
// x.increment();
// x.increment()




function createError() {
    throw new Error('SOME ERROR')
}


try {
    createError();
} catch (e) {
    console.log(e.message);
}
