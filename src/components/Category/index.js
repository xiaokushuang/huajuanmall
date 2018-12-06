import React, { Component } from 'react'
import './index.module.scss'
import Centerbar  from "../../components/Centerbar"
import {connect} from "react-redux"
import action from "./action.js"
import css from "./index.module.scss"
import {NavLink} from "react-router-dom"

class Category extends Component {
	constructor(props){
		super(props);
		this.state={
			navbarlist:[],
			message:'加载中',
			mid:'',
			current:0,
			goodscount:0
		}
	}

	render () {
		return <div>
			<Centerbar my = {this.props.history} myevent={(data,list)=>{
				this.setState({
					navbarlist:list.find((j)=>{
					return j.gc_id === data
					}).children
				})
			}
			} event={(data)=>{
				this.setState({
					mid:data
				})
			}}></Centerbar>
			<div className="container">
				<div className={css.list}>
					<span className={css.class}>品类</span>
					{
						this.state.navbarlist.length>0?
						<ul className={css.everyList}>
							 <li><span>全部</span></li>
							{
								this.state.navbarlist.map((item,index)=>
									<li key={item.gc_id} className={this.state.current==index?css.active:''} onClick={this.handle.bind(this,item.gc_id,index)}><span>{item.gc_name}</span></li>
									)
							}
						</ul>:null
					}
				</div>
				{
					this.props.categorylist.goods_info?
					<ul className={css.proList}>
					{
						this.props.categorylist.goods_info.map((item)=>
							<li key={item.goods_id}>
								<div>
									<NavLink to="/detail/:id">
										<img src={item.goods_image}/>
										<h3 className={css.desc}>{item.goods_desc}</h3>
										<p className={css.name}>{item.goods_name}</p>
										<h2 className={css.price}>￥:{item.goods_price}</h2>
										<span className={css.maretPrice}>{item.goods_marketprice}</span>
									</NavLink>
								</div>
							</li>
							)
					}
					</ul>:null
				}
				
			</div>
		</div>
	}
	componentDidMount(){
		var vid ='/categroy/9'.slice(10)
		if(this.props.categorylist.length == 0){
			this.props.getCategoryListPromise(vid,this.state.current);
		}else{	
			this.props.categorylist.length = 0
		}

		window.onscroll=()=>{
			if(this.props.categorylist.allCount>=this.state.current){
				if((window.innerHeight+document.documentElement.scrollTop)>=document.documentElement.scrollHeight){
				this.setState({
					current:this.state.current+15
				})
			}
			}
		}
	}

	componentDidUpdate(){
		var vid =this.state.mid.slice(10)
		if(this.props.categorylist.length == 0){
			this.props.getCategoryListPromise(vid,this.state.current);
		}else{	
			this.props.categorylist.length = 0
		}
	}

	handle(id,index){
		this.props.history.push("/category/" + id)
		if(this.props.categorylist.length == 0){
			this.props.getCategoryListPromise(id,this.state.current);
		}else{	
			this.props.categorylist.length = 0
		}
	}
}

export default connect((state)=>{
	return { 
		categorylist:state.categoryReducer
	}
},action)(Category);