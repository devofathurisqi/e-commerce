import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

import "../style/login.css"

const url = "http://localhost:2000/users/login";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    const [welcome, setWelcome] = useState("")
    console.log (setWelcome)
    const navigate = useNavigate()

    const Auth = async (data) => {
        data.preventDefault()
        try {
            await axios.post(url, {
                username,
                password,
            });
            navigate("/")
            setWelcome(username)
        } catch (err) {
            if(err.response) {
                setMsg(err.response.data)
            }
        }
    };

    useEffect(() => {
        window.localStorage.setItem('MY_APP_STATE', JSON.stringify(welcome))
    }, [welcome])


    return (
        <div className='myBglogin'>
        <section className="hero has-background-gray is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form  onSubmit={Auth} className='box'>
                                <p className='has-text-centered'>{msg}</p>
                                <div className='field mt-5'>
                                    <label className='label'>Email or Username</label>
                                    <div className='controls'>
                                        <input type="text" className='input' placeholder='Username' value={username} 
                                        onChange = {(e) => setUsername(e.target.value)} />
                                    </div>
                                </div>
                                <div className='field mt-5'>
                                    <label className='label'>Password</label>
                                    <div className='controls'>
                                        <input type="password" className='input' placeholder='Enter Your Password' value={password}
                                        onChange= {(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className='field mt-5'>
                                    <button 
                                    className='button is-success is-fullwidth'
                                    >Login</button>
                                </div>
                                <a href="/register">Belum Punya Akun? Regristasi Sekarang</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Login
