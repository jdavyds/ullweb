import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import style from './../styles/login.module.css'
import logo from './../assets/logo.png'
import eye from './../assets/eye.png'
import tr from './../assets/logTR.png'
import bl from './../assets/logEl.png'
import ar from './../assets/logDots.png'

export default function Login() {
    const navigate = useNavigate()
    const [showP1, setShowP1] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const formObj = new FormData()
        if(email && password) {
            formObj.append('email', email)
            formObj.append('password', password)
        }
    }
  return (
        <div className={style.mainContainer}>
            <div className={style.logo}>
                <img src={logo} alt="" />
            </div>
            <form onSubmit={handleSubmit} className={style.loginForm}>
                <h2>Login to your Dashboard</h2>
                <div className={style.formInput}>
                    <label htmlFor="email">
                        <span>
                        Email Address or Phone Number
                        </span>
                        <input type='email' id="email" name="email" 
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label htmlFor="password">
                        <span>
                        Password
                        </span>
                        <div className={style.customInput}>
                            <input 
                            type={showP1 ? "text": "password"} id="pass1" name="pass1" value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="button" 
                            onClick={(e) => {
                                e.preventDefault()
                                setShowP1(!showP1)
                            }}
                            >
                            <img src={eye} alt="toggle" />
                            </button>
                        </div>
                    </label>
                    <button className={style.forgotText}>Forget password?</button>
                </div>
                <div className={style.buttonCont}>
                    <button className={style.submitButton} onClick={() => navigate('/dashboard/overview')}>
                        Login
                    </button>
                    <p>Don’t have an ULLWEB account yet? <button onClick={() => navigate("/register")}>Register</button></p>
                </div>
            </form>
                <img src={tr} className={style.tr} alt="" />
                <img src={bl} className={style.bl} alt="" />
                <img src={ar} className={style.arl} alt="" />
                <img src={ar} className={style.arr} alt="" />
        </div>
  )
}
