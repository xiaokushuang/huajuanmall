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
	import Result from '../components/Search/Result'

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

const router = <Router>
	<App>
		<Switch>
			<Route path="/login" component={Login}/>
			<Route path="/home" component={Home}/>

			{/*<Route path="/user" component={User}/>*/}

			<Route path="/user" render={()=>
				<User>
					<Route path="/user/follow" component={Follow}/>
					<Route path="/user/coupon" component={Coupon}/>
					<Route path="/user/addAddressView" component={AddAddressView}/>
				</User>
			}/>

			<Route path="/order" render={()=>
				<Order>
					<Route path="/order/nopayList" component={NopayList}/>
					<Route path="/order/payList" component={PayList}/>
					<Route path="/order/goodsSendList" component={GoodsSendList}/>
				</Order>
			}/>

			<Route path="/search" render={()=>
				<Search>
					<Switch>
						<Route path="/search/result" component={Result}/>
						<Redirect from="/search" to="/search/result"/>
					</Switch>
				</Search>
			}/>

			<Route path="/cart" render={()=>
				<Cart>
					<Route path="/cart/step2" component={Step2}/>
					<Route path="/cart/coulist" component={Coulist}/>
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
						<Route path="/goods/detail" component={GoodsDetail}/>
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

export default router