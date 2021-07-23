
/**
 * 菜单栏 数据
 */
// Home
import home from 'assets/icon/tabbar_icon/home.png'
import homefill from 'assets/icon/tabbar_icon/home_fill.png'
// Order
import order from 'assets/icon/tabbar_icon/order.png'
import orderfill from 'assets/icon/tabbar_icon/order_fill.png'
// promo
import gift from 'assets/icon/tabbar_icon/gift.png'
import giftfill from 'assets/icon/tabbar_icon/gift_fill.png'
// mine
import mine from 'assets/icon/tabbar_icon/mine.png'
import minefill from 'assets/icon/tabbar_icon/mine_fill.png'
/** 
 * tabbar菜单
 */

const menuData = [
  {
    name: 'Home',
    key: 'home',
    path: '/home',
    icon: home,
    selectedIcon: homefill,
    unselectedTintColor: "#949494",
    tintColor: "#33A3F4",
  },
  {
    name: 'Order',
    key: 'order',
    path: '/order',
    icon: order,
    selectedIcon: orderfill,
    unselectedTintColor: "#949494",
    tintColor: "#33A3F4",
  },
  {
    name: 'Promo',
    key: 'promo',
    path: '/promo',
    icon: gift,
    selectedIcon: giftfill,
    unselectedTintColor: "#949494",
    tintColor: "#33A3F4",
  },
  {
    name: 'Mine',
    key: 'mine',
    path: '/mine',
    icon: mine,
    selectedIcon: minefill,
    unselectedTintColor: "#949494",
    tintColor: "#33A3F4",
  },
]

export {
  menuData
}