// // // 3!
// // //     1*2*3
// // // 6!
// // //     1*2*3*4*5*6
// // //
// // // 1
// // // 2  // 1+1
// // // 3  // 1+2
// // // 5  // 2+3
// // // 8  // 5+3
// // // 13
// //
// //
// // console.time('MY')
// // function factorial(number, cb) {
// //     let result = 1;
// //
// //     if (number > 0) {
// //         result = number * cb(number - 1, cb);
// //     }
// //     return result
// // }
// // console.timeEnd('MY')
// //
// // console.time('SERG')
// //
// // function fakt(num, callback) {
// //     return (num !== 1) ? (num * callback(num - 1, callback)) : 1
// // }
// // console.timeEnd('SERG')
// //
// // //
// // // console.log(fakt(5, fakt));
// //
// //
// // // function factorial(num, callback) {
// // //
// // //     if (num !== 1){
// // //
// // //         console.log('callback ' + num);
// // //
// // //         return num * callback(num-1, callback)
// // //     } else {
// // //         return 1;
// // //     }
// // //
// // // }
// // // let sum = factorial(5, factorial);
//
// //
// // function fibon(number) {
// //     let fibonachiCurr = 1;
// //     let fibonachiPrev = 1;
// //     let costil = 0;
// //
// //     for (let i = 0; i < number; i++) {
// //         fibonachiCurr = costil + fibonachiPrev;
// //         costil = fibonachiPrev;
// //         fibonachiPrev = fibonachiCurr;
// //
// //         console.log(fibonachiCurr);
// //     }
// // }
// //
// // fibon(99);
//
//
// function fibonacci(max) {
//     let result = [0, 1];
//
//     for (let i = 1; result[i] < max; i++) {
//         result.push(result[i] + result[i - 1]);
//     }
//
//     console.log(result);
//
// }
// fibonacci(10);

//
// let n = prompt('Fibonacci Calculator');
//
// function fibonacciCalc(n) {
//     let a = 1,
//         b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
//
// alert(fibonacciCalc(n));


let arr = [1, {name: "Vasya", car: "true"}, null, 3, [5, [2, [2,5,5,['HELOO', 'CHATIK'],3,5]], -1, 87], 9];

function recursator3000(arrayToOpen) {
    if (!Array.isArray(arrayToOpen)) return;

    arrayToOpen.forEach( value => {

        if (Array.isArray(value)) {
            recursator3000(value);
            return; // STOP ITERATOR
        }

        if (typeof value === 'object' && value !== null) {
            let arrOfValuer = Object.values(value);
            recursator3000(arrOfValuer);
            return; // STOP ITERATOR
        }

        console.log(value);
    })
}

recursator3000(arr);
