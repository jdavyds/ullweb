import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from './../styles/register.module.css'
import logo from './../assets/logo.png'
import tr from './../assets/logTR.png'
import bl from './../assets/logEl.png'
import ar from './../assets/logDots.png'
import down from './../assets/arrow-down.png'

export default function Register2() {
  const navigate = useNavigate()
  const [state, setState] = useState({
    address: '',
    state: '', 
    country: '',
    busname: '',
    bustype: '',
    bussize: '',
    role: '',
    budget: ''
  })
  return (
    <div className={style.mainContainer}>
            <div className={style.logo}>
                <img src={logo} alt="" />
            </div>
            <form className={style.regForm}>
                <h2>Let’s you get started on ULLWEB</h2>
                <div className={style.formInput}>
                        <label htmlFor="">
                            <span>Address*</span>
                            <input type="text" value={state.address} 
                            onChange={(e) => setState(
                                (state) => { 
                                    return {...state, address: e.target.value}
                                })
                            } 
                            id="address" name="address"
                            />
                        </label>
                        <label htmlFor="">
                            <span>State*</span>
                            <select name="state" id="state">
                                <option value="" selected="selected"></option>
                                <option value="Abuja FCT">Abuja FCT</option>
                                <option value="Abia">Abia</option>
                                <option value="Adamawa">Adamawa</option>
                                <option value="Akwa Ibom">Akwa Ibom</option>
                                <option value="Anambra">Anambra</option>
                                <option value="Bauchi">Bauchi</option>
                                <option value="Bayelsa">Bayelsa</option>
                                <option value="Benue">Benue</option>
                                <option value="Borno">Borno</option>
                                <option value="Cross River">Cross River</option>
                                <option value="Delta">Delta</option>
                                <option value="Ebonyi">Ebonyi</option>
                                <option value="Edo">Edo</option>
                                <option value="Ekiti">Ekiti</option>
                                <option value="Enugu">Enugu</option>
                                <option value="Gombe">Gombe</option>
                                <option value="Imo">Imo</option>
                                <option value="Jigawa">Jigawa</option>
                                <option value="Kaduna">Kaduna</option>
                                <option value="Kano">Kano</option>
                                <option value="Katsina">Katsina</option>
                                <option value="Kebbi">Kebbi</option>
                                <option value="Kogi">Kogi</option>
                                <option value="Kwara">Kwara</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Nassarawa">Nassarawa</option>
                                <option value="Niger">Niger</option>
                                <option value="Ogun">Ogun</option>
                                <option value="Ondo">Ondo</option>
                                <option value="Osun">Osun</option>
                                <option value="Oyo">Oyo</option>
                                <option value="Plateau">Plateau</option>
                                <option value="Rivers">Rivers</option>
                                <option value="Sokoto">Sokoto</option>
                                <option value="Taraba">Taraba</option>
                                <option value="Yobe">Yobe</option>
                                <option value="Zamfara">Zamfara</option>
                                <option value="Outside Nigeria">Outside Nigeria</option>
                            </select>
                            <img src={down} alt="" />
                        </label>
                </div>
                <div className={style.formInput}>
                    <label htmlFor="">
                        <span>Country*</span>
                        <select name="country" id="country">
                            <option value="" selected="selected"></option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Other">Other</option>
                        </select>
                        <img src={down} alt="" />
                    </label>
                    <label htmlFor="">
                        <span>Business Name (Optional)</span>
                        <input type="text" 
                        value={state.busname}
                        onChange={(e) => setState(
                            (state) => { 
                                return {...state, busname: e.target.value}
                            })
                        }/>
                    </label>
                </div>
                <div className={style.formInput}>
                    <label htmlFor="">
                        <span>Type Of Business (Optional)</span>
                        <select name="type" id="type">
                            <option value="" selected="selected"></option>
                            <option value="Information & Technology">Information & Technology</option>
                            <option value="Finance">Finance</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="Marketing">Marketing</option>
                        </select>
                        <img src={down} alt="" />
                    </label>
                    <label htmlFor="">
                        <span>Size Of Business (Optional)</span>
                        <select name="size" id="size">
                            <option value="" selected="selected"></option>
                            <option value="0-10">0 - 10</option>
                            <option value="11-30">11 - 30</option>
                            <option value="31-50">31 - 50</option>
                            <option value="More">More</option>
                        </select>
                        <img src={down} alt="" />
                    </label>
                </div>
                <div className={style.formInput}>
                    <label htmlFor="">
                        <span>Your Role/Title (Optional)</span>
                        <input type="text" 
                        value={state.role}
                        onChange={(e) => setState(
                            (state) => { 
                                return {...state, role: e.target.value}
                            })
                        }/>
                    </label>
                    <label htmlFor="">
                        <span>Annual Web Development Budget*</span>
                        <select name="budget" className={style.budget}>
                            <option value="" selected="selected"></option>
                            <option value="50-100">50k - 100k</option>
                            <option value="100-200">100k - 200k</option>
                            <option value="200-500">200k - 500k</option>
                            <option value="More">More</option>
                        </select>
                        <img src={down} alt="" />
                    </label>
                </div>
                <div className={style.buttonCont}>
                    <button className={style.submitButton} onClick={() => navigate('/dashboard/overview')}>
                            Register
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
