const fs = require('fs')
const content = 'Hi Hello My name is Oliver Queen';

fs.writeFile('01-async-js/easy/b.txt', content, 
(err) => console.log('success')
)
