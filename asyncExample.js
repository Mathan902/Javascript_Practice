function success() {
    throw "hi";
}

function failure() {
    var res = new Promise((resolve, reject) => {
        var s = false;
        if (s) {
            resolve("The success is true");
        } else {
            reject("The success is false");
        }
    });
    return res;
}

async function main() {
    console.log(await success());
    
}

// Call the main function to execute the promises
main();
