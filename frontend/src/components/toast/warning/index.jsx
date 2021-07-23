import React from 'react'
import style from './index.module.scss'
import error from 'assets/icon/toast/error.png'
export default function index(props) {
  return (
    <div className={style.background_box}>
      <div className={style.toast_container}>
        <img className={style.loading_img} src={error} alt="" />
        <span className={style.loading_txt}>{props.content}</span>
        {/* <span className={style.loading_txt}>gg</span> */}
      </div>
    </div>
  )
}
