const express = require('express');
const bodyParser = require('body-parser');
const port = 3000
const app = express()
app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/route-handler', function (req, res) {
    // res.json(
    //     {
    //         name:'Hrithik',
    //         age:333,
    //     }
    //     )
        res.send('<b>Hi</b>')
  });


  app.post('/conversations', (req,res)=>{
    console.log(req.headers)
    console.log( req.body)
const message = req.body.message
console.log(message)

    res.send({
      msg:"Hi hello.  + 2 = 5 Fight Me"
    })
  })

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});