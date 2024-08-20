// function success() {
//     throw "hi";
// }

// function failure() {
//     var res = new Promise((resolve, reject) => {
//         var s = false;
//         if (s) {
//             resolve("The success is true");
//         } else {
//             reject("The success is false");
//         }
//     });
//     return res;
// }

// async function main() {
//     console.log(await success());
    
// }

// main();
// {
//     var a = 100;
// }
// console.log(a);
// // Closures
// function main(){
//     for(var i=1;i<=10;i++){
//         setTimeout(function(){
//             console.log(i);
//         },1000)
//     }
// }
// main();
// function main1(){
//     for(let i=1;i<=10;i++){
//         setTimeout(function(){
//             console.log(i);
//         },1000)
//     }
// }
// main1()
//Promises
function p1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hiii");
        }, 10000);
    });
}
function p2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello");
        }, 5000);
    });
}
async function result() {
    var res = await p1();
    var res1 = await p2();
    console.log(res);
    console.log(res1);
}

result();
