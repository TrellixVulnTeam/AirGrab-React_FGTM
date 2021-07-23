import React from 'react'
import TabBar from 'components/tabBar'
import NavBar from 'components/navBar'
import style from './index.module.scss'
import Doing from './doing'
import Done from './done'
import Ordernav from './nav'
import { connect } from 'react-redux'
import Model from 'components/showModel'
function Index(props) {
  const [model, SetModel] = React.useState(!props.user.email)
  const [status, setStatus] = React.useState(0)
  const handleType = (index) => {
    setStatus(index)
  }
  const modelConfirm = () => {
    SetModel(false)
    props.history.push("/mine")
  }
  const modelCancel = () => {
    SetModel(false)
  }
  return (
    <div className={style.order_container}>
      <NavBar center={<div>Order</div>} />
      <Ordernav status={handleType} />
      {status ? <Done /> : <Doing />}
      <TabBar page='order' />
      {model ? <Model content='Please Login First' confirm={modelConfirm} cancel={modelCancel} /> : ''}
    </div>
  )
}
export default connect(
  state => state,
  {}
)(Index)