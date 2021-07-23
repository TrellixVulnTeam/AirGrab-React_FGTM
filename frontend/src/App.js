import React from 'react';
import Home from './page/home'
import Mine from './page/mine'
import Order from './page/order'
import Promo from './page/promo'
import Faq from './page/home/faq'
import ServiceAd from './page/home/servicead'
import Jieji from './page/jieji'
import confirm from './page/order/order_confirm'
import detail from './page/order/order_detail'
import login from './page/mine/login'
import register from './page/mine/register'
import verificate from './page/mine/verificate'
import setting from './page/mine/setpage'
import security from './page/mine/setpage/security'
import profileDetail from './page/mine/setpage/detail'
import password from './page/mine/password'
import forgot from './page/mine/forgot'
// import TabBar from './components/tabBar'
import { Route, Switch, Redirect } from 'react-router-dom'
function App() {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/jieji/:type" component={Jieji}></Route>
        <Route path="/order" component={Order}></Route>
        <Route path="/promo" component={Promo}></Route>
        <Route path="/mine" component={Mine}></Route>
        <Route path="/faq" component={Faq}></Route>
        <Route path="/servicead" component={ServiceAd}></Route>
        <Route path="/confirm" component={confirm}></Route>
        <Route path="/detail" component={detail}></Route>
        <Route path="/login" component={login}></Route>
        <Route path="/register" component={register}></Route>
        <Route path="/verificate" component={verificate}></Route>
        <Route path="/setting" component={setting}></Route>
        <Route path="/security" component={security}></Route>
        <Route path="/profileDetail" component={profileDetail}></Route>
        <Route path="/password" component={password}></Route>
        <Route path="/forgot" component={forgot}></Route>
        <Redirect to="/home"></Redirect>
      </Switch>
      {/* <TabBar /> */}
    </div>
  );
}

export default App;
