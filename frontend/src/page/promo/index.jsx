import React from 'react'
import NavBar from 'components/navBar'
import TabBar from 'components/tabBar'
import style from './index.module.scss'
import gift from 'assets/icon/jieji/gift_empty.png'
export default function index() {
  return (
    <div>
      <NavBar center={<div>Promotion</div>} />
      <div className={style.empty}>
        <img className={style.icon_empty} src={gift} alt=""></img>
        <div className={style.text_empty}>No promotion at this moment</div>
      </div>
      <TabBar page='promo' />
    </div>
  )
}
