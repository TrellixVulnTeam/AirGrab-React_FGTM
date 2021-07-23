import React from 'react'
import style from './index.module.scss'
import { sendCode, sendCode2 } from "network/network.js"
import NavBar from 'components/navBar'
import youla from 'assets/icon/youlawhite.png'
import { Input, Button } from 'antd'
export default function Index(props) {
  const [errmsg, setErrmsg] = React.useState('')
  const [server, SetServer] = React.useState('')
  const [code, setCode] = React.useState('')
  const [disable, setDisable] = React.useState(false)
  const [show, setShow] = React.useState('Resend')

  React.useEffect(() => {
    SetServer(props.location.state.code)
    // console.log(props);
  }, [])
  const resend = async (e) => {
    setDisable(true)
    let time = 10
    const timer = setInterval(() => {
      time--
      if (time <= 0) {
        clearInterval(timer)
      }
      setShow('Resend After ' + time + 's')
    }, 1000)
    setTimeout(() => {
      setDisable(false)
      setShow('Resend')
    }, 10000)
    let res = {}
    const { state } = props.location
    if (state.type === 'new') {
      res = await sendCode(state.email)
    }
    else {
      res = await sendCode2(state.email)
    }

    SetServer(res.data.result.code)
  }
  const handleCode = (e) => {
    setCode(e.target.value)
  }
  const handleSubmit = () => {
    const { state } = props.location
    console.log(code);
    console.log(server);
    if (code === server) {
      props.history.replace('/password', { type: state.type, email: state.email })
    }
    else {
      setErrmsg('* Invalid Code')
    }

  }
  const goBack = () => {
    props.history.goBack()
  }
  return (
    <div className={style.service_container}>
      <NavBar left={<div className={style.back} onClick={goBack}><img src={youla} alt="" /></div>} center={<div> Verfication</div >} />
      <div className={style.login_content}>
        <div className={style.title}>Enter Verification Code</div>
        <div className={style.subtitle}>Code sent to {props.location.state.email}</div>
        <div className={style.input}>
          <Input type="tel" maxLength={6} placeholder="6 code number" onChange={handleCode}></Input>
          <Button type="primary" onClick={resend} disabled={disable}>{show}</Button>
        </div>
        <Button type="primary" className={style.submit} onClick={handleSubmit}>Submit</Button>
        <div className={style.errmsg}>{errmsg}</div>
      </div>
    </div >
  )
}
