// // // Створити обєкт автомобіля з полями:
// // //     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// // //     Власник автомобіля теж має бути обєкт, у якого є поля
// // // Імя, вік, стаж водіння.
// // //     Створити не менше 7 та не більше 20 машинок.
// // //
// // //     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10%
// // // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// // //
// // // Для початку вкладіть всі наші створені автомобілі в масив cars.
// // //     Далі необхідно рати кожну другу машинку (цикл з кроком в 2),
// // //     та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// // //
// // // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років,
// // // але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації,
// // // що збільшить йому досвід на 1 рік.
// // //     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// //
// //
// // let cars = [
// //     {
// //         model: 'Seat Arona',
// //         enginePowerHP: 115,
// //         owner: {name: 'Yaroslav', age: 25, expYears: 2},
// //         price: 35000,
// //         year: '2018'
// //     },
// //     {
// //         model: 'Skoda Fabia',
// //         enginePowerHP: 80,
// //         owner: {name: 'Oleksandr', age: 25, expYears: 2},
// //         price: 5000,
// //         year: '2008'
// //     },
// //     {
// //         model: 'Fiat Doblo',
// //         enginePowerHP: 95,
// //         owner: {name: 'Oleg', age: 25, expYears: 6},
// //         price: 6500,
// //         year: '2007'
// //     },
// //     {
// //         model: 'Ford Transit',
// //         enginePowerHP: 90,
// //         owner: {name: 'Nazar', age: 26, expYears: 4},
// //         price: 2000, year: '2000'
// //     },
// //     {
// //         model: 'Mercedes E225',
// //         enginePowerHP: 170,
// //         owner: {name: 'Oleksiy', age: 21, expYears: 2},
// //         price: 3500,
// //         year: '2000'
// //     },
// //     {
// //         model: 'Lada 21011',
// //         enginePowerHP: 80,
// //         owner: {name: 'Yan', age: 24, expYears: 5},
// //         price: 1500,
// //         year: '1976'
// //     },
// //     {
// //         model: 'Seat Leon',
// //         enginePowerHP: 230,
// //         owner: {name: 'Bogdan', age: 31, expYears: 4},
// //         price: 8000,
// //         year: '2008'
// //     },
// //     {
// //         model: 'Honda Civic',
// //         enginePowerHP: 300,
// //         owner: {name: 'Artur', age: 24, expYears: 6},
// //         price: 10000,
// //         year: '2010'
// //     }
// // ];
// //
// //
// // let newOwners = [
// //     {name: 'Yan', age: 28, expYears: 15},
// //     {name: 'Igor', age: 73, expYears: 7},
// //     {name: 'Ira', age: 24, expYears: 5},
// //     {name: 'Ivan', age: 36, expYears: 9},
// //     {name: 'Viktor', age: 24, expYears: 4},
// //     {name: 'Vova', age: 85, expYears: 5},
// //     {name: 'Dima', age: 24, expYears: 5},
// //     {name: 'Nastya', age: 15, expYears: 2},
// //     {name: 'Petro', age: 24, expYears: 5},
// //     {name: 'Karina', age: 18, expYears: 3}
// // ];
// //
// //
// // for (let i = 0; i < cars.length; i += 2) {
// //     const randomDriverIndex = parseInt(Math.random() * newOwners.length - 1);
// //
// //     cars[i].enginePowerHP = cars[i].enginePowerHP * 1.05;
// //     cars[i].price = cars[i].price * 1.1;
// //
// //     cars[i].owner = newOwners[randomDriverIndex];
// //     newOwners.splice(randomDriverIndex, 1)
// // }
// //
// //
// // cars = cars.map(car => {
// //     if (car.owner.age > 25 && car.owner.expYears < 5) {
// //         car.owner.expYears++
// //     }
// //
// //     return car;
// // });
// //
// // const price = cars.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0);
// //
// // console.log(cars);
// // console.log(price);
// // console.log(newOwners);
//
//
// //
// //
// // function TaxoPark() {
// //     let cars = [
// //         {
// //             model: 'Seat Arona',
// //             enginePowerHP: 115,
// //             owner: {name: 'Yaroslav', age: 25, expYears: 2},
// //             price: 35000,
// //             year: '2018'
// //         },
// //         {
// //             model: 'Skoda Fabia',
// //             enginePowerHP: 80,
// //             owner: {name: 'Oleksandr', age: 25, expYears: 2},
// //             price: 5000,
// //             year: '2008'
// //         },
// //         {
// //             model: 'Fiat Doblo',
// //             enginePowerHP: 95,
// //             owner: {name: 'Oleg', age: 25, expYears: 6},
// //             price: 6500,
// //             year: '2007'
// //         },
// //         {
// //             model: 'Ford Transit',
// //             enginePowerHP: 90,
// //             owner: {name: 'Nazar', age: 26, expYears: 4},
// //             price: 2000, year: '2000'
// //         },
// //         {
// //             model: 'Mercedes E225',
// //             enginePowerHP: 170,
// //             owner: {name: 'Oleksiy', age: 21, expYears: 2},
// //             price: 3500,
// //             year: '2000'
// //         },
// //         {
// //             model: 'Lada 21011',
// //             enginePowerHP: 80,
// //             owner: {name: 'Yan', age: 24, expYears: 5},
// //             price: 1500,
// //             year: '1976'
// //         },
// //         {
// //             model: 'Seat Leon',
// //             enginePowerHP: 230,
// //             owner: {name: 'Bogdan', age: 31, expYears: 4},
// //             price: 8000,
// //             year: '2008'
// //         },
// //         {
// //             model: 'Honda Civic',
// //             enginePowerHP: 300,
// //             owner: {name: 'Artur', age: 24, expYears: 6},
// //             price: 10000,
// //             year: '2010'
// //         }
// //     ];
// //
// //
// //     let newOwners = [
// //         {name: 'Yan', age: 28, expYears: 15},
// //         {name: 'Igor', age: 73, expYears: 7},
// //         {name: 'Ira', age: 24, expYears: 5},
// //         {name: 'Ivan', age: 36, expYears: 9},
// //         {name: 'Viktor', age: 24, expYears: 4},
// //         {name: 'Vova', age: 85, expYears: 5},
// //         {name: 'Dima', age: 24, expYears: 5},
// //         {name: 'Nastya', age: 15, expYears: 2},
// //         {name: 'Petro', age: 24, expYears: 5},
// //         {name: 'Karina', age: 18, expYears: 3}
// //     ];
// //
// //     return {
// //         repair: () => {
// //             for (let i = 0; i < cars.length; i += 2) {
// //                 const randomDriverIndex = parseInt(Math.random() * newOwners.length - 1);
// //
// //                 cars[i].enginePowerHP = cars[i].enginePowerHP * 1.05;
// //                 cars[i].price = cars[i].price * 1.1;
// //
// //                 cars[i].owner = newOwners[randomDriverIndex];
// //                 newOwners.splice(randomDriverIndex, 1)
// //             }
// //         },
// //
// //         checkExperience: () => {
// //             cars = cars.map(car => {
// //                 if (car.owner.age > 25 && car.owner.expYears < 5) {
// //                     car.owner.expYears++
// //                 }
// //
// //                 return car;
// //             });
// //         },
// //
// //         calculatePrice: () => cars.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0),
// //
// //         getCars: () => {
// //             console.log(cars);
// //         },
// //
// //         getFreeOwners: ()=> {
// //             console.log(newOwners);
// //         }
// //     }
// //
// // }
// //
// //
// // let RomansCar = TaxoPark();
// //
// // let romansCarPrice = RomansCar.calculatePrice();
// //
// // console.log(romansCarPrice);
// //
// //
// // RomansCar.repair();
// //
// //
// // console.log(RomansCar.calculatePrice());
// //
// // RomansCar.getCars()
//
//
// let object = {
//     name: 'Karina',
//     age: 18,
//     expYears: 3,
//     profession: {
//         title: 'Medical',
//         money: 100,
//         companies: ['Borys', 'Zablotskiy']
//     },
//     car: true
// };
//
//
// let me = {
//     moto: true,
//     city: 'Lviv',
//     name: 'Viktor'
// };
//
//
// // let obj = Object.assign({}, object, me, {name: 'Oksana'});
// // let obj = Object.assign({}, object);
// Object.assign(object, {created_at: Date.now()});
//
// object.profession.money = '$%^&*()(*&^%$#$%^&*()(*&^%$#$%^&*()';
//
// // console.log(obj);
// console.log('*****************');
// console.log(object);
//
//
// //
// // let notDeep = Object.assign({}, object);
// //
// //
// // notDeep.age = 22222220;
// // notDeep.expYears = 777777777;
// // notDeep.profession.money = 99999999999999999;
// //
// // console.log(notDeep);
// // console.log('_____________');
// // console.log(object);
// //
//
// let object = {
//     name: 'Karina',
//     age: 18,
//     expYears: 3,
//     profession: {
//         title: 'Medical',
//         money: 100,
//         companies: ['Borys', 'Zablotskiy']
//     },
//     car: true
// };
//
//
// let deepCope = JSON.parse(JSON.stringify(object));
//
//
// deepCope.profession.money = 329545734578353;
//
// console.log(object);
// console.log(deepCope);


/**
 * transferCredits.
 * Ця функція отримує два аргументи - кількість кредитів, які потрібно передати,
 * та карту одержувача (інший об’єкт, створений функцією `userCard` - card1): card3.transferCredits(50, card1);
 * Кошти, які ви хочете передати, повинні обкладатися податками 0,5%.
 * Не забудьте перед перерахуванням перевірити залишок балансу та ліміт транзакцій відправника кредитів (card3).
 */

// const deepMap = (obj) => {
//     if (!obj.children) {
//         return {
//             title: `${obj.label} ${obj.count}`,
//             id: obj.plan_comptable_id
//         };
//     }
//     const children = obj.children.map((child) => {
//         if (!child.children) {
//             return {
//                 title: `${child.label} ${child.count}`,
//                 id: child.account_number
//             };
//         }
//         return deepMap(child);
//     });
//     return {
//         title: `${obj.label} ${obj.count}`,
//         id: obj.plan_comptable_id,
//         children
//     };
// };
//
// const childrens = tree_list.map((child) => {
//     if (!child.children) {
//         return {
//             title: `${child.label} ${child.count}`,
//             id: child.plan_comptable_id,
//             plan_comptable_id: child.plan_comptable_id
//         };
//     }
//     return deepMap(child);
// });

// //30.08
//
// function userCard(number) {
//     let options = {
//         balance: 100,
//         transactionLimit: 100,
//         historyLogs: [],
//         key: number,
//     };
//     return {
//         getCardOptions: function () {
//             console.log(options);
//         },
//
//         putCredits: function (debit) {
//             options.balance += debit;
//         },
//
//         takeCredits: function (credit) {
//             if (options.transactionLimit < credit) {
//                 throw new Error('You credit limmit not Allow');
//             }
//             options.balance -= credit;
//         },
//
//         setTransactionLimit: function (cardLimit) {
//             options.transactionLimit = cardLimit;
//         },
//
//         transferCredits: function (sendToCard, cardToRecieve) {
//             cardToRecieve.putCredits(sendToCard);
//             options.balance -= sendToCard;
//         },
//     }
// }
//
// let card1 = userCard(1);
// let card2 = userCard(2);
// let card3 = userCard(3);
//
// card3.putCredits(0);
// card3.takeCredits(0);
// card3.setTransactionLimit(100);
// card3.transferCredits(10, card2);
// card1.getCardOptions();
// card2.getCardOptions();
// card3.getCardOptions();


let userCard = function (cardId) {

    let cardInfo = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: cardId,
    };

    return {
        putCredits: money => {
            console.log(money);
            cardInfo.balance += money;
            statisticInserter('putCredits', money)
        },

        takeCredit: money => {
            if (cardInfo.transactionLimit < money) {
                throw new Error(`Limit is ${cardInfo.transactionLimit}`)
            }

            if (cardInfo.balance < money) {
                throw new Error(`You have not ${money} on your bank account`)
            }

            cardInfo.balance -= money;

            statisticInserter('takeCredit', money)

        },

        setTransactionLimit: newLimit => {
            if (newLimit < 0) {
                throw new Error('Limit must be grater than 0')
            }

            cardInfo.transactionLimit = newLimit;

            statisticInserter('changeLimit', newLimit)

        },

        sendMoney: (money, card) => {
            if (cardInfo.transactionLimit < money) {
                throw new Error(`Limit is ${cardInfo.transactionLimit}`)
            }

            if (cardInfo.balance < money) {
                throw new Error(`You have not ${money} on your bank account`)
            }

            cardInfo.balance -= money;

            console.log('************************');
            console.log(card);
            console.log('************************');

            card.putCredits(money);
        },

        getLogs: () => {
            console.log(cardInfo.historyLogs);
        },

        getInfo: () => {
            console.log({
                balance: cardInfo.balance,
                transactionLimit: cardInfo.transactionLimit
            });
        }
    };

    function statisticInserter(transactionType, count) {
        cardInfo.historyLogs
            .push({
                type: transactionType,
                count,
                // time: Date.now()
                time: new Date().toISOString()
            })
    }

};

// 01/01/1970 00:00 -> UNIX епоха
// ISO
//
// let card1 = userCard(1);
// let card2 = userCard(2);
// let card3 = userCard(3);
//
//
// card1.setTransactionLimit(900);
// card1.sendMoney(20, card2);
// card1.sendMoney(8, card3);
//
// card1.getInfo();
// card2.getInfo();
// card3.getInfo();


function UserAcount(name) {

    let userInfo = {
        name,
        cards: []
    };


    return {
        addCard: () => {
            if (userInfo.cards.length > 3) {
                throw new Error('Card limit is over')
            }
            userInfo.cards.push(userCard(userInfo.cards.length + 1))
        },

        getCardById: (cardIndex) => {
            if (!userInfo.cards[cardIndex]) {
                return {}
            }

            return userInfo.cards[cardIndex]
        },

        getMyCards: ()=> userInfo.cards
    }
}



let user = UserAcount('Eka');
let user22 = UserAcount('Viktor');

user.addCard(userCard(1));
user22.addCard(userCard(1));

const ekaCard1 = user.getCardById(0);
const viktorCard1 = user.getCardById(0);

ekaCard1.sendMoney(9, viktorCard1);

viktorCard1.getInfo();
ekaCard1.getInfo();
ekaCard1.getLogs();

