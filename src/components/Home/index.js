import React, { Component } from 'react'
import css from './index.module.scss';
import {NavLink} from "react-router-dom";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import Centerbar from "../../components/Centerbar";
import axios from "axios";
class Home extends Component {

	render () {
		return <div>
		<Centerbar my = {this.props.history} myevent={(data,list)=>{}}	 event={(data)=>{}
		}>
			{
				console.log(this.props)
			}
		</Centerbar>
			Home
		</div>

	constructor(props){
		super(props);
		this.state={
			hotlist:null,
			hotlist1:null,
			hotlist2:null,
			toutiaolist:null,
			hongrenlist:null,
			reclist:null
		}
	}
	render(){

		return <div className="container">
			<Centerbar my={this.props.history}></Centerbar>
		{/*上*/}
		{this.state.hotlist?
			<div className={css.main}>
				<div className={css.top}>
					<ul className="clear">
						{/*上部分1*/}
						<li className={css.one}>
							 <div className="swiper-container a">
							      <div className="swiper-wrapper">
							      	{
							      		this.state.hotlist1.map(item=>
										      	<div className="swiper-slide" key={item.ad_image}>
							      					<NavLink to="/video">
														<img src={item.ad_image} height="450" width="600" alt='' style={{'borderRadius':15}} />
										      		</NavLink>
										      	</div>
							      		)
							      	}
								 </div>
		  					 </div>
		  					 <div className="swiper-pagination"></div>
						</li>
						{/*上部分2*/}

						<li className={css.two}>
							
							{

								this.state.hotlist2.map((item,index)=>
									<div className={css.intwo} key={item.ad_image}>
										<NavLink to="/video">
										   <img src={item.ad_image} alt="" key={item.ad_image} height="215" width="286" style={{'borderRadius':15}}/>
										   <h4>{item.title}</h4>
										   <div>
												<span style={{'width':70,background:'rgba(0,0,1,0.5)',position:'relative','top':-80,'left':100,color:'white'}}>{item.hongren_info.user_name}</span>
										   </div>
										</NavLink>
									 </div>	
								
								)
							}
							
							
						</li>

						{/*上部分3*/}
						<li className={css.three}>
							<ul className={css.three_1}>
								<li></li>
								<li><p>我是小笨蛋</p></li>
								<li><NavLink to="/user">我的中心</NavLink></li>
							</ul>
							<ul className={css.three_2}>
								<li>
									<i>#</i>
									<p>待付款</p>
								</li>
								<li>
									<i>#</i>
									<p>待收货</p>
								</li>
								<li>
									<i>#</i>
									<p>优惠券</p></li>
								<li>
									<i>#</i>
									<p>我的关注</p>
								</li>
							</ul>
							<ul className={css.three_3}>
								<h3>花卷头条</h3>
							
								
								{
									this.state.toutiaolist.map(item=>

										<div className="swiper-container b" key={item.content}>
										    <div className="swiper-wrapper">
										      	<div className="swiper-slide">
													<li>{item.content}</li>
										      	</div>
										    </div>
										  
									    	<div className="swiper-pagination"></div>
		 							 	</div>
										)
								}
								
								
							
							</ul>
						</li>
					</ul>
				</div>
				{/*中---人气红人*/}
				<div className={css.hongren}>
					<div style={{marginBottom:50}}>
						<p style={{fontSize:20,float:'left'}}>人气红人</p>
						<span style={{float:'right',color:'gray'}}>查看更多</span>
					</div>
					<ul>
						
		      			<div className="swiper-container c">
			      			<div className="swiper-wrapper">
				      			{
			      					this.state.hongrenlist.map(item=>

										<li className={css.hongrenlist} key={item.ad_image}>

											<img src={item.ad_image}  height="256" width="224" style={{'borderRadius':15}} alt=""/>
											<div style={{width:80,height:20,background:'white',position:'relative',top:-40,left:-110,color:'#ff527d',borderRadius:20}}>粉丝：{item.fcount}</div>
										</li>
									)
				      				
				      			}
							</div>
						</div>				
					</ul>
				</div>
			</div>

			:null
		}
		{/*为你推荐*/}
			{
				this.state.reclist?
					<ul className={css.reclist}>
						{
							this.state.reclist.map(item=>

								 <li key={item.id} onMouseOver={this.handleMouseOver.bind(this)}>
								 <div className={css.imgk}>
								 	<img src={item.rec_img} height="202" width="202" alt="" ref="img"/>
								 </div>
								 	<h3>{item.goods[0].goods_desc}</h3>
								 	<p>{item.goods[0].goods_name}</p>
								 	<span>
									 	<h2>￥{item.goods[0].goods_price}<i>￥{item.goods[0].goods_marketprice}</i></h2>
									
								 	</span>
								 </li>
							
							 )
						}
					</ul>
				:null
			}
				
		
	</div>
	}
	handleMouseOver(){
		

	}
	// https://www.huajuanmall.com
	componentDidMount(){

		axios({
			 method:'get',
		  	 url:'/pc/pcIndex/recHot'
		}).then(res=>{
			
			this.setState({
				hotlist:res.data,
				hotlist1:res.data.ad.pc_index_carousel,
				hotlist2:res.data.ad.PCHotTopic,
				hongrenlist:res.data.ad.pc_hongren_rec
			},()=>{
				// 第一个轮播图初始化
				var swiper = new Swiper('.a', {
						autoplay: true,
				        effect: 'cube',
				        grabCursor: true,
				        cubeEffect: {
				        shadow: true,
				        slideShadows: true,
				        shadowOffset: 20,
				        shadowScale: 0.94,
				        loop: true

				      },
				      pagination: {
				        el: '.swiper-pagination',
				      },
				      navigation: {
				        nextEl: '.swiper-button-next',
				        prevEl: '.swiper-button-prev',
				      }
				    });
				var swiper = new Swiper('.c', {
				      slidesPerView: 5,
				      autoplay: true,
				      spaceBetween: 30,
				      loop: true,
				      pagination: {
				        el: '.swiper-pagination',
				        clickable: true,
				      },
				       navigation: {
				        nextEl: '.swiper-button-next',
				        prevEl: '.swiper-button-prev',
				      }
				    });
			})
			// console.log(res.data.ad.PCHotTopic)
			// console.log(this.state.hotlist2)
		})
		// 请求ajax
		axios({
			 method:'get',
		  	 url:'/pc/pcIndex/toutiao'
		  	}).then(res=>{
		  		// console.log(res.data.toutiao)
		  		this.setState({
		  			toutiaolist:res.data.toutiao
		  		},()=>{
		  			// 字母轮播初始化
		  			 var swiper = new Swiper('.b', {
		  			 	  autoplay: true,
		  			 	  loop: true,
					      direction: 'vertical',
					      pagination: {
					        el: '.swiper-pagination',
					        clickable: true,
					      },
					   });
		  		})
		  		
		  	});
		 // 请求为你推荐
		 axios({
		 	method:'get',
		 	url:'/pc/rec/single?cls_id=0&offset=0'
		 }).then(res=>{
		 	// console.log(res.data.recList);
		 	this.setState({
		 		reclist:res.data.recList
		 	})
		 	// console.log(this.state.reclist[0].goods[0].goods_desc);
		 	console.log(this.state.reclist)
		 })
	}
}
export default Home;
								