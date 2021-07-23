import React from 'react'
import style from './index.module.scss'
import NavBar from 'components/navBar'

import youla from 'assets/icon/youlawhite.png'
import question from 'assets/icon/jieji/question.png'
export default function index(props) {
  const goBack = () => {
    // console.log(props);
    props.history.goBack();
  }
  return (
    <div className={style.service_container}>
      <NavBar left={<div className={style.back} onClick={goBack}><img src={youla} alt="" /></div>}
        center={<div>FAQ</div>} />
      <div className={style.service_content}>
        <div className={style.box}>
          <div className={style.title}>
            <img src={question} alt=""></img>
            <span>How to calculate the charge of airport pickup and drop-off?</span>
          </div>
          <div className={style.content}>
            The price of airport pickup and drop-off is calculated based on time period, distance and number of passengers. It is a one-off order, and the order does not include additional charges, such as no additional baggage charges, additional dining and drinking fees, and additional service consumption.
          </div>
          <div className={style.content}>
            After you fill in the address, date and other information, the system will automatically match you with a Chinese driver, after you confirm the trip, the order will take effect.
          </div>
          <div className={style.content}>
            As long as you do not change the pick-up address and pick-up time, you do not need to pay additional hidden fees during the ride. If additional fees occur, you can report the situation to the customer service in time.
          </div>
        </div>

        <div className={style.box}>
          <div className={style.title}>
            <img src={question} alt=""></img>
            <span>Can I cancel the order?</span>
          </div>
          <div className={style.content}>
            The latest cancellation time is three hours before the travel time. You can cancel the order in the order page before the latest cancellation time.
          </div>
        </div>

        <div className={style.box}>
          <div className={style.title}>
            <img src={question} alt=""></img>
            <span>What about flight change, delay, cancellation, etc.?</span>
          </div>
          <div className={style.content}>
            If the flight is rescheduled, you can communicate with the customer service and ask the customer service to change the pickup time. If the driver cannot provide service normally, it is suggested that you cancel the order and make a new reservation within the free cancellation time. If the latest cancellation time has passed, the order will be deducted the corresponding penalty.
          </div>
        </div>

        <div className={style.box}>
          <div className={style.title}>
            <img src={question} alt=""></img>
            <span>Can I change the route again after placing the order?</span>
          </div>
          <div className={style.content}>
            Customer service is available 24 hours online.
          </div>
          <div className={style.content}>
            If you want to change the route before the latest cancellation time of the order, you can communicate with customer service and have customer service cooperate to change the route.
          </div>
        </div>
      </div>
    </div>
  )
}
