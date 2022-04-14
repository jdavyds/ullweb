import React from 'react'
import logo from './../../assets/logoblue.png'
import bars from './../../assets/faSort.png'
import search from './../../assets/search.png'
import enter from './../../assets/enter.png'
import dp from './../../assets/Profile Picture.png'
import style from './../../styles/dashboard/nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCaretDown, faEnvelope, faFileInvoice, faGear, faMessage, faUserGroup } from '@fortawesome/free-solid-svg-icons'
export default function Nav() {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={style.searchNav}>
        <img src={bars} alt="" />
        <span>Overview</span>
        <div>
          <input type="text" placeholder='Search here' />
          <img src={search} alt="" className={style.placeholder} />
          <button><img src={enter} alt="" /></button>
        </div>
      </div>
      <div className={style.controlCont}>
        <FontAwesomeIcon className={style.icon} icon={ faBell } />
        <FontAwesomeIcon className={style.icon} icon={ faEnvelope } />
        <FontAwesomeIcon className={style.icon} icon={ faGear } />
        <FontAwesomeIcon className={style.icon} icon={ faFileInvoice } />
        <FontAwesomeIcon className={style.icon} icon={ faUserGroup } />
        <FontAwesomeIcon className={style.icon} icon={ faMessage } />
      </div>
      <div className={style.dp}>
        <img src={dp} alt="" />
        <FontAwesomeIcon icon={ faCaretDown } />
      </div>
    </div>
  )
}
