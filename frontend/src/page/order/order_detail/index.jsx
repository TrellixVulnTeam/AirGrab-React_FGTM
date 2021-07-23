import React from 'react'
import style from './index.module.scss'
import NavBar from 'components/navBar'
import Loading from 'components/toast/loading'
import Success from 'components/toast/success'
import { deleteOrder, finishOrder } from "network/network.js"

import youla from 'assets/icon/youlawhite.png'
import dotOne from 'assets/icon/jieji/dot_one.png'
import dotTwo from 'assets/icon/jieji/dot_two.png'
import clock from 'assets/icon/jieji/clock.png'
import loading from 'components/toast/loading'

export default function Index(props) {
  const target_order = props.location.state
  const [loading, SetLoading] = React.useState(false)
  const [success, SetSuccess] = React.useState(false)
  const [content, SetContent] = React.useState('')

  const goBack = () => {
    props.history.goBack();
  }
  const HandleCancel = async () => {
    SetContent('Order Cancel')
    SetLoading(true)
    await deleteOrder(target_order)
    SetLoading(false)
    SetSuccess(true)
    setTimeout(() => {
      SetSuccess(false)
      props.history.replace('/order')
    }, 1000)
  }
  const HandleDelete = async () => {
    SetContent('Order Delete')
    SetLoading(true)
    await deleteOrder(target_order)
    SetLoading(false)
    SetSuccess(true)
    setTimeout(() => {
      SetSuccess(false)
      props.history.replace('/order')
    }, 1000)
  }
  const HandleConfirm = async () => {
    SetContent('Order Confirm')
    SetLoading(true)
    await finishOrder(target_order)
    SetLoading(false)
    SetSuccess(true)
    setTimeout(() => {
      SetSuccess(false)
      props.history.replace('/order')
    }, 1000)
  }
  return (
    <div className={style.box}>
      <NavBar left={<div className={style.back} onClick={goBack}><img src={youla} alt="" /></div>}
        center={<div>Order Detail</div>} />
      <div className={style.detail_content}>
        <div className={style.title}>
          <div className={style.type}>{target_order.type}</div>
          <div className={style.status}>{target_order.status}</div>
          {target_order.status === 'doing' ? <button className={style.delete} onClick={HandleCancel}>Cancel Order</button> : <button className={style.delete} onClick={HandleDelete}>Delete Order</button>}
        </div>
        <div className={style.head}>

          <div className={style.order_from}>
            <span>
              <img className={style.dot} src={dotOne} alt=""></img>
            </span>
            <div>{target_order.add_from}</div>
          </div>

          <div className={style.order_to}>
            <span><img className={style.dot} src={dotTwo} alt=""></img></span>
            <div>{target_order.add_to}</div>
          </div>
          <div className={style.date_time}>
            <img className={style.icon_clock} src={clock} alt=""></img>
            {target_order.time}
          </div>
        </div>

        <div className={style.body}>
          <div className={style.left_body}>
            <div>OrderId</div>
            <div>Name</div>
            <div>Phone</div>
            <div>People</div>
            <div>Luggages</div>
            <div>others</div>
          </div>
          <div className={style.right_body}>
            <div className={style.order_id}>{target_order.order_id}</div>
            <div className={style.name}>{target_order.uname}</div>
            <div className={style.contact}>{target_order.contact}</div>
            <div className={style.people_num}>{target_order.people_number}</div>
            <div className={style.luggage}>{target_order.luggage}</div>
            <div className={style.add}>{target_order.other}</div>
          </div>
        </div>
        {target_order.status === 'doing' ? <button className={style.confirm} onClick={HandleConfirm}>Confirm Arrival</button> : ''}
      </div >
      {loading ? <Loading /> : ''}
      {success ? <Success content={content} /> : ''}

    </div >
  )
}
