// let arr = [3, 5454, 2, '5', 6534, 36, 6, 23, 5, 5, 3, 1, 9, 5, 3, 5345, 6252, 7, 56785, 45, 345, 35];

// arr.forEach(function (value) {
//     console.log(value + 22);
// });
//
// let filtredArr = arr.filter(function (value, index) {
//
//     if (index % 2 === 0) {
//         return true
//     }
//
//     // return (index % 2 === 0)
// });
//
// console.log(filtredArr);
// TODO defdfsmkdfdfl

// let objArr = [
//     {name: 'Viktor', age: 23, car: false},
//     {name: 'Dima', age: 20, car: false},
//     {name: 'Igor', age: 18, car: true},
//     {name: 'Nadiyka', age: 45, car: false},
//     {name: 'Anton', age: 15, car: true}
// ]

// let mappedArr = objArr.map(function (user) {
//     return {
//         name: user.name,
//         age: user.age
//     }
// })
//
// console.log(mappedArr);
// let narr = arr.concat(objArr);
//
// arr.push(objArr)
// console.log(narr);
// console.log(arr);


// let isTrue = arr.every(function (number) {
//     return (typeof number === 'number')
// })
//
// let isSome = objArr.some(function (element) {
//     return element.car
// })
//
// // console.log(isTrue);
// console.log(isSome);
//

// let userWithCar = objArr.find(function (user) {
//     return user.car
// })
// console.log(userWithCar);
//
//
// let flatArr = [73735, ['Str', false, [7,9,[1]], [9,0]], 22, 'Dima'];
//
// let res = flatArr.flat(3);
//
// console.log(res);


// let arr222 = arr.lastIndexOf(9, 4);
//
// console.log(arr.length);
//
// console.log(arr222);


//
// let sortedArr = objArr.sort(function (el1, el2) {
//     // return el1.age - el2.age
//
//     if (el1.name > el2.name) {
//         return 1
//     }
//
//     if (el1.name.length < el2.name.length) {
//         return -1
//     }
//
//     return 0
// });
//
// console.log(sortedArr);
let objArr = [
    {name: 'Viktor', age: 23, car: false},
    {name: 'Dima', age: 20, car: false},
    {name: 'Igor', age: 18, car: true},
    {name: 'Nadiyka', age: 45, car: false},
    {name: 'Anton', age: 15, car: true}
]
//
// let redVal = objArr.reduce(function (prevVal, currVal) {
//     console.log(prevVal);
//     console.log(currVal.age);
//     console.log('_______________');
//     return prevVal + currVal.age;
// }, 0);
//
// console.log('****************');
// console.log(redVal);
// console.log('****************');

// let s = arr.slice(6, 9)
//
// console.log(s);
// console.log(arr);
let arr = [3, 5, 2, 5, 1];
// let spliced = arr.splice(1, 1, [2, 5, 7]);
// console.log(spliced);
// console.log(arr);

arr = arr.map(function (value) {
    if (value === 5) {
        value = 0
    }
    return value
});

console.log(arr);


let fa = arr.filter(function (value) {
    return value === 0
})

console.log(fa);
