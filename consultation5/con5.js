// // // let a = 0;
// // //
// // // let b = a++;
// // //
// // // console.log(a);
// // // console.log(b);
// //
// //
// // // Взять библиотечный класс Array и добавить ему новый метод
// // // который
// // // - выводит наименьший числовой элемент массива
// // // - выводит наименьший по размеру строчный элемент массива
// // // - выводит только объекты у которых присутствует поле id
// // // Создаем свои методы map, filter, foreach для класса Array,
// // //     добовляя их через prototype
// //
// // //
// // // let arr = [22, 4, [3, 5, 1], 5, 42, 2, 4];
// // // let anotherArr = [44, 4, 534, 43543, 42, 3, 5345];
// // // let arrObj = [
// // //     {name: 'Viktor'},
// // //     {name: 'Ira', id: 1},
// // //     {name: 'Katka'},
// // //     {name: 'Andriy', test: 4},
// // //     {name: 'Ivan', id: 3},
// // //     {name: 'Vika', id: 2},
// // // ];
// // // let strArr = ['Car', "Notebook", 'Router', 'Mouse', 'Me'];
// // // //
// // // // console.log(Array.isArray(arr));
// // //
// // // // Array.prototype.findMin = function () {
// // // //     console.log(Math.min(...this));
// // // // }
// // // // Array.prototype.findMin = function() {
// // // //
// // // //     let min = this[0];
// // // //
// // // //     for (let i = 1; i < this.length; i++) {
// // // //         if (this[i] < min) {
// // // //             min = this[i]
// // // //         }
// // // //     }
// // // // }
// // // //
// // // // anotherArr.findMin();
// // // //
// // // //
// // // // Array.prototype.minL = function () {
// // // //     let [minLenWord] = this;
// // // //
// // // //     for (let str of this) {
// // // //         if (minLenWord.length > str.length) {
// // // //             minLenWord = str;
// // // //         }
// // // //     }
// // // //
// // // //     console.log(minLenWord);
// // // // }
// // // //
// // // // strArr.minL();
// // // //
// // // //
// // // // Array.prototype.minL = function () {
// // // //
// // // // }
// // // //
// // // // Array.prototype.stringer = function (sting) {
// // // //     let smoler = sting.split(' ');
// // // //
// // // //     let smolerWord = smoler.sort((a, b) => {
// // // //         return a.length - b.length;
// // // //     });
// // // //     console.log(smolerWord[0]);
// // // // };
// // // // Array.prototype.stringer = sting => sting.split(' ').sort((a, b) => a.length - b.length)[0]
// // // //
// // // // let str = "Hello word! My name si Json Stathem!";
// // // //
// // // // arr.stringer(str);
// // //
// // // Array.prototype.findWithId = function () {
// // //     return this.filter(value => value.hasOwnProperty('test'))
// // // };
// // //
// // // console.log(arrObj.findWithId());
// // //
// // // // function fib(n) {
// // // //     let prev = 0, next = 1;
// // // //
// // // //     for (let i = 0; i < n; i++) {
// // // //         next = prev + next;
// // // //         prev = next - prev;
// // // //         console.log(next);
// // // //     }
// // // // }
// // // //
// // // // fib(8);
// // // // SPREAD
// // // //
// // // // let [f, s, th, ...another] = arr;
// // // // console.log(f);
// // // // console.log(s);
// // // // console.log(th);
// // // // console.log(another);
// // // //
// // // // let [...copy] = arr;
// // // //
// // // // console.log(copy);
// // // //
// // // // copy[2] = 88888888888
// // // // console.log(copy);
// // //
// // // // console.log(arr);
// // //
// // //
// // // let arrTOF = [1, 2, 4, 5, 6];
// // //
// // // for (let key in arrTOF) {
// // //     console.log(key);
// // // }
// // //
// // // console.log(arrTOF.hasOwnProperty('5'));
// //
// //
// // function f() {
// //     console.log(arguments);
// //     console.log(arguments.hasOwnProperty(2));
// // }
// //
// // f('EARTH', 'HELLO', 3, 'Roman', 'Me', false)
//
//
//
//
// class User {
//     constructor(name, age, car) {
//         this.name = name;
//         this.age = age;
//         this.car = car;
//     }
//
//     greet() {
//         console.log(`${this.name} say Hello to u`);
//     }
//
//     logInfo() {
//         console.log(this);
//     }
//
// }
//
// class Developer extends User {
//     constructor(name, age, car, skill) {
//         super(name, age, car);
//         this.skill = skill;
//     }
//
//     greet() {
//         console.log('Developer doesn\'t say hello to anybody')
//     }
// }
//
//
// let Viktor = new User('Viktor', 23, false);
// let Oleg = new User('Oleg', 21, true);
//
// let Oksana = new Developer('Oksana', 20, true, 'JS');
// // console.log(Oksana);
// //
// // console.log(Viktor);
// // console.log(Oleg);
//
// console.log('______');
// Viktor.greet();
// Oleg.greet();
// Oksana.greet();
// console.log('______');
//
//
// Oksana.logInfo()
//
//
// let word = 'loren gray';
// let newWord = word.split('');
//
//
// for (let i = 0; i < word.length; i++) {
//
//     let druck = new Promise(resolve => {
//         setTimeout(() => {
//             resolve(word[i]);
//         }, 1000)
//     });
//
//     druck.then(value => {
//         console.log(value, i);
//     });
//
//     console.log(i, word[i]);
// }



let mySuperWord = ' I love JS and other languages';

function printer(stingToPrint, i) {
    let rnd = parseInt(Math.random()*1000);

    setTimeout(() => {
        let sliced = stingToPrint.slice(0,i);

        console.clear();
        console.log(sliced);

        if (i < stingToPrint.length)  {
            printer(stingToPrint, ++i)
        }
    }, rnd)
    // for (let i = 1; i <= stingToPrint.length; i++) {
    //     let sliced = stingToPrint.slice(0,i)
    //     console.log(sliced);
    // }
}

printer(mySuperWord, 1);
