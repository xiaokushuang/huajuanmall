import React, { Component } from 'react'
import css from './index.module.scss'
import axios from 'axios'

class User extends Component {
	constructor (props) {
		super(props)
		this.state = {
			goodslist: []
		}
	}
	render () {
		return <div className={css.user}>
			<p className={css.userHead}>首页 > 个人中心</p>
			<div className={css.userInfoBox + " " + "clear"}>
				<div className={css.userInfo}>
					<div className={css.userInfoCenter}>

						<img src="/img/userhead.png" alt="userhead"/>
						<div className={css.userName}>hj2332323</div>
						<div className={css.userAge}>48岁 摩羯座</div>
					</div>
				</div>
				<div className={css.relevant}>
				<div className={css.relevantList}><span className="iconfont">233</span><div>待付款</div></div>
				<div className={css.relevantList}><span className="iconfont">233</span><div>待发货</div></div>
				<div className={css.relevantList}><span className="iconfont">233</span><div>待收货</div></div>
				<div className={css.relevantList}><span className="iconfont">233</span><div>优惠券</div></div>
				<div className={css.relevantList}><span className="iconfont">233</span><div>我的关注</div></div>
				</div>
				<div className={css.address}>
					<div className={css.addressPlane}></div>
					<div className={css.addressInfo}>
						<div className={css.notHasAddress}>
							暂无收货地址 <a href="/#/user/addAddressView"> <b>+</b> 添加地址</a>
						</div>
					</div>

				</div>
			</div>
			<div className={css.myOrder}>
				<h3 className={css.huajuanTitle}>我的订单</h3>
				<div className={css.orderListBox}>
					<div className={css.notOrderInfo}>暂无订单
						<div><a href="/#/home">去逛逛<b>></b></a></div>
					</div>
				</div>
			</div>
			<div className={css.myLike}>
				<h3 className={css.huajuanTitle}>我的收藏</h3>
				<div className={css.myLikeContent}>
					<div>
						<h3 className={css.huajuanTitle}>
							<span className={css.smallTitle}>视频</span>
						</h3>
						<div className={css.noInfo}>暂无视频
							<div><a href="/#/home">去逛逛<b>></b></a></div>
						</div>
					</div>
					<div>
						<div className={css.myLikeGoods}>
							<h3 className={css.huajuanTitle}>
								<span className={css.smallTitle}>商品</span>
							</h3>
							<div className={css.noInfo}>暂无商品
								<div><a href="/#/home">去逛逛<b>></b></a></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={css.myHotRec}>
				<h3 className={css.huajuanTitle}>热销推荐</h3>
				<div>
					<ul className={css.hotRecGoods + " " + "clear"}>
					{	
						this.state.goodslist.map(item=>
						<li className={css.hotRecGoodsList} key={item.id}>
							<div className={css.goodsItem}>
								<a href="javascript:::;">
									<div className={css.goodsImageBox}>
										<img className={css.originalImage} src={item.rec_img} alt="xxx"/>
									</div>
									<div className={css.goodsDesc}>{item.goods.goods_desc}</div>
									<div className={css.goodsName}>{item.rec_title}</div>
									<div className={css.goodsPriceBox}>
										<span className={css.goodsPrice}><b>￥</b>{item.goods.goods_price}</span>
										<span className={css.goodsMarketparice}><b>￥</b>{item.goods.goods_marketprice}</span>
									</div>
								</a>
							</div>
						</li>	
						)
					}
					</ul>
				</div>
			</div>



			{/*{this.props.children}*/}
			<div className="go2top">
				<div className="go2topContent">
					<div className="go2topIcon"></div>
				</div>
			</div>
		</div>
	}
	componentDidMount () {
		//document.documentElement.scrollTop
		//https://www.huajuanmall.com/pc/rec/single?cls_id=0&offset=10
		//https://www.huajuanmall.com/pc/rec/single?cls_id=0&offset=20
		axios.get('/pc/rec/single?cls_id=0&offset=0').then(res=>{
			console.log(res.data.recList)
			this.setState({
				goodslist: res.data.recList
			})
		})
	}
}

export default User