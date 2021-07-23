import React from 'react'
import style from './index.module.scss'
import youla from 'assets/icon/jieji/youla.png'
import clock from 'assets/icon/jieji/clock.png'
import dotTwo from 'assets/icon/jieji/dot_two.png'
import dotOne from 'assets/icon/jieji/dot_one.png'
import { withRouter } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars'
function Index(props) {
  const toDetail = (item) => {
    props.history.push('/detail', item)
  }
  return (
    <div>
      <Scrollbars className={style.scroll}>
        {
          props.order_list.map((item) => {
            return (
              <div className={style.order_content} onClick={() => toDetail(item)} key={item.order_id}>
                <div className={style.order_type}>{item.type}</div>
                <div className={style.order_status}>
                  {item.status}
                  <img className={style.icon_youla} src={youla} alt=""></img>
                </div>
                <div className={style.date_time}>
                  <img className={style.icon_clock} src={clock} alt=""></img>
                  {item.time}
                </div>
                <img className={`${style.dot} ${style.dot_one}`} src={dotOne} alt=""></img>
                <div className={style.order_from}>
                  {item.add_from}
                </div>
                <img className={`${style.dot} ${style.dot_two}`} src={dotTwo} alt=""></img>
                <div className={style.order_to}>
                  {item.add_to}
                </div>
                <div className={style.order_price}>
                  AU${item.price}
                </div>
              </div>
            )
          })
        }
      </Scrollbars>

    </div>
  )
}
export default withRouter(Index)
