import style from './index.module.scss'
import { menuData } from './bar'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'

export default class index extends Component {
  state = {
    selectedTab: this.props.page,
    hidden: false,
  }

  // changeTab = (tab) => {
  //   this.setState({ selectedTab: tab })
  //   console.log(this.state);
  //   console.log(this.props.page);
  // }
  render() {
    return (
      <div >
        <ul className={style.container}>
          {
            menuData.map(item => (
              <li key={item.key}>
                {/* <Link to={item.path} onClick={() => this.changeTab(item.key)}> */}
                <Link to={item.path}>
                  <div className={style.link_item}>
                    <img src={this.state.selectedTab === item.key ? item.selectedIcon : item.icon} alt={item.name} />
                    <div className={this.state.selectedTab === item.key ? style.active : style.disactive}>{item.name}</div>
                  </div>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
