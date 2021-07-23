import React from 'react'
import style from './index.module.scss'
export default function Index(props) {
  const [title, setTitle] = React.useState([
    {
      id: 0,
      name: "In Progress",
      isActive: true
    },
    {
      id: 1,
      name: "History Order",
      isActive: false
    }
  ])

  const handleItemtap = (index) => {
    title.forEach((item) => {
      item.isActive = item.id === index
    })
    setTitle([...title])
    props.status(index)
  }
  return (
    <div className={style.order_box}>
      {
        title.map((item, index) => {
          return (
            <div key={item.id} onClick={() => handleItemtap(index)}>
              <span className={item.isActive ? style.active : ''} >
                {item.name}
              </span>
            </div>
          )
        })
      }
    </div >
  )
}
