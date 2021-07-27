import request from './request'

export function getAllOrder() {
  return request({
    method: 'get',
    url: "/car/v1/order"
  })
}
export function getDoingOrder(email) {
  return request({
    method: 'get',
    url: "/car/v1/order/doing",
    params: { email: email }
  })
}
export function getDoneOrder(email) {
  return request({
    method: 'get',
    url: "/car/v1/order/done",
    params: { email: email }
  })
}
export function newOrder(data) {
  return request({
    method: 'post',
    url: '/car/v1/order',
    data: data
  })
}
export function deleteOrder(data) {
  return request({
    method: 'delete',
    url: '/car/v1/order',
    data: { 'order_id': data.order_id }
  })
}
export function finishOrder(data) {
  return request({
    method: 'put',
    url: '/car/v1/order',
    data: { 'order_id': data.order_id }
  })
}
export function sendCode(email) {
  return request({
    method: 'post',
    url: '/car/v1/email',
    data: { 'email': email }
  })
}
export function sendCode2(email) {
  return request({
    method: 'post',
    url: '/car/v1/email2',
    data: { 'email': email }
  })
}
export function signUp(email, password) {
  return request({
    method: 'post',
    url: '/car/v1/user',
    data: { 'email': email, 'password': password }
  })
}
export function modifyPw(email, password) {
  return request({
    method: 'put',
    url: '/car/v1/user',
    data: { 'email': email, 'password': password }
  })
}
export function login(user) {
  return request({
    method: 'post',
    url: '/car/v1/user/login',
    data: user
  })
}
export function forgot(email) {
  return request({
    method: 'post',
    url: '/car/v1/user/forgot',
    data: { 'email': email }
  })
}
export function editProfile(email, name) {
  return request({
    method: 'put',
    url: '/car/v1/user/profile',
    data: { 'email': email, 'name': name }
  })
}