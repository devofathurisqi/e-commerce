import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React, { useState, useEffect } from "react"
import axios from 'axios';
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom"



function NavScrollExample() {
    const [username, setUsername] = useState("")
    const [token, setToken] = useState("")

    useEffect(() => {
        refreshToken()
    }, [])

    const refreshToken = async () => {
        try {
            const response = await axios.get("http://localhost:2000/users/getuser")
            console.log(response)
            setUsername(response.username)
        } catch (error) {

        }
    }

    useEffect(() => {
        const data = window.localStorage.getItem('MY_APP_STATE')
        if (data !== null) setToken(JSON.parse(data))
    }, [])
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4" href="/">DF COLLECTION</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Welcome Back : {token}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <div className="buttons">
                        <a href="/login" className='btn btn-outline-dark'>
                            <i className="fa fa-sign-in me-1"></i> Login</a>
                        <a href="/register" className='btn btn-outline-dark ms-2'>
                            <i className="fa fa-user-plus me-1"></i> Register</a>
                        <a href="" className='btn btn-outline-dark ms-2'>
                            <i className="fa fa-shopping-cart me-1"></i> Cart (0)</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavScrollExample;