import { useState } from "react"
import { Formik, ErrorMessage } from "formik"
import * as Yup from "yup"
import Axios from "axios"
import { useNavigate} from "react-router-dom"
// import "../style/style.css"
// import { useHistory } from "react-router-dom";
import "../style/register.css"

import NavScrollExample from "./NavBar"

const url = "http://localhost:2000/users/regristasi";

const RegisterPage = () => {
    // const [show, setShow] = useState (false)
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [msg, setMsg] = useState("")
    const navigate = useNavigate()

    const RegisterSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address format")
            .required("Email Is Required"),
        username: Yup.string()
            .required("Username Is Required"),
        phone_number: Yup.string()
            .required("Phone Number Is Required"),
        password: Yup.string()
            .min(8, "Password Must Be 8 characters at minimum"),
        confirmPassword: Yup.string()
            .min(8, "confirm password must be 8 characters at minimum")
    })
    const onRegister = async (data) => {
        data.preventDefault()
        try {
            await Axios.post(url, {
                username,
                email,
                phone_number,
                password,
                confirmPassword
            });
            navigate("/login")
        } catch (err) {
            if(err.response) {
                setMsg(err.response.data)
            }
        }
    };
    return (
            <Formik
                initialValues={ 
                    {
                        email: "",
                        username: "",
                        phone_number: "",
                        password: "",
                        confirmPassword: ""
                    }
                }

                validationSchema={RegisterSchema}
                onSubmit={(values) => {
                    onRegister(values)
                }}
            >{(props) => {
                console.log(props)
                return (
                    <>
                    <NavScrollExample/>
                    <div className="myBgregister">
                    <div className="columns  is-centered">
                        <div className="column is-half">
                            <p className="has-text-centered">{msg}</p>
                            <form onSubmit={onRegister}>
                                <div className="field">
                                    <label className="label mt-5">Name</label>
                                    <div className="control">
                                        <input
                                            name="username"
                                            type="text"
                                            className="input"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Name"
                                        />
                                        <ErrorMessage 
                                            component="div"
                                            name="username"
                                            style={{ color: "red" }}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input
                                            name="email"
                                            type="text"
                                            className="input"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="email"
                                            style={{ color: "red" }}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">PhoneNumber</label>
                                    <div className="control">
                                        <input
                                            name="phone_number"
                                            type="text"
                                            className="input"
                                            value={phone_number}
                                            onChange={(e) => setPhone_number(e.target.value)}
                                            placeholder="Phone Number"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="phone_number"
                                            style={{ color: "red" }}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control">
                                        <input
                                            name="password"
                                            type="password"
                                            className="input"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="password"
                                            style={{ color: "red" }}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Confirm Password</label>
                                    <div className="control">
                                        <input
                                            name="confirmPassword"
                                            type="password"
                                            className="input"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="Confirm Password"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="confirmPassword"
                                            style={{ color: "red" }}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <button type="submit" className="button is-success is-centered">
                                        Regristasi
                                    </button>
                                </div>
                                <a  href="/login">Udah Punya Akun? Login</a>
                            </form>
                        </div>
                    </div>
                 </div>
                 </>
                )
            }}
            </Formik>
        
    )
}
export default RegisterPage