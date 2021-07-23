import React from 'react'
import NavBar from 'components/navBar'
import style from './index.module.scss'
import { sendCode } from "network/network.js"
import youla from 'assets/icon/youlawhite.png'
import Loading from 'components/toast/loading'

export default function Index(props) {
  const [toast, SetToast] = React.useState(false)
  const [email, SetEmail] = React.useState('')
  const [errmsg, SetErrmsg] = React.useState('')
  const handleEmail = (e) => {
    SetEmail(e.target.value);
  }
  const goBack = () => {
    props.history.goBack();
  }
  const goLogin = () => {
    props.history.replace('/login')
  }
  const GetCode = async () => {
    const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/g;
    if (reg.test(email)) {
      SetToast(true)
      let res = await sendCode(email)
      SetToast(false)

      // console.log(res);
      const { status, result } = res.data
      if (status === "200") {
        props.history.replace('/verificate', { email: email, code: result.code, type: "new" })
      }
      else {
        SetErrmsg("* " + result);
      }
    }
    else {
      SetErrmsg("* Invalid Email");
    }
  }
  return (
    <div className={style.service_container}>
      <NavBar left={<div className={style.back} onClick={goBack}><img src={youla} alt="" /></div>}
        center={<div>Register</div>} right={<div className={style.right} onClick={goLogin}>Login</div>} />
      <div className={style.login_content}>
        <div className={style.title}>Create a new account</div>
        <input onChange={handleEmail} type="text" className={style.input_text} placeholder="Email" />
        <button className={style.submit} type="submit" onClick={GetCode}>Get Verification Code</button >
        <div className={style.errmsg}>{errmsg}</div>
      </div>
      {toast ? <Loading /> : ''}
    </div>
  )
}
