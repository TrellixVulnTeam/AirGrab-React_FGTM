import React from 'react'
import style from './index.module.scss'
export default function Index(props) {
  return (
    <div className={style.model_container}>
      <div className={style.model_main}>
        <div className={style.model_title}>Hint</div>
        <div className={style.model_content} >{props.content}</div>
        <div className={style.model_buttons}>
          <button onClick={props.confirm} className={style.button}>ok</button>
          <button onClick={props.cancel} className={`${style.button} ${style.confirm}`}>cancel</button>
        </div>
      </div>
      <div className={style.model_mask}></div>
    </div >
  )
}
