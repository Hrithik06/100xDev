// const fs = require("fs")
// // FileSystem module
// fs.readFile("practice/async/a.txt", "utf-8", function (err, data) {
//     console.log(data)
// })
// console.log("hi there")
// let a = 0
// //takes very long, longer than the file read
// for(let i=0;i<10000000000;i++){
//     a++;
// }
// console.log("hi there 2")


function hrithikAsyncFunction(cb){
    //async logic
    
    cb("hello there from async")
    
}

async function main(){
    hrithikAsyncFunction(function(value){
        console.log(value)
        
    })
}

main()