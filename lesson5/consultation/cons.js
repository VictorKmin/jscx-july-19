// // // створити пустий масив та :
// // //     - заповнити його 50 парними числами за допомоги циклу.
// // // - заповнити його 50 непарними числами за допомоги циклу.
// // //     з парними вийшло
// // //
// // // let arr = [
// // //     49, 59, 53, 37, 29, 99,  1, 55, 91, 11,  1,
// // //     1,  3, 89, 57, 93,  3, 13, 83, 83, 67, 37,
// // //     21, 85, 35, 23, 13, 69, 75,  7, 19,  5, 97,
// // //     21, 81, 87, 61, 75, 63, 73, 61, 65, 89, 17,
// // //     3,  7,  5, 45, 87, 99
// // // ];
// // //
// // // for (let i = 0; i < arr.length; i++) {
// // //     if (i % 2 !== 0) {
// // //         console.log(arr[i] + '  ' + i);
// // //     }
// // // }
// // // arr.forEach((value, index) => {
// // //     if (index % 2 === 0) {
// // //         console.log(value);
// // //     }
// // // })
// //
// //
// // //
// // // while (arr.length < 50) {
// // //     let random = parseInt(Math.random() * 100);
// // //     if (random % 2 !== 0) {
// // //         arr.push(random)
// // //     }
// // // }
// // //
// // // console.log(arr);
// // //
// // //
// // // [1,0,6,0,3] => [1,6,3,0,0]
// // // [0,1,2,3,4] => [1,2,3,4,0]
// // // [0,0,1,0]   => [1,0,0,0]
// //
// //
// // let arrToChange = [1,0,6,0,3];
// // let normalizedArr = [];
// //
// // for (let i = 0; i < arrToChange.length; i++) {
// //     if (arrToChange[i] === 0) {
// //         normalizedArr.push(arrToChange[i])
// //     }
// // }
// //
// // for (let i = arrToChange.length - 1; i >= 0; i--) {
// //     if (arrToChange[i] !== 0) {
// //         normalizedArr.unshift(arrToChange[i])
// //     }
// // }
// //
// // console.log(normalizedArr);
// // console.log(arrToChange);
// // let flatArr = [73735, ['Str', false, [738], [90]], 22, 'Dima'];
// //
// // let res = flatArr.flat(1);
// // console.log(res);
// //
// //
// // function sumator(array) {
// //     if (!Array.isArray(array)) throw new Error('NOT ARRAY');
// //
// //     let sum = 0;
// //
// //     for (let element of array) {
// //         sum  = sum + element;
// //     }
// //
// //     return sum;
// // }
// //
// // let xxx = sumator([4,6,5,9,1,7,3]);
// // console.log(xxx);
//
//
// // let user = {
// //     name: 'Viktro',
// //     age: 23,
// //     email: 'victor@socilaki.net',
// //     password: "12345",
// //     car: false,
// //     apartment: true,
// //     house: false,
// //     smoking: false,
// //     company: "ELEKS"
// // }
// //
// // // let age = user.age;
// // // let name = user.name;
// // // let company = user.company;
// // // let apartment = user.apartment;
// // // let car = user.car;
// //
// // const name = 'DIMAS';
// //
// // let {company, age, name: userName, apartment, car} = user;
// // console.log(company);
// // console.log(name);
// // console.log(userName);
//
//
// let arr = [
//     'Hello', 59, 'World', 37, 'TEST', 99
// ];
//
//
// // let [test, num, ...spread] = arr;
// //
// // console.log(test);
// // console.log(num);
// // console.log(spread);
//
// function f() {
//     let r = Object.values(arguments)
//     console.log(...r);
// }
//
// f(4,5345,346,456,4576,5);


let name = 'Viktro';
let age = 23;


let user = [name, age];

console.log(user);
