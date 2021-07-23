import React from 'react'
import NavBar from 'components/navBar'
import style from './index.module.scss'
import whiiteyoula from 'assets/icon/youlawhite.png'
import profile_detail from 'assets/icon/profile_detail.png'
import youla from 'assets/icon/jieji/youla.png'
import security from 'assets/icon/security.png'
export default function index(props) {
  const goBack = () => {
    // console.log(props);
    props.history.goBack();
  }
  const goDetail = () => {
    props.history.push('/profileDetail')
  }
  const goSecurity = () => {
    props.history.push('/security')
  }
  return (
    <>
      <NavBar left={<div className={style.back} onClick={goBack}><img src={whiiteyoula} alt="" /></div>}
        center={<div>Setting</div>} />
      <div className={style.mine_box}>
        <div className={style.selection} onClick={goDetail}>
          <img className={style.client_img} src={profile_detail} alt=""></img>
          <button className={style.client}>Profile Detail</button>
          <img className={style.mine_icon_youla} src={youla} alt=""></img>
        </div>
        <div className={style.selection} onClick={goSecurity}>
          <img className={style.order_img} src={security} alt=""></img>
          <button className={style.client}>Account Security</button>
          <img className={style.mine_icon_youla} src={youla} alt=""></img>
        </div>
      </div >
    </>
  )
}
