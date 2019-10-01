let kar = {
    name: 'Karina',
    age: 20,
    car: false,
    smoking: false,
    skills: ['JS', 'C', 'React', 'Node']
};

let age = 33;
let name = 'Dima';
let smoking = true;

const {name: karyName, age: karyAge, ...oth} = kar;

console.log(karyName);
console.log(karyAge);
console.log(oth);


let students = ['Mykola', 'Iryna', 'Roman', 'Oksana', 'Pavlo'];

let M = students[0];
let I = students[1];
let R = students[2];

let [m2,, r2, ...fdsssdfsfdsdf] = students;

let someObj = {...kar, phone: 'iPhone'};

console.log(kar);
