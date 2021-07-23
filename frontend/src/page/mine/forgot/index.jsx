import React from 'react'
import style from './index.module.scss'
import { forgot, sendCode2 } from "network/network.js"
import NavBar from 'components/navBar'
import youla from 'assets/icon/youlawhite.png'
export default function Index(props) {
  const [email, SetEmail] = React.useState('')
  const [errmsg, SetErrmsg] = React.useState('')
  const goBack = () => {
    // console.log(props);
    props.history.goBack();
  }
  const GetCode = async () => {
    const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/g;
    if (reg.test(email)) {
      // this.$loading.show()
      let res = await forgot(email)
      // this.$loading.hide()
      console.log(res);
      if (res.data.status === "200") {
        let res2 = await sendCode2(email)
        const { status, result } = res2.data
        if (status === "200") {
          props.history.replace('/verificate', { email: email, code: result.code, type: "old" })
        }
        else {
          SetErrmsg("* " + result);
        }
      }
      else {
        SetErrmsg("* " + res.data.result);
      }
    }
    else {
      SetErrmsg("* Invalid Email");
    }
  }
  return (
    <div className={style.service_container}>
      <NavBar left={<div className={style.back} onClick={goBack}><img src={youla} alt="" /></div>}
        center={<div>Forgot</div>} />
      <div className={style.login_content}>
        <div className={style.title}>Forgot your password?</div>
        <input onChange={(e) => SetEmail(e.target.value)} type="text" className={style.input_text} placeholder="Enter your email" />
        <button className={style.submit} type="submit" onClick={GetCode}>Get Verification Code</button>
        <div className={style.errmsg}>{errmsg}</div>
      </div>
    </div>
  )
}
