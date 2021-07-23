import React from 'react'
import { withRouter } from 'react-router-dom'
import style from './index.module.scss'
import plane1 from 'assets/icon/jieji/plane_1.png'
import plane2 from 'assets/icon/jieji/plane_2.png'
import car1 from 'assets/icon/jieji/car_1.png'
import car2 from 'assets/icon/jieji/car_2.png'
import { connect } from 'react-redux'
import Model from 'components/showModel'
function Index(props) {
  const [model, SetModel] = React.useState(false)
  // console.log(props);
  const modelConfirm = () => {
    SetModel(false)
    props.history.push("/mine")
  }
  const modelCancel = () => {
    SetModel(false)
  }
  const goto_jieji = () => {
    if (props.user.email) {
      props.history.push("/jieji/pickup")
    }
    else {
      SetModel(true)
    }
    // console.log(props);
  }
  const goto_songji = () => {
    if (props.user.email) {
      props.history.push("/jieji/dropoff")
    }
    else {
      SetModel(true)
    }
  }
  return (
    <div className={style.box_1}>
      <div className={style.nav}>
        <div onClick={goto_jieji} className={`${style.function} ${style.jieji}`}>
          <img src={plane2} alt=""></img>
          <div>Pick-up</div>
        </div>
        <div onClick={goto_songji} className={`${style.function} ${style.songji}`}>
          <img src={plane1} alt=""></img>
          <div>Drop-off</div>
        </div>
        <div className={`${style.function} ${style.dache}`}>
          <img src={car1} alt=""></img>
          <div>Chartered</div>
        </div>
        <div className={`${style.function} ${style.songhuo}`}>
          <img src={car2} alt=""></img>
          <div>Delivery</div>
        </div>
      </div>
      {model ? <Model content='Please Login First' confirm={modelConfirm} cancel={modelCancel} /> : ''}
    </div>
  )
}
export default withRouter(connect(
  state => state,
  {})(Index))
