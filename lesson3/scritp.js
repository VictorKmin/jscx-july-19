// let str = 'STRING';
// let num = 23;
// let bool = true;
//
let arr = [7, 17, 12, 999, 86];
// // console.log(arr);
// //
// // let hello = arr[0];
// // console.log(hello);
//
//
let obj = {
    name: 'Viktor',
    age: 23,
    profession: {
        company: 'ELEKS',
        title: 'Middle JS'
    },
    projects: ['Spin']
};
console.log(obj.profession.company);
//
// console.log(obj.projects[1]);
//
//
// obj.car = 'Volvo';
// obj.profession.salary = 100;
//
// arr.push('DIMA');
//
// console.log(arr);
//
//
// console.log(obj.profession.salary);
//
// obj.profession.salary = null;
//
// delete obj.profession.salary;
//
// console.log(obj.profession);
//
// let keyFromServer = 'age';
//
// console.log(obj[keyFromServer]);
//
// console.log(obj['age']);
//
// console.log(obj.age);

// console.log(arr);
// arr.pop();
//
// let deletedValue = arr.pop();
// console.log('-=-=-=-=-=-=-');
// console.log(deletedValue);
// console.log('-=-=-=-=-=-=-');
//
// const del = arr.shift();
// arr.unshift('PRIVET');
//
// console.log(del);
//
//
// console.log(arr);
//
// let xxx = arr.pop();
//
// console.log(arr);
// console.log(xxx);
//
// arr.unshift(xxx);
//
// console.log(arr);

let users = [
    {name: 'Roman', age: 15},
    {name: 'Bogdan', age: 7},
    {name: 'Dima', age: 20},
    {name: 'Vitaliy', age: 3},
    {name: 'Karisha', age: 20}
];

//
for (let i = 0; i < users.length; i++) {

    if (users[i].age < 15) {
        console.log('BINGO');
        console.log(users[i]);
        console.log('__________');
    }
}

let i = 0;

let sum = 0;

while (i < users.length) {

    sum += users[i].age;

    i++;
}

console.log(sum);

let arrInArray = [[123, 456], [789]];

console.log(arrInArray[0][1]);


// FUNCTION

function loger() {
    console.log('I am a function');
    console.log('And I have super power');
    console.log('Piu piu');
}


let xxx = function () {
    console.log('_______________');
    console.log(22);
    console.log(3);
    console.log('_______________');
};

xxx();


loger();



function numberLoger(someNumber) {
    console.log(someNumber);
}

numberLoger(6789);
numberLoger('TRUE');
numberLoger(['hello', 'guys']);
