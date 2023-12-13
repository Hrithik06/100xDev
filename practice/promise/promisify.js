// returns nothing/undefined
// function myOwnSetTimeout(cb, duration) {
//     setTimeout(cb, duration)
// }

// myOwnSetTimeout(
//     () => console.log("after settiemout"),
//     2000
// )

//promisifying
//returns a promise

function promisifiedMyOwnSetTimeout(duration) {
    const p = new Promise(function (resolve) {
        setTimeout(resolve, duration)
    });
    return p;
}

const ans = promisifiedMyOwnSetTimeout(1000)
console.log(ans)

ans.then(function() {
    console.log("timeout is done")})


