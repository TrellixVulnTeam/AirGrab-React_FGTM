import React from 'react'
import style from './index.module.scss'
export default function index(props) {
  const { left, center, right } = props
  return (
    <div>
      <div className={style.navbar}>
        <div className={style.left}>
          {/* {props.children[0]} */}
          {left}
        </div>
        <div className={style.center}>
          {/* {props.children[1]} */}
          {center}
        </div>
        <div className={style.right}>
          {/* {props.children[2]} */}
          {right}
        </div>
      </div>
    </div>
  )
}
