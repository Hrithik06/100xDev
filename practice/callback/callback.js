function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function quad(n){
    return n*n*n*n;

}

function sumOfSomething(a,b,cb){
    let square1 = cb(a)
    let square2 = cb(b)
    return square1+square2;

}

let sq = sumOfSomething(1,2,square)
console.log(sq)

let c = sumOfSomething(1,2,cube)
console.log(c)
