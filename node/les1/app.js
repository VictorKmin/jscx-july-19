const fs = require('fs');
//
// for (let i = 0; i < 1000000; i++) {
//     fs.appendFile('./text.txt', 'TEXT ', ()=> {
//     });
// }


// console.log(info);
//
// fs.readFile('./text.txt', (err, data) => {
//     console.log(data);
// });

// let readStream = fs.createReadStream('../../../../Videos/soc10');
//
// readStream.on('data', data => {
//     console.log(data);
// });

fs.rename('./someFile.txt', '../someDir/newFile.txt', ()=> {
    console.log("success");
})



