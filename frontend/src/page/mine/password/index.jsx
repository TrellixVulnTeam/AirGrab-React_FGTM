import React from 'react'
import style from './index.module.scss'
import { signUp, modifyPw } from "network/network.js"
import NavBar from 'components/navBar'
import Loading from 'components/toast/loading'
// import Success from 'components/toast/success'
import youla from 'assets/icon/youlawhite.png'
export default function Index(props) {
  const [ishide, setHide] = React.useState(true)
  const [loading, SetLoading] = React.useState(false)
  // const [success, SetSuccess] = React.useState(false)

  const [inputType, setInputType] = React.useState('password')
  const [color, setColor] = React.useState(0)
  const [newpw, setNewpw] = React.useState('')
  const [confirmpw, setConfirmpw] = React.useState('')
  const [errmsg, setErrmsg] = React.useState('')
  const goBack = () => {
    props.history.goBack();
  }
  const register = async () => {
    console.log(props);
    const { type, email } = props.location.state
    if (newpw === confirmpw) {
      if (color < 2) {
        setErrmsg("* Your password is too week")
      }
      else {
        if (type === 'new') {
          SetLoading(true)
          await signUp(email, newpw)
          SetLoading(false)
          props.history.replace('/login')
        }
        else {
          SetLoading(true)
          await modifyPw(email, newpw)
          SetLoading(false)
          props.history.replace('/login')
        }
      }
    }
    else {
      setErrmsg("* The two passwords you typed do not match")
    }
  }
  const unHide = (e) => {
    setHide(!ishide)
    if (ishide === true) {
      setInputType("text")
    }
    else {
      setInputType("password")
    }
  }
  const checkStrength = () => {
    if (newpw.length < 6) {
      setColor(1)
    }
    else {
      var modes = 0;
      //正则表达式验证符合要求的
      if (/\d/.test(newpw)) modes++; //数字
      if (/[a-z]/.test(newpw)) modes++; //小写
      if (/[A-Z]/.test(newpw)) modes++; //大写  
      if (/\W/.test(newpw)) modes++; //特殊字符

      if (modes === 1) {
        setColor(1)
      }
      else if (modes === 2) {
        setColor(2)
      }
      else {
        setColor(3)
      }
    }
  }
  return (
    <div>
      <NavBar left={<div className={style.back} onClick={goBack}><img src={youla} alt="" /></div>}
        center={<div>New Password</div>} />
      <div className={style.login_content}>
        <div className={style.title}>Enter New Password </div>
        <input type={inputType} onChange={(e) => setNewpw(e.target.value)} placeholder="Password" className={style.input_text} onInput={checkStrength} />
        <span className={`${style.input_icon} ${style.one} ${ishide ? style.hide : style.visable}`} onClick={unHide}></span>

        <div className={style.color_box}>
          <div className={color === 1 ? style.red : ''}>Week</div>
          <div className={color === 2 ? style.yellow : ''}>So-so</div>
          <div className={color === 3 ? style.green : ''}>Good</div>
        </div >

        <input type={inputType} onChange={(e) => setConfirmpw(e.target.value)} className={style.input_text} placeholder="Confirm Password" />
        <div className={style.errmsg}>{errmsg}</div>
      </div >
      <div className={style.submit} onClick={register}>Register</div >
      <div className={style.tip}>* Password at least 6 charracters</div>
      {loading ? <Loading /> : ''}
      {/* {success ? <Success /> : ''} */}
    </div >
  )
}
