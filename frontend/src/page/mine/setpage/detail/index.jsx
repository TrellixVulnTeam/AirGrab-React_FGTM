import React from 'react'
import style from './index.module.scss'
import NavBar from 'components/navBar'
import Warning from 'components/toast/warning'
import Loading from 'components/toast/loading'
import youla from 'assets/icon/youlawhite.png'
import { editProfile } from "network/network.js"
import { connect } from 'react-redux'
import { addUser } from 'redux/actions/user'
function Index(props) {
  const [loading, SetLoading] = React.useState(false)
  const [warning, SetWarning] = React.useState(false)
  const [name, SetName] = React.useState('')
  const goBack = () => {
    props.history.goBack();
  }
  const save = async () => {
    if (name) {
      SetLoading(true)
      await editProfile(props.user.email, name)
      SetLoading(false)

      props.add({ email: props.user.email, name })
      props.history.replace('/mine')
    }
    else {
      SetWarning(true)
      setTimeout(() => {
        SetWarning(false)
      }, 1000)
    }
  }
  return (
    <>
      <NavBar left={<div className={style.back} onClick={goBack}><img src={youla} alt="" /></div>}
        center={<div>Security</div>} />
      <div className={style.mine_box}>
        <div className={style.selection}>
          <span>Name: </span>
          <input type="text" onChange={(e) => SetName(e.target.value)} placeholder={props.user.name} />
        </div>
      </div>
      <div className={style.save} onClick={save}>Save</div>
      {loading ? <Loading /> : ''}
      {warning ? <Warning content='Name cannot be empty' /> : ''}

    </>
  )
}
export default connect(
  state => state,
  { add: addUser }
)(Index)