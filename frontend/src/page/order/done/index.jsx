import React from 'react'
import style from './index.module.scss'
import Empty from '../empty'
import List from '../list'
import { connect } from 'react-redux'
import { getDoneOrder } from "network/network.js"
import Loading from 'components/toast/loading'


function Index(props) {
  const [loading, SetLoading] = React.useState(false)
  const [order_list, setOrder] = React.useState([])
  React.useEffect(() => {
    SetLoading(true)
    getDoneOrder(props.user.email).then(res => {
      if (res) {
        SetLoading(false)
        setOrder(res.data.orders)
      }
    })
  }, [])

  return (
    <div className={style.item_container}>
      {order_list.length && props.user.name ? <List order_list={order_list} /> : <Empty />}
      {loading ? <Loading /> : ''}
    </div>
  )
}
export default connect(
  state => state,
  {}
)(Index)