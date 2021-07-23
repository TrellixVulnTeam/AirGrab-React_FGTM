import React from 'react'
import NavBar from 'components/navBar'
import style from './index.module.scss'
import Loading from 'components/toast/loading'
import youla from 'assets/icon/youlawhite.png'
import { login } from "network/network.js"
import { addUser } from 'redux/actions/user'

import { connect } from 'react-redux'
function Index(props) {
  // console.log(props);
  const [toast, SetToast] = React.useState(false)
  const [errmsg, SetErrmsg] = React.useState('')
  const [ishide, setHide] = React.useState(true)
  const [email, SetEmail] = React.useState('')
  const [password, SetPass] = React.useState('')

  const goBack = () => {
    props.history.goBack();
  }
  const goRegister = () => {
    props.history.replace('/register')
  }
  const unHide = () => {
    setHide(!ishide)
  }
  const goForgot = () => {
    props.history.push('/forgot')
  }
  const handleLogin = async () => {
    const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/g;
    if (reg.test(email)) {
      SetToast(true)
      const res = await login({ email, password })
      const { status, result } = res.data
      SetToast(false)
      if (status === "200") {
        props.add(result)
        // store.dispatch(addUser(result));
        // console.log(props);
        props.history.replace("/mine")
        // this.$store.commit('changeDoingKey')
        // this.$store.commit('changeDoneKey')

      } else {
        SetErrmsg(result)
      }
    }
    else {
      SetErrmsg("* Please enter correct email")
    }
  }

  return (
    <div className={style.service_container}>
      <NavBar left={<div className={style.back} onClick={goBack}><img src={youla} alt="" /></div>}
        center={<div>Login</div>} right={<div className={style.right} onClick={goRegister}>SignUp</div>} />
      <div className={style.login_content}>
        <div className={style.title}>Email / Password</div>
        <input onChange={(e) => SetEmail(e.target.value)} type="text" className={style.input_text} placeholder="Email" />
        <input onChange={(e) => SetPass(e.target.value)} type={ishide ? 'password' : 'text'} className={style.input_text} placeholder="Password" />
        <span className={`${style.input_icon} ${style.one} ${ishide ? style.hide : style.visable}`} onClick={unHide}></span>
        <div className={style.new} onClick={goRegister}>Don`t have a account?</div>
        <div className={style.forgot} onClick={goForgot}>Forgot password</div>

        <div className={style.errmsg}>{errmsg}</div>
      </div >
      <button className={style.submit} type="submit" onClick={handleLogin} > Login</button >
      {toast ? <Loading /> : ''}
    </div>
  )
}
export default connect(
  state => state,
  {
    add: addUser
  }
)(Index)