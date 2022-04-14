import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import navLinks from '../../dashboard/utils/navLinks'
import style from './../../styles/dashboard/sidebar.module.css'
import dp from './../../assets/Profile Picture.png'
import group from './../../assets/group.png'
import enter from './../../assets/enterside.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <div>
      <div className={style.dp}>
        <img src={dp} alt="" />
        <p>
        <span>Sandy Workspace <FontAwesomeIcon icon={ faCaretDown } /> </span>
        <span> Ref. ID: oluwatobi19 </span>
        <button className={style.referalButton}>Copy referral link</button>
        </p>
      </div>
      <div className={style.heading}>
        <h3>Main Menu</h3>
      </div>
      <div className={style.links}>
                {
                    navLinks.map(links => {
                        if(location.pathname === links.to) {
                            return (
                                <button className={style.active}>
                                    <img src={links.activeIcon} alt="" />
                                    <span>{links.name}</span>
                                </button>
                            )
                        } else {
                             return (
                                <button className={style.normal} onClick={
                                        ()=> {
                                            navigate(links.to)
                                        } 
                                    }>
                                    <img src={links.normalIcon} alt="" />
                                    <span>{links.name}</span>
                                </button>)
                        } 
                    })
                }
            </div>
            <div className={style.invite}>
              <p>Invite your friends to build  thier next project on <b>ULLWEB</b></p>
              <nav> <img src={group} alt="" /></nav>
              <label htmlFor="">
                <input type="text"  placeholder='Enter Email Address'/>
                <img src={enter} alt="" />
              </label>
            </div>
    </div>
  )
}
