import React, { useState } from 'react'
import arr from './../../assets/arr.png'
import invite from './../../assets/message-notif.png'
import reg from './../../assets/note.png'
import earn from './../../assets/wallet.png'
import fb from './../../assets/facebook.png'
import twi from './../../assets/twitter.png'
import li from './../../assets/linkedin.png'
import ne from './../../assets/Vector.png'
import bronze from './../../assets/bronze.png'
import gold from './../../assets/gold.png'
import cancel from './../../assets/cancel.svg'
import platinum from './../../assets/platinum.png'
import copy from './../../assets/copy.png'
import snipp from './../../assets/Frame 92.png'
import style from './../../styles/dashboard/referral.module.css'
import Modal from '../Modal'
export default function Referrals() {
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')
  return (
    <div className={style.referral}>
      <div className={style.earn}>
        <h2>Referrals/Affiliates</h2>
        <p>Invite your friends to ULLWEB and earn when your invites  pays for a services or earns as a developer</p>
        <button onClick={() => {
          setShowModal(true)
          setModalType('earnings')
        }}>
          See our referral earnings <img src={arr} alt="" />
        </button>
      </div>
      <div className={style.process}>
        <nav>
          <span>
            <img src={invite} alt="" />
          </span>
          <b>Send Invitations</b>
          <p>Send your referral link to your friends and let them know how cool ULLWEB is!</p>
        </nav>
        <nav>
          <span>
            <img src={reg} alt="" />
          </span>
          <b>Registration</b>
          <p>Get them to register on ULLWEB  and pay for a service</p>
        </nav>
        <nav>
          <span>
            <img src={earn} alt="" />
          </span>
          <b>Earn on ULLWEB</b>
          <p>You earn when your invites pays  for a service or earns as a developer</p>
        </nav>
      </div>
      <div className={style.share}>
        <h3>Share your referral Link</h3>
        <p>Share your referral link by copying and sending it or sharing it to your social media pages.</p>
        <div>
          <label htmlFor="">
            <input type="text" />
            <button>Copy link</button>
          </label>
          <button>
            <img src={fb} alt="" />
          </button>
          <button>
            <img src={twi} alt="" />
          </button>
          <button>
            <img src={li} alt="" />
          </button>
        </div>
      </div>
      <div className={style.invite}>
        <h3>Invite your friends</h3>
        <p>Enter your friends email address and send them an invite to join ULLWEB</p>
        <label htmlFor="">
          <input type="email" placeholder='Enter Email Address' />
          <button>Send</button>
        </label>
      </div>
      <div className={style.snippet}>
        <h3>Code Snippets</h3>
        <p>You can add your referral code snippets to your website and have a ads banner showing on your wesite</p>
        <button onClick={() => {
          setShowModal(true)
          setModalType('snippets')
        }} >Get Code Snippets</button>
      </div>
      {
             showModal && (
                    <Modal setShowModal={setShowModal} Component={
                        modalType === 'earnings' ? Earnings  : modalType === 'snippets' ? Snippet : null
                    }/>
                )  
                
            }
    </div>
  )
}
const Earnings = ({setShowModal}) => {
  return(
    <div className={style.earnModal}>
      <button onClick={() => setShowModal(false)} className={style.cancel}>
                <img src={cancel} alt="" />
      </button>
      <h1>Our Referral Earnings</h1>
      <div>
        <h3>Developer Referral</h3>
        <p><img src={ne} alt="" /> Earn 2.5% of the earnings of any developer that you refer for 12 months</p>
      </div>
      <div>
        <h3>Business Referral</h3>
        <nav>
          <img src={bronze} alt="" />
          <img src={gold} alt="" />
          <img src={platinum} alt="" />
        </nav>
      </div>
    </div>
  )
}
const Snippet = ({setShowModal}) => {
  return(
    <div className={style.snippetModal}>
      <button onClick={() => setShowModal(false)} className={style.cancel}>
                <img src={cancel} alt="" />
      </button>
      <h1>Referalls Code Snippets</h1>
      <div>
        <nav>
          <img src={snipp} alt="" />
          <p>
            <img src={copy} alt="" />Copy Snippet code
          </p>
        </nav>
        <nav>
          <img src={snipp} alt="" />
          <p>
            <img src={copy} alt="" />Copy Snippet code
          </p>
        </nav>
        <nav>
          <img src={snipp} alt="" />
          <p>
            <img src={copy} alt="" />Copy Snippet code
          </p>
        </nav>
        <nav>
          <img src={snipp} alt="" />
          <p>
            <img src={copy} alt="" />Copy Snippet code
          </p>
        </nav>
        <nav>
          <img src={snipp} alt="" />
          <p>
            <img src={copy} alt="" />Copy Snippet code
          </p>
        </nav>
        <nav>
          <img src={snipp} alt="" />
          <p>
            <img src={copy} alt="" />Copy Snippet code
          </p>
        </nav>
      </div>
    </div>
  )
}
