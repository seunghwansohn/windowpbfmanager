// var test = function () {
//     var name = '안녕';
//     // console.log(name);
//     return name;
// }

// var test2 = (x, y) => x + y;
// // console.log(test());

// // console.log(test2('안녕', '바보야'));

// function no1(x) {
//     return !x;
// }

// // console.log(no1());

// const condition = 1 == 1;

const condition2 = function (){
    var c = 2;
    var d = 2;
    var e = c == d;
    return e;
}
const promise = new Promise((resolve,reject) => {
    if (condition2() == true) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

promise
    .then((message) => {
        console.log(message);
        return new Promise((resolve, reject) => {
            resolve('바보');
        });
    })

    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve('멍청이');
        });
    })

    .then((message3) => { 
        console.log(message3);
    })
    
    .catch((error) => {
        console.error(error);
    });
var a = 0;
// console.log(a==1);
// console.log(condition);
// console.log(condition2());