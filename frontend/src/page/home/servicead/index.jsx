import React from 'react'
import style from './index.module.scss'
import NavBar from 'components/navBar'
import youla from 'assets/icon/youlawhite.png'
import service from 'assets/icon/jieji/service2.png'
export default function index(props) {
  const goBack = () => {
    // console.log(props);
    props.history.goBack();
  }
  return (
    <div className={style.service_container}>
      <NavBar left={<div className={style.back} onClick={goBack}><img src={youla} alt="" /></div>}
        center={<div>Service Advantage</div>} />
      <div className={style.service_content}>
        <div className={style.box}>
          <div className={style.title}>
            <img src={service} alt=""></img>
            <span>Wechat Pay</span>
          </div>
          <div className={style.content}>
            The platform supports WeChat payment. Safe, Fast ,no need to transfer money into Australian dollars.
          </div>

        </div>

        <div className={style.box}>
          <div className={style.title}>
            <img src={service} alt=""></img>
            <span>Chinese Driver</span>
          </div>
          <div className={style.content}>
            The driver team of Chinese overseas students, most of them are students studying in Brisbane.
          </div>
          <div className={style.content}>
            Ensure driver service quality, smooth communication, the lowest risk rate, and the personal and property safety of customers.
          </div>
        </div>

        <div className={style.box}>
          <div className={style.title}>
            <img src={service} alt=""></img>
            <span>Full Package Price</span>
          </div>
          <div className={style.content}>
            The price is calculated based on the time period, distance and number of people and does not include other extra fees.
          </div>
          <div className={style.content}>
            For example, no extra baggage charges, no extra meals and drinking water charges, no extra service charges and so on.
          </div>
        </div>

        <div className={style.box}>
          <div className={style.title}>
            <img src={service} alt=""></img>
            <span>Service Guarantee</span>
          </div>
          <div className={style.content}>
            To ensure the safety of passengers, the driver is not allowed to provide passengers with drinking water and food, if any, please report in time.
          </div>
          <div className={style.content}>
            For the safety of passengers, passengers are not allowed to drink or eat other people's water or food.
          </div>
          <div className={style.content}>
            If you are unable to travel 6 hours before the pick up or drop off, you can cancel your order and Xiaobu will offer you a full refund.
          </div>
        </div>
      </div>
    </div>
  )
}
