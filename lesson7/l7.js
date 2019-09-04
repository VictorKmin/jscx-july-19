/**
 // callback ^
 // event loop ^
 // Recursion ^
 */
//
// //
// // let arr = [2, {name: 'Victor', student: ['Olga', 'Dima']}, 6, [5678, 99], 1];
// // //
// // // function recursion(i) {
// // //     if (i < arr.length) {
// // //         console.log(arr[i]);
// // //         ++i;
// // //         recursion(i);
// // //     }
// // // }
// // //
// // // recursion(0);
// //
// // function someFunc(number1, number2, callback) {
// //     let result = number1 + number2;
// //     callback(result)
// // }
// //
// // function resultLoger(res){
// //     console.log(res);
// // }
// //
// // someFunc(10, 5, resultLoger);
// // // ===
// // // someFunc(10, 5, function (res){
// // //     console.log(res);
// // // });
//
// // console.log(resultLoger.toString());
//
// function clearRoom(isClear, cb) {
//
//     if (isClear) {
//         cb(null, new Date().toISOString(), 100);
//     } else {
//         cb('Room not clear', new Date().toISOString(), null);
//     }
// }
//
// // function getReward(reward) {
// //     console.log(reward);
// // }
// //
// // console.log(getReward.toString());
//
// function getReward(err, time, reward) {
//     if (err) {
//         throw new Error(`${err}  at:${time}`)
//         // throw new Error(err + ' at:' + time)
//     }
//
//     if (!err) {
//         console.log(`Your reward is ${reward} \n ${time}`)
//     }
// }
//
// clearRoom(true, getReward);
//
//

console.log(1);

setTimeout(()=> {
    console.log(2)
}, 0);

console.log(3);
