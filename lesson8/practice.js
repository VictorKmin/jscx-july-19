class User {
    constructor(name, surname, bday, work, expr, company, hobby) {
        this.name = name;
        this.surname = surname;
        this.bday = bday;
        this.work = work;
        this.expr = expr;
        this.company = company;
        this.hobby = hobby;
    }
}

let Adam = new User('Adam', 'Smoth', 1988, 'employed', '4 years', 'GoodDt', 'skiing');
let Vadym = new User('Vadym', 'Anetyu', 1998, 'student', '0 years', 'none', 'computer games');
let Vivienne = new User('Vivienne', 'Beth', 1995, 'employed', '5 years', 'Boosta', 'reading books');
let Casey = new User('Casey', 'Breuth', 1992, 'employed', '1 year', 'GoHigh', 'hiking');
let Tom = new User('Tom', 'Cradd', 1996, 'employed', '3 years', 'MakeGood', 'crafts');
let Anna = new User('Anna', 'Lolyn', 1994, 'self-employed', '2 years', 'Crafts', 'handmade');
let Mark = new User('Mark', 'Bytak', 1993, 'employed', '3 years', 'FirmaGT', 'skiing');
let Alex = new User('Alex', 'Backen', undefined, 'employed', '8 years', 'GoHigh', 'hiking');
let Leslie = new User('Leslie', 'Okays', 1983, 'self-employed', '4 years', 'ScienceET', 'computer games');
let Sam = new User('Sam', 'Kratgb', 1998, 'student', '0 years', 'none', '');


let userArr = [Adam, Vadym, Vivienne, Casey, Tom, Anna, Alex, Leslie, Sam, Mark,];


function sorter(usersArr, field, way) {

    if (way.toUpperCase() === 'DESC') {
        usersArr = usersArr.sort((a, b) => {
            let fUserValue = a[field];
            let sUserValue = b[field];

            if (fUserValue > sUserValue) return -1;
            if (fUserValue < sUserValue) return 1;
            return 0
        })
    } else {
        usersArr = usersArr.sort((a, b) => {
            if (a[field] > b[field]) return 1;
            if (a[field] < b[field]) return -1;
            return 0
        })
    }


    console.log(usersArr);
}


sorter(userArr, 'name', 'fdsfds');


function fitrator(usersArr, field, value, way) {

    usersArr.filter(user => user[field] > value)

}
