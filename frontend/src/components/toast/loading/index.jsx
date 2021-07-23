import React from 'react'
import style from './index.module.scss'
import loading from 'assets/icon/toast/loading.png'
export default function index(props) {
  return (
    <div className={style.loading_container}>
      <div className={style.loading_box}>
        <img className={style.loading_img} src={loading} alt="" />
        <span className={style.loading_txt}>{props.content}</span>
        {/* <span className={style.loading_txt}>gg</span> */}
      </div>
    </div>
  )
}
