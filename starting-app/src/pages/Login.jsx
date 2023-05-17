import { RiAccountCircleFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios'
// import { Login } from '..Login'
import { navigateTo } from "react";

export const Login = () => {
    const [loginUsername, setLoginUsername] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const navigateTo = useNavigate()

    const [loginStatus, setLoginSatus] = useState('')
    const [statusHolder, setStatusHolder] = useState('message')

    const loginUser = (e)=>{

        e.preventDefault();

        Axios.post('http://localhost:3002/login', {
            LoginUsername: loginUsername,
            LoginPassword: loginPassword
        }).then((response)=>{
                console.log()

                if(response.data.message || loginUsername == '' || loginPassword == ''){
                    navigateTo('/')
                    setLoginSatus('Credentials dont Exist!')
                    console.log(response.data.message)
                }
                else{
                    navigateTo('/home')
                }
            })
        }

        useEffect(()=>{
            if(loginStatus !== ''){
                setStatusHolder('showMessage')
                setTimeout(() => {
                    setStatusHolder('message')
                }, 4000);
            }
        }, [loginStatus])

        const onSubmit = ()=>{
            setLoginUsername('')
            setLoginPassword('')
        }

    return (
        <div className="logindiv">
            <>
                <form className="loginform" onSubmit={onSubmit}>
                    <span className={statusHolder}>{loginStatus}</span>
                        <div className="icona"><RiAccountCircleFill/></div>
                        {/*  <select name="market" id="">
                                <option value="zgjidh">Zgjidhe Marketin</option>
                                <option value="shop1">Shop 1</option>
                                <option value="shop2">Shop 2</option>
                                <option value="shop3">Shop 3</option>
                                <option value="shop4">Shop 4</option>
                            </select> */}
                            <input type="text" placeholder="Username ..."  
                            onChange={(event)=>{
                                setLoginUsername(event.target.value)
                            }}/>
                            <input type="password" placeholder="Password ..." 
                            onChange={(event)=>{
                                setLoginPassword(event.target.value)
                            }}/>
                            <button type="submit" onClick={loginUser}>
                                <Link to='/home' className="loginbutton">
                                    Login
                                    </Link> 
                            </button>
                            {/* <p><a href="./pages/Register">Regsiter</a></p> */}
                </form>
            </>
        </div>
    )
}