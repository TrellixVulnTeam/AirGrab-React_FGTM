import React from 'react'
import TabBar from 'components/tabBar'
import NavBar from 'components/navBar'
import style from './index.module.scss'
// import store from 'redux/store'
import { connect } from 'react-redux'
import { addUser } from 'redux/actions/user'
import Warning from 'components/toast/warning'
import setting from 'assets/icon/setting.png'
import userpic from 'assets/icon/jieji/userpic.png'
import client from 'assets/icon/jieji/client.png'
import youla from 'assets/icon/jieji/youla.png'
import order from 'assets/icon/jieji/order.png'
function Index(props) {
  // console.log(props);
  const [toast, SetToast] = React.useState(false)
  // console.log(store.getState().name);
  const Logout = () => {
    props.add({})
  }
  const goLogin = () => {
    props.history.push('/login')
  }
  const goRegister = () => {
    props.history.push('/register')
  }
  const goOrder = () => {
    props.history.replace('/order')
  }
  const goSetting = () => {
    if (props.user.name) {
      props.history.push('/setting')
    }
    else {
      SetToast(true)
      setTimeout(() => {
        SetToast(false)
      }, 1000)
    }

  }
  // const frag = store.getState().name ?
  const frag = props.user.name ?
    (<div>
      <div className={style.profile}>
        <img className={style.user_pic} src={userpic} alt="" />
        <div>
          {/* <span>{store.getState().name}</span>
          <span>{store.getState().email}</span> */}
          <span>{props.user.name}</span>
          <span>{props.user.email}</span>
        </div>
      </div>
      <div className={style.logout_btn} onClick={Logout}>Logout</div>
    </div>) : (<div>
      <div className={style.login_btn} onClick={goLogin}>Login</div>
      <div className={style.register_btn} onClick={goRegister}>Register</div>
    </div>)
  return (
    <div className={style.mine_container}>
      <NavBar center={<div> Mine</div >} right={< div className={style.setting} onClick={goSetting}>
        <img src={setting} alt="" /></div>} />
      <div className={style.mine_content}>
        <div className={style.box_1}>
          {frag}
        </div>
        <div className={style.mine_box}>
          <div className={style.selection}>
            <img className={style.client_img} src={client} alt=""></img>
            <button className={style.client}>Contact Customer Service</button>
            <img className={style.mine_icon_youla} src={youla} alt=""></img>
          </div>
          <div className={style.selection}>
            <img className={style.order_img} src={order} alt=""></img>
            <button className={style.client} onClick={goOrder}>My Orders</button>
            <img className={style.mine_icon_youla} src={youla} alt=""></img>
          </div>
        </div >
      </div >
      <TabBar page='mine' />
      {toast ? <Warning content='Please login first' /> : ''}

    </div >
  )
}
export default connect(
  state => state,
  { add: addUser }
)(Index)