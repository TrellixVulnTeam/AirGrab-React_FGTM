import React from 'react'
import style from './index.module.scss'
import Loading from 'components/toast/loading'
import NavBar from 'components/navBar'
import { login, modifyPw } from "network/network.js"
import youla from 'assets/icon/youlawhite.png'
import { connect } from 'react-redux'
function Index(props) {
  const [ishide, setHide] = React.useState(true)
  const [inputType, setInputType] = React.useState('password')
  const [color, setColor] = React.useState(0)
  const [currentpw, setCurrentpw] = React.useState('')
  const [newpw, setNewpw] = React.useState('')
  const [confirmpw, setConfirmpw] = React.useState('')
  const [errmsg, SetErrmsg] = React.useState('')
  const [loading, SetLoading] = React.useState(false)
  const goBack = () => {
    props.history.goBack();
  }
  const save = async () => {
    if (newpw === confirmpw) {
      if (color < 2) {
        SetErrmsg("* Your password is too week")
      }
      else {
        console.log();
        SetLoading(true)
        const res = await login({ email: props.user.email, password: currentpw })
        console.log(res);
        SetLoading(false)
        if (res.data.status === "200") {
          SetLoading(true)
          await modifyPw(props.user.email, newpw)
          SetLoading(false)

          // console.log(res);
          // this.$toast.show("Edit Password Successful")
          props.history.replace("/mine")
        } else {
          SetErrmsg("* Sorry, old password is wrong")
        }
      }
    }
    else {
      SetErrmsg("* The two passwords you typed do not match")
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
        center={<div>Security</div>} />
      <div className={style.mine_box}>
        <div className={style.selection}>
          <span>Current Password: </span>
          <input type={inputType} onChange={(e) => setCurrentpw(e.target.value)} placeholder="(6-20 characters)" />
          <span className={`${style.input_icon} ${style.one} ${ishide ? style.hide : style.visable}`} onClick={unHide}></span>
        </div>
        <div className={style.selection}>
          <span className={style.second_span}>New Password: </span>
          <input type={inputType} onChange={(e) => setNewpw(e.target.value)} placeholder="(6-20 characters)" onInput={checkStrength} />
        </div>
        <div className={style.color_box}>
          <div className={color === 1 ? style.red : ''}>Week</div>
          <div className={color === 2 ? style.yellow : ''}>So-so</div>
          <div className={color === 3 ? style.green : ''}>Good</div>
        </div >
        <div className={style.selection}>
          <span>Confirm Password: </span>
          <input type={inputType} onChange={(e) => setConfirmpw(e.target.value)} placeholder="(6-20 characters)" />
        </div>
        <div className={style.errmsg}>{errmsg}</div>
      </div >
      <div className={style.save} onClick={save} > Save</div >
      {loading ? <Loading /> : ''}
    </div >
  )
}
export default connect(
  state => state,
  {}
)(Index)