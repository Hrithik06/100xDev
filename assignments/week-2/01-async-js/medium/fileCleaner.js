const fs = require('fs')

fs.readFile('clean.txt', 'utf-8', (err, data) => {
    
    let d = data.split(' ')
        .filter(i => i !== '').join(' ')

    fs.writeFile('clean.txt', d, (err) => console.log('done')
    )

})

