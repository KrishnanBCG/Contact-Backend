const express =require('express');
const bodyparser = require('body-parser');
const cors =require('cors');
const mysql =require('mysql2')

const app =express();

app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Krishnan_248',
    database:'myapp',
    port:3306
});
db.connect(err=>{
    if(err){console.log('err');}
    console.log('database connected .....')
})

app.get('/user',(req,res)=>{
    
    let qr = 'select * from mysql';
    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'errs');
        }
        if(result.length>0)
        {
            res.send({
                message:'all user data',
                data:result
            });
        }
    })

})


app.listen(3000,()=>{
    console.log('server running.......')
})