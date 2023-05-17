// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Axios from 'axios'

// const Register = () => {

//     const [email, setEmail] = useState('')
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')

//     const createUser = ()=>{
//         Axios.post('http://localhost:3002/register', {
//             Username: username,
//             Email: email,
//             Password: password
//         }).then(()=>{
//             console.log('User has been created')
//         })
//     }

//     return (
//         <div className="registerdiv">
//             <>
//         <form className="registerform">
//             <input type="text" placeholder="Username ..." onChange={(event)=>{
//                 setUsername(event.target.value)
//             }} />
//             <input type="email" placeholder="Email ..." onChange={(event)=>{
//                 setEmail(event.target.value)
//             }}/>
//             <input type="password" placeholder="Password ..." onChange={(event)=>{
//                 setPassword(event.target.value)
//             }}/>
//             {/* <button type="submit" onClick={}> */}
//                 <Link to='/app' className="registerbutton">Register</Link>
//                 {/* </button> */}
//         </form>
//         </>
//         </div>
//     )
// }