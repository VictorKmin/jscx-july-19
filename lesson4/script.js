// // let x = 0;
// //
// // {
// //     console.log(x);
// //     let z = 22;
// // }
// //
// // console.log(z);
// // let i = 0;
// //
// // let b = ++i;
// //
// // console.log(i);
// // console.log(b);
// //
// // let x = NaN;
// //
// // let smtToBool = !!x;
// // console.log(smtToBool)
// //
// //
// // let id = 'TEST';
// //
// // let isNumber = +id || 0;
// //
// // console.log(isNumber);
// //
// //
// // let x = 12;
// //
// // // const x = 22
// //
// // console.log(x)
// /**
//  * -primities
//  * number
//  * strung
//  * boolean
//  * undefined
//  *
//  * -reference
//  * object
//  * null
//  * Symbol
//  */
// //
// // let a = 22;
// // let b = a;
// //
// // b = 90;
// // console.log(a);
// // console.log(b);
// //
// //
// // let obj = {a: 20, b: 999};
// //
// // let antObj = obj;
// //
// // antObj.a = 17;
// // obj.b = 6;
// //
// // console.log(antObj);
// // console.log(obj);
// //
// //
// // let arr = [1,2,3,4,5];
// //
// // let refArr = arr;
// //
// // refArr[0] = 55;
// //
// // arr[2] = 99999;
// //
// // console.log(refArr);
// // console.log(arr);
// //
// //
// // let x = undefined;
// // let y = x;
// //
// // y = 17;
// // console.log(y);
// // console.log(x);
//
//
// function sumator(yyy = 1, b = 20) {
//     if (typeof yyy !== 'number' || typeof b !== 'number') {
//         throw new Error('Something is not number')
//     }
//
//     // console.log(yyy + b);
//
//     for (let i = 0; i < arguments.length; i++) {
//         const argument = arguments[i];
//         console.log(argument);
//     }
//
//     let i = 0;
//
//     while (i < arguments.length) {
//         console.log(arguments[i]);
//         i++
//     }
// }
//
//
// sumator(99, 2);
// // sumator(21, 32);
//
// console.log('))))))))))))');
//
// // let array = {name: 'Viktor', age: 23, car: false};
//
// // let keys = Object.keys(array);
// // let values = Object.values(array);
//
// // console.log(keys);
// // console.log(values);
//
// let array = [1,2,4,55,3,4,4234,5345,34534];
//
// for (const arrayElement of array) {
//     console.log(arrayElement);
// }
//
//
//


function sum(a, b) {
    let result = a + b;
    console.log(result);
    return result;
    // console.log(22);
    // return 'xxx'
    // return a + b;
}

let x = sum(2, 5);

console.log(x);

console.log(x / 2);

