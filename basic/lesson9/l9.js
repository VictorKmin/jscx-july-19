// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     // Не добре
//     // this.sayHello = () => {
//     //     console.log(`Hello. My name is ${this.name}`)
//     // }
// }
//
// User.prototype.sayHello = function() {
//     console.log(`Hello. My name is ${this.name}`)
// };
//
//
// function Developer(name, age, skill) {
//     this.name = name;
//     this.age = age;
//     this.skill = skill;
// }
//
// // Developer.prototype.__proto__ = User.prototype;
// // Developer.prototype = User.prototype;
// Developer.prototype = Object.create(User.prototype);
//
// let Tanya = new Developer('Tanya', 22, '.NET');
//
// Developer.prototype.sayHello = function() {
//     console.log(22);
// }
//
// Tanya.sayHello();
//
// let Viktor = new User('Viktor', 23);
//
// Viktor.sayHello();
//
//
// function Hamster(name) {
//     this.name = name;
//     // this.stomach = [];
// }
//
// Hamster.prototype.findFood = function (food) {
//     this.stomach.push(food);
// }
//
// Hamster.prototype.stomach = [];
//
// let ravlik = new Hamster('Ravlik');
// let myshka = new Hamster('Myshka');
//
// console.log(ravlik.stomach);
// console.log(myshka.stomach);
//
// console.log('_____________________');
//
// ravlik.findFood('Chery');
// ravlik.findFood('Banana');
//
// console.log(ravlik.stomach);
// console.log(myshka.stomach);


function sayHello() {
    console.log(`Hello. My name is ${this.name} and my age is ${this.age}`);
    console.log(this);
    console.log('_________')
}

let Viktor = {
    name: 'Viktor',
    age: 23,
};
let Diktor = {
    car: 'Diktor'
};

// sayHello.call(Viktor);
// sayHello.call(Viktor);
// sayHello.call(Viktor);
// sayHello.call(Viktor);
// sayHello.call(Viktor);
// sayHello.call(Diktor);

sayHello();

let funcUser = sayHello.bind(Viktor);
let funcDiktor = sayHello.bind(Diktor);

// funcUser()
// funcUser()
// funcUser()
// funcUser()
// funcDiktor()
// funcDiktor()
// funcDiktor()
// funcDiktor()
// funcDiktor()

//
// // CALL
// let worker1 = {
//     name: 'Anna',
//     position: 'PM',
//     money: 1000
// };
// let worker2 = {
//     name: 'Dima',
//     position: 'Student',
//     money: 0
// };
//
// function levelUP(newPosition, newMoney) {
//     this.position = newPosition;
//     this.money += newMoney
//     console.log(this)
// }
//
// // console.log(worker1);
// // console.log(worker2);
// // console.log('________________');
// //
// // levelUP.call(worker1, 'Senior', -200);
// // levelUP.call(worker2, 'Trainee', 300);
// // //
// // console.log(worker1);
// // console.log(worker2);
// //
// // // APPLY
// // // Приймає в себе масив значень. Потім їх розкриває
// //
// // console.log(worker1);
// // console.log(worker2);
// // console.log('________________');
// //
// // levelUP.apply(worker1, ['CEO' , 500])
// // levelUP.apply(worker2, ['Jun' , 100])
// //
// // console.log(worker1);
// // console.log(worker2);
//
// // // BIND
// // let newWorker1 = levelUP.bind(worker1, 'CEO', 2000);
// // let newWorker2 = levelUP.bind(worker2, 'MID', 1000);
// //
// // console.log(worker1);
// // console.log(worker2);
// //
// // newWorker1()
// // newWorker2()
