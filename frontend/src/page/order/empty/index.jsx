import React from 'react'
import empty_3 from 'assets/icon/jieji/empty_3.png'
import style from './index.module.scss'
export default function index() {
  return (
    <div className={style.empty}>
      <img className={style.icon_empty} src={empty_3} alt=""></img>
      <div className={style.text_empty}>It`s Empty</div>
    </div>
  )
}
