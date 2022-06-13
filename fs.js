// /* ------------------------------------------------- FILES -------------------------------------------------*/
// // library file system
// const fs = require('fs');
// // // Non-blocking code execution
// // // Each part of code depend of last line
// // // In the final, write in Final.txt
// // fs.readFile(`${pathTxt}start.txt`,'utf-8', (err, data1) => {
// //     if (err) return console.log('Quebrou 0')
// //     fs.readFile(`${pathTxt}${data1}.txt`,'utf-8', (err, data2) => {
// //         if (err) return console.log('Quebrou 1')
// //         console.log(data2);
// //         fs.readFile(`${pathTxt}append.txt`, 'utf-8', (err, data3) => {
// //             if (err) return console.log('Quebrou 2')
// //             console.log(data3);

// //             fs.writeFile(`${pathTxt}final.txt`, `${data2}\n${data3}`, 'utf-8', err => {
// //                 if (err) return console.log('Quebrou 3')
// //                 console.log('Your file has benn written');
// //             })
// //         });
// //     });
// // });

// // console.log('Will read file...'); 
