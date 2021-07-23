import React from 'react'
import style from './index.module.scss'
import dotOne from 'assets/icon/jieji/dot_one.png'
import dotTwo from 'assets/icon/jieji/dot_two.png'
import clock from 'assets/icon/jieji/clock.png'
import youla from 'assets/icon/youlawhite.png'
import NavBar from 'components/navBar'
import { connect } from 'react-redux'
import { newOrder } from "network/network.js"
import Loading from 'components/toast/loading'
import Success from 'components/toast/success'
function Index(props) {
  const [loading, SetLoading] = React.useState(false)
  const [success, SetSuccess] = React.useState(false)

  const new_order = props.location.state
  // console.log(new_order);

  const handlePay = async () => {
    const confirm_order = {
      order_id: createRandom(),
      uname: props.user.name,
      email: props.user.email,
      price: 35,
      ...new_order
    }
    SetLoading(true)
    await newOrder(confirm_order)
    SetLoading(false)
    SetSuccess(true)
    setTimeout(() => {
      SetSuccess(false)
      props.history.replace('/order')
    }, 1000)
    // console.log(confirm_order);
  }
  const createRandom = () => {
    //自定义订单编号生成规则   由YYYYMMDD(年月日) + 六位随机数
    let currDate = new Date();
    let year = currDate.getFullYear();
    let month = currDate.getMonth() + 1 < 10 ? "0" + (currDate.getMonth() + 1) : currDate.getMonth() + 1;
    let day = currDate.getDate() < 10 ? "0" + currDate.getDate() : currDate.getDate();

    //获取年月日
    let date = year + '' + month + '' + day; //20190524
    let num = parseInt((Math.random() * 9 + 1) * 100000);
    let orderCode = 'BC' + date + num
    // console.log(orderCode)
    return orderCode;
  }

  const goBack = () => {
    props.history.goBack();
  }

  return (
    <div>
      <NavBar left={<div className={style.back} onClick={goBack}><img src={youla} alt="" /></div>}
        center={<div>Confirm Order</div>} />
      <div className={style.confirm_content}>
        <div className={style.title}>
          <div className={style.type}>{new_order.type}</div>
          <div className={style.status}>{new_order.status}</div>
        </div>
        <div className={style.head}>

          <div className={style.order_from}>
            <span><img className={style.dot} src={dotTwo} alt="" /></span>
            <div>{new_order.add_from}</div>
          </div>
          <div className={style.order_to}>
            <span><img className={style.dot} src={dotOne} alt="" /></span>
            <div>{new_order.add_to}</div>
          </div>
          <div className={style.date_time}>
            <img className={style.icon_clock} src={clock} alt="" />
            {new_order.time}
          </div>
        </div >
        <div className={style.body}>
          <div className={style.left_body}>
            <div>Name</div>
            <div>Contact</div>
            <div>People</div>
            <div>Luggages</div>
            <div>Others</div>
          </div>
          <div className={style.right_body}>
            <div className={style.name}>{props.user.name}</div>
            <div className={style.contact}>{new_order.contact}</div>
            <div className={style.people_num}>{new_order.people_number}</div>
            <div className={style.luggage}>{new_order.luggage}</div>
            <div className={style.add}>{new_order.add}</div>
          </div>
        </div>
        <button className={style.confirm} onClick={handlePay}>Pay Order</button>
      </div>
      {loading ? <Loading /> : ''}
      {success ? <Success content='Order Paid' /> : ''}
    </div >


  )
}
export default connect(
  state => state,
  {}
)(Index)