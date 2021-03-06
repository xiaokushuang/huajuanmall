import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import React from 'react'
import App from '../App'

import Login from '../components/Login'
import Home from '../components/Home'
import User from '../components/User'
	import Follow from '../components/User/Follow'
	import Coupon from '../components/User/Coupon'
	import AddAddressView from '../components/User/AddAddressView'

import Order from '../components/Order'
	import NopayList from '../components/Order/NopayList'
	import PayList from '../components/Order/PayList'
	import GoodsSendList from '../components/Order/GoodsSendList'

import Search from '../components/Search'

import Cart from '../components/Cart'
	import Step2 from '../components/Cart/Step2'
	import Coulist from '../components/Cart/Coulist'

import Category from '../components/Category'
import ChargeTutoria from '../components/ChargeTutoria'
import Hongren from '../components/Hongren'
	import HongrenList from '../components/Hongren/HongrenList'

import Goods from '../components/Goods'
	import GoodsDetail from '../components/Goods/GoodsDetail'

import Video from '../components/Video'
	import VideoDetail from '../components/Video/VideoDetail'

import Service from '../components/Service'
import store from "../store"
import {Provider} from "react-redux";

const router = (
<Provider store={store}>
	<Router>
		<App>
			<Switch>
				<Route path="/login" component={Login}/>
				<Route path="/home" component={Home}/>

				{/*<Route path="/user" component={User}/>*/}

				<Route path="/user" render={()=>
					<User>
						<Switch>
							<Route path="/user/follow" component={Follow}/>
							<Route path="/user/coupon" component={Coupon}/>
							<Route path="/user/addAddressView" component={AddAddressView}/>
						</Switch>
					</User>
				}/>

				<Route path="/order" render={()=>
					<Order>
						<Switch>
							<Route path="/order/nopayList" component={NopayList}/>
							<Route path="/order/payList" component={PayList}/>
							<Route path="/order/goodsSendList" component={GoodsSendList}/>
						</Switch>
					</Order>
				}/>

				<Route path="/search/result?value=:value" component={Search}/>

				{/*<Route path="/search" render={()=>
					<Search>
						<Switch>
							<Route path="/search/result" component={Result}/>
							<Redirect from="/search" to="/search/result"/>
						</Switch>
					</Search>
				}/>*/}

				<Route path="/cart" render={()=>
					<Cart>
						<Switch>
							<Route path="/cart/step2" component={Step2}/>
							<Route path="/cart/coulist" component={Coulist}/>
						</Switch>
					</Cart>
				}/>

				<Route path="/category" component={Category}/>
				<Route path="/chargeTutoria" component={ChargeTutoria}/>
				<Route path="/hongren" component={Hongren}/>
				{/*<Route path="/hongren/:id" render={()=>	
				// 	<Hongren>
				// 		<Switch>
				// 			<Route path="/hongren/list" component={HongrenList}/>
				// 		</Switch>
				// 	</Hongren>
				// }/>*/}

				<Route path="/goods" render={()=>
					<Goods>
						<Switch>
							<Route path="/goods/detail:id" component={GoodsDetail}/>
							<Redirect from="/goods" to="/goods/detail"/>
						</Switch>
					</Goods>
				}/>

				<Route path="/video" render={()=>
					<Video>
						<Switch>
							<Route path="/video/detail" component={VideoDetail}/>
							<Redirect from="/video" to="/video/detail"/>
						</Switch>
					</Video>
				}/>

				<Route path="/service" component={Service}/>
				<Redirect from="/" to="/home"/>
			</Switch>
		</App>
	</Router>
</Provider>)
export default router