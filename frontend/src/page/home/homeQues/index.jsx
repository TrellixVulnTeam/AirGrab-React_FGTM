import React from 'react'
import { Link } from 'react-router-dom'
import search from 'assets/icon/jieji/search.png'
import car from 'assets/icon/jieji/car_bg.png'
import style from './index.module.scss'
export default function index(props) {
  const toService = () => {

  }
  return (
    <div className={style.box_3} onClick={toService}>
      <div className={style.box_title}>
        <div className={style.icon_1}></div>
        FAQ
        <Link to='/faq' className={style.more}>
          More
          <div className={style.square}></div>
        </Link>
      </div>
      <Link to='/faq' className={style.box_3_search}>
        <img src={search} alt=""></img>
        <span>Is there any extra charge for extra luggage?</span>
      </Link>

      <Link to='/faq' className={style.box_3_content}>
        <img src={car} alt=""></img>
        <span>Q: Can I cancel my order?</span>
        <span>Q: Can I modify my order？</span>
        <span>Q: Can I choose car?</span>
        <span>...</span>
      </Link>
    </div >
  )
}
