const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.listen(3002, () =>{
    console.log('Server is running on port 3002')
})

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'possystem'
})

// app.post('/register', (req, res)=>{
//     const sentUsername = req.body.Username
//     const sentEmail = req.body.Email
//     const sentPassword = req.body.Password

//     const SQL ='INSERT INTO login (email, username, passwod) VALUES (?,?,?)'
    
//     const Values = [sentUsername, sentEmail, sentPassword]

//     db.query( SQL, Values, (err, results)=>{ 
//         if(err){
//             res.send(err)
//         }
//         else{
//             console.log('User inserted sucessfully!')
//             res.send({message: 'User added!'})
//         }
//     })

// })

app.post('/login', (req, res)=>{
    const sentLoginUsername = req.body.LoginUsername
    const sentLoginPassword = req.body.LoginPassword

    const SQL ='SELECT FROM login WHERE username = ? && password = ?'
    
    const Values = [sentLoginUsername, sentLoginPassword]
})

// db.query( SQL, Values, (err, results)=>{ 
//     if(err){
//         res.send({error: err})
//     }
//     if(results.length > 0){
//         console.log('User inserted sucessfully!')
//         res.send({results})
//     }else{
//         res.send({message: 'Credentials Dont match!'})
//     }
// })