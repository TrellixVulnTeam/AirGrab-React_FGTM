import React from 'react'
import style from './index.module.scss'
import { Link } from 'react-router-dom'
import pay from 'assets/icon/jieji/wechat_pay.png'
import car from 'assets/icon/jieji/car_4.png'
import pack from 'assets/icon/jieji/package.png'
import safe from 'assets/icon/jieji/safe.png'


export default function index() {
  const ToService = () => {

  }
  return (
    <div className={style.box_2} onClick={ToService} >
      <div className={style.box_title}>
        <div className={style.icon_1}></div>
        Service advantage
        <Link to='/servicead' className={style.more}>
          More
          <div className={style.square}></div>
        </Link>
      </div>

      <div className={style.box_2_content}>
        <Link to='/servicead' className={style.content_nav}>
          <img src={pay} alt=""></img>
          <div className={style.nav_text}>
            <div className={style.nav_title}>Wechat Pay</div>
            <div className={style.nav_span}>Without other charge</div>
          </div>
        </Link>

        <Link to='/servicead' className={style.content_nav}>
          <img src={car} alt=""></img>
          <div className={style.nav_text}>
            <div className={style.nav_title}>Chinese Driver</div>
            <div className={style.nav_span}>Team of student</div>
          </div>
        </Link>

        <Link to='/servicead' className={style.content_nav}>
          <img src={pack} alt=""></img>
          <div className={style.nav_text}>
            <div className={style.nav_title}>Package Price</div>
            <div className={style.nav_span}>No other charge fee</div>
          </div>
        </Link>

        <Link to='/servicead' className={style.content_nav}>
          <img src={safe} alt=""></img>
          <div className={style.nav_text}>
            <div className={style.nav_title}>Service Assurance</div>
            <div className={style.nav_span}>24h online service</div>
          </div>
        </Link>
      </div>
    </div >
  )
}
