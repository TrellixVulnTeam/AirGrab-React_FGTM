import React from 'react'
import style from './index.module.scss'
import NavBar from 'components/navBar'
import HomeNav from './homeNav'
import HomeQues from './homeQues'
import HomeServ from './homeService'
import TabBar from 'components/tabBar'
export default function index() {
  return (
    <div className={style.home}>
      <NavBar center={<div>Brisbane Tour</div>} />
      <HomeNav />
      <HomeServ />
      <HomeQues />
      <TabBar page='home' />
    </div>
  )
}
