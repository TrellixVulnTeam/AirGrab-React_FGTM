import { createStore, combineReducers } from 'redux'
import userReducer from '../reducers/user.js'
import orderReducer from '../reducers/order.js'

const allReducers = combineReducers({
  user: userReducer,
  order: orderReducer
})
export default createStore(allReducers)