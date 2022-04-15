import React from 'react'
import style from './../../styles/dashboard/overview.module.css'
import intro from './../../assets/intro.png'
import bars from './../../assets/bars.png'
import fre from './../../assets/fre.png'
import arr from './../../assets/arr.png'
import sad from './../../assets/Sad illustration.png'
import chart from './../../assets/Group.png'
import icon1 from './../../assets/Rectangle 19.png'
import icon2 from './../../assets/Rectangle 20.png'
import icon3 from './../../assets/Rectangle 21.png'
import icon4 from './../../assets/Rectangle 22.png'
import icon5 from './../../assets/Rectangle 23.png'

export default function Overview() {
  return (
    <div className={style.overview}>
      <div className={style.project}>
        <img src={intro} alt="" />
        <div>
          <nav>
            <span>All Projects</span>
            <p><b>0</b><img src={bars} alt="" /></p>
            <p>View all <img src={arr} alt="" /> </p>
          </nav>
          <nav>
            <span>Pending Projects</span>
            <p><b>0</b><img src={bars} alt="" /></p>
            <p>View all <img src={arr} alt="" /> </p>
          </nav>  
          <nav>
            <span>Ongoing Projects</span>
            <p><b>0</b><img src={fre} alt="" /></p>
            <p>View all <img src={arr} alt="" /> </p>
          </nav>
          <nav>
            <span>Completed Projects</span>
            <p><b>0</b><img src={fre} alt="" /></p>
            <p>View all <img src={arr} alt="" /> </p>
          </nav>
        </div>
      </div>
      <div className={style.summary}>
        <div>
          <span>Current Project</span>
          <img src={sad} alt="" />
          <p>You have no current project yet</p>
          <button>+ New Project</button>
        </div>
        <div>
          <span>Total Payment Made</span>
          <nav>
            <img src={chart} alt="" />
            <ul>
              <li><img src={icon1} alt="" />Project Manager (0%)</li>
              <li><img src={icon2} alt="" />UI/UX Designer (0%)</li>
              <li><img src={icon3} alt="" />Front-End Developer (0%)</li>
              <li><img src={icon4} alt="" />Back-End Developer (0%)</li>
              <li><img src={icon5} alt="" />Others (0%)</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
