// // fetch
// // Promise
// // async/await
//
// //
// // function f(a, b, cb) {
// //     let res = a + b;
// //     setTimeout(() => {
// //         return cb(res)
// //     }, 1000)
// // }
// //
// // f(5, 10, result => {
// //     console.log(result);
// // });
//
//
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('FDFSDF')
//     }, 1000)
// });
//
// promise
//     .then(value => {
//         console.log(value);
//     })
//
//
// function f(a, b) {
//     return new Promise((resolve, reject) => {
//         let result = a + b;
//         // result < 15 ? reject('ERROR') : resolve(result)
//
//         if (result < 15) {
//             reject('Result is less than 15')
//         } else {
//             resolve(result)
//         }
//     })
// }
//
// f(10, 10)
//     .then(value => {
//         console.log(value);
//         return value + 100
//     })
//     .then(value => {
//         console.log(value);
//         return value + 5
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(reason => {
//         console.error(reason);
//     });
// function ascynchonus() {
//     return new Promise(resolve => {
//         setTimeout(()=> {
//             resolve(22)
//         },2000)
//     })
// }
//
// async function asaw() {
//     console.log(1);
//
//     let x = await ascynchonus();
//     console.log(x);
//
//     console.log(3);
// }
//
// asaw();

