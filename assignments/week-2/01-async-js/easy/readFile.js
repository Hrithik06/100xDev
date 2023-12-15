const fs = require('fs')
fs.readFile('01-async-js/easy/a.txt', 'utf-8', (err, data)=>{
    let a =0;
    for(let i=0;i<100000000000;i++){
        a++;
    }
    console.log(a)
    
    console.log(data)
    
})