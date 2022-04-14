import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './../styles/register.module.css'
import logo from './../assets/logo.png'
import eye from './../assets/eye.png'
import tr from './../assets/logTR.png'
import bl from './../assets/logEl.png'
import ar from './../assets/logDots.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

export default function Register() {
  const [showP1, setShowP1] = useState(false)
  const [showP2, setShowP2] = useState(false)
  const [state, setState] = useState({
    firstName: '',
    lastName: '', 
    email: '',
    sex: '',
    phone: '',
    invite: '',
    password: '',
    rePassword: ''
  })
  return (
    <div className={style.mainContainer}>
            <div className={style.logo}>
                <img src={logo} alt="" />
            </div>
            <form action="post" className={style.regForm}>
                <h2>Let’s you get started on ULLWEB</h2>
                <div className={style.formInput}>
                        <label htmlFor="firstname">
                            <span>First Name*</span>
                            <input type="text" value={state.firstName} 
                            onChange={(e) => setState(
                                (state) => { 
                                    return {...state, firstName: e.target.value}
                                })
                            } 
                            id="firstname" name="firstname"
                            />
                        </label>
                        <label htmlFor="lastname">
                            <span>Last Name*</span>
                            <input type="text"
                            value={state.lastName}
                            onChange={(e) => setState(
                                (state) => { 
                                    return {...state, lastName: e.target.value}
                                })
                            }
                            id="lastname" name="lastname"/>
                        </label>
                </div>
                <div className={style.formInput}>
                    <label htmlFor="">
                        <span>Email Address*</span>
                        <input type="email" 
                        value={state.email}
                        onChange={(e) => setState(
                            (state) => { 
                                return {...state, email: e.target.value}
                            })
                        }
                        name="email" id="email" />
                    </label>
                    <label htmlFor="">
                        <span>Sex*</span>
                        <select name="sex" id="sex">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>
                </div>
                <div className={style.formInput}>
                    <label htmlFor="">
                        <span>Phone Number*</span>
                        <input type="tel" name="tel" id="tel" 
                        onChange={(e) => setState((state) => { return {...state, phone: e.target.value}})} className={style.phoneInput}/>
                    </label>
                    <label htmlFor="">
                        <span>Invite Code*</span>
                        <nav>
                            <FontAwesomeIcon className={style.icon} icon={ faCircleExclamation } />
                             You get 10% off your first order with an invite code or use ULLWEB as your invite code with no discount</nav>
                        <input type="text" 
                        value={state.invite}
                        onChange={(e) => setState(
                            (state) => { 
                                return {...state, invite: e.target.value}
                            })
                        } />
                    </label>
                </div>
                <div className={style.customInput}>
                    <label htmlFor="">
                        <span>Password*</span>
                        <p>
                            <input 
                            type={showP1 ? "text": "password"} id="pass1" name="pass1" value={state.password} onChange={(e) => setState(
                                (state) => { 
                                    return {...state, password: e.target.value}
                                })
                            }
                            />
                            <button type="button" 
                            onClick={(e) => {
                                e.preventDefault()
                                setShowP1(!showP1)
                            }}
                            >
                            <img src={eye} alt="toggle" />
                            </button>
                        </p>
                    </label>
                    <label htmlFor="">
                        <span>Enter Password Again*</span>
                        <p>
                            <input 
                            type={showP2 ? "text": "password"} id="pass2" name="pass2" value={state.rePassword} onChange={(e) => setState(
                                (state) => { 
                                    return {...state, rePassword: e.target.value}
                                })
                            }
                            />
                            <button type="button" 
                            onClick={(e) => {
                                e.preventDefault()
                                setShowP2(!showP2)
                            }}
                            >
                            <img src={eye} alt="toggle" />
                            </button>
                        </p>
                    </label>
                </div>
                <div className={style.buttonCont}>
                    <button className={style.submitButton}>
                        <Link to="/register-continue">
                            Continue
                        </Link>
                    </button>
                    <p>Already have an ULLWEB Accout? <Link to="/">Login</Link></p>
                </div>
                <div className={style.privacy}>
                    <p>By registering you agree to ULLWEBS <Link to='/'> Terms of service </Link> and <Link to='/'> Privacy Policy </Link></p>
                </div>
            </form>
            <img src={tr} className={style.tr} alt="" />
            <img src={bl} className={style.bl} alt="" />
            <img src={ar} className={style.arl} alt="" />
            <img src={ar} className={style.arr} alt="" />
        </div>
  )
}
