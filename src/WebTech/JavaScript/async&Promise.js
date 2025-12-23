const tripLocation = 'taiwan';
function f1(location) {
    return new Promise((resolve, reject) => {
        if (location == 'taiwan') {
            resolve('lesGo to ' + location);
        }
        else {
            reject('No budget');
        }

    })
}

function bookIt() {
    return new Promise((resolve) => {
        console.log(`***********Processing*********`)
        resolve(`Estimated amount to be paid :23500`)
    })
}

// //promises
// f1(tripLocation).then(msg=>{
//     console.log(`The input location is ${tripLocation}`);
//     return bookIt(msg);
// }).then(msg=>{
//     console.log(msg)
// }).catch(err=>{
//     console.log(err+` for ${tripLocation}`);
// })




//async
async function execute() {
    try {
        const res = await f1(tripLocation);
        console.log(`The input location is ${tripLocation}`);
        const msg = await bookIt(res);
        console.log(msg);

    } catch (err) {
        console.log(`${err} for ${tripLocation}`);
    }
}
execute();