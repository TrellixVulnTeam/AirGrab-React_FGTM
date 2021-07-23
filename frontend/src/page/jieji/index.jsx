import React from 'react'
import NavBar from 'components/navBar'
import youla from 'assets/icon/youlawhite.png'
import style from './index.module.scss'
import Droppff from './dropoff'
import Pickup from './pickup'
export default function Index(props) {
  const { type } = props.match.params
  const [isShow, setShow] = React.useState(type === 'pickup')
  const [title, setTitle] = React.useState([{
    id: 0,
    name: 'pickup',
    title: 'Pick-up',
    isActive: 'pickup' === type
  },
  {
    id: 1,
    name: 'dropoff',
    title: 'Drop-off',
    isActive: 'dropoff' === type
  }])
  const goBack = () => {
    props.history.goBack();
  }
  const handleItemtap = (index) => {
    setShow(index === 0)
    title.forEach((item) => {
      item.isActive = item.id === index
    })
    setTitle([...title])
  }
  return (
    <div>
      <NavBar left={<div className={style.back} onClick={goBack}> <img src={youla} alt="" /> </div>}
        center={<div>New Order</div>}
      />
      <div className={style.form}>
        <div className={style.form_title}>
          {
            title.map((item, index) => {
              return (<div key={item.id} className={`${style.pick_jieji} ${item.isActive ? style.pick_active : ''}`} onClick={() => handleItemtap(index)}>
                {item.title}
              </div>)
            })
          }
        </div>
        <div className={style.form_swiper}>
          {isShow ? <Pickup /> : <Droppff />}
        </div>
      </div>
    </div>
  )
}

