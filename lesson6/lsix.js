/**
 // closures ^
 // arrow functions ^ + anonymous ^
 // JSON ^
 //
 // callback
 // event loop
 // Recursion
 */
//
// // {
// //     let x = 10;
// // }
// //
// // console.log(x);
//
//
// function counter() {
//     let x = 0;
//
//     return function () {
//         x++;
//         console.log(x)
//     }
// }
//
// let xxx = counter();
//
// // console.log(xxx.toString());
//
// xxx();
// xxx();
// xxx();
// xxx();
// xxx();
//
// console.log('_____________');
// let zzz = counter();
//
// zzz();
// zzz();
//
// let yyy = counter();
//
//
// function derParol() {
//
//     let user = {
//         name: 'Nastya',
//         password: 'pa$$w0rd!',
//         age: 16
//     };
//
//     return {
//         getName: function () {
//             return user.name
//         },
//
//         getAge: function () {
//             return user.age
//         },
//
//         celebrate: function () {
//             user.age++
//         },
//
//         checkPassword: function (passwordToCheck) {
//
//             if (user.password !== passwordToCheck) {
//                 throw new Error('Passwords are not equals')
//             }
//
//             console.log(' ------ LOGGED ------ ')
//         },
//
//         changePassword: function (newPassword, oldPassword) {
//
//             if (user.password !== oldPassword) {
//                 throw new Error('WRONG OLD PASSWORD')
//             }
//
//             user.password = newPassword;
//         }
//     }
// }
//
// let Nastyona = derParol();
//
// console.log( Nastyona.getName() );
// console.log( Nastyona.getAge() );
//
// Nastyona.celebrate();
//
// console.log( Nastyona.getAge() );
//
// Nastyona.checkPassword('pa$$w0rd!');
//
// Nastyona.changePassword('12345', 'pa$$w0rd!');
//
// Nastyona.checkPassword('12345');


function user() {

    let user = {name: "Victor", password: '12345', age: 23, car: false};

    return {
        getName: () => {
            return user.name
        },

        getAge: () => {
            return user.age
        },

        celebrate: () => {
            user.age++
        },

        checkPassword: passwordToCheck => {

            if (user.password !== passwordToCheck) {
                throw new Error('Passwords are not equals')
            }

            console.log(' ------ LOGGED ------ ')
        },

        changePassword: (newPassword, oldPassword) => {

            if (user.password !== oldPassword) {
                throw new Error('WRONG OLD PASSWORD')
            }

            user.password = newPassword;
        },

        buyCar: car => {
            user.car = car;
        },

        getCar: () => {
            console.log(user.car);
        }
    }
}

let me = user();
me.buyCar({model: 'Volvo', year: 2008});

me.getCar();
me.getName();


let arr = [12, 4, 43, 535,];

arr = arr.filter(value => value > 25);

console.log(arr);


((number) => {

    console.log('HELLO WORLD ' + number);

})();

// XML
// JavaScript Object Notation

let Viktor = {name: "Victor", password: '12345', age: 23, car: () => { console.log('bip - bip'); }};

let jsoined = JSON.stringify(Viktor);

let pasred = JSON.parse(jsoined);

pasred.name = 'Vova';
pasred.age = 15;


console.log('*********************************');
console.log(Viktor);
console.log('*********************************');
console.log(pasred);
