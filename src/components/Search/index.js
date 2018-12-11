import React, { Component } from 'react'
import css from './index.module.scss'
import {connect} from 'react-redux'
import LazyLoad from 'react-lazyload';
import axios from 'axios';

class Search extends Component {
	constructor(props){
		super(props);

		this.state = {
			// goodslist: []
		}
	}
	render () {
		return <div className='container'>

			<div className={css.hongRen}>
				<h3>“{this.props.match.params.value}”相关红人</h3>
				<ul className='clear'>
				{
					this.state.Hongrenlist?
					this.state.Hongrenlist.map(item=>
						<li key={item.uid}>
							<img src={item.share_image} alt='图片加载失败'/>
							<span className={css.count}>粉丝：{item.fcount}</span>
						</li>
					):null
				}
				</ul>
			</div>
			<div className={css.goods}>
				<h3>“{this.props.match.params.value}”相关商品</h3>
				<ul className='clear'>
				{
					this.state.goodslist?
					this.state.goodslist.map(item=>
						<li key={item.goods_id}>
							<div className={css.img}>
								<LazyLoad height={200}>
									<img src={item.goods_image} alt='图片加载失败'/>
								</LazyLoad>
							</div>
							<div className={css.desc}>{item.goods_desc}</div>
							<div className={css.name}>{item.goods_name}</div>
							<div className={css.price}>
								<i className='now'>￥{item.goods_price}</i>
								<del>￥{item.goods_marketprice}</del>
							</div>
						</li>
					):null
				}
					
				</ul>
			</div>
		</div>
	}

	componentDidMount(){
		
		console.log(this.props)
		
		// this.state.current += 10;
		axios({
			url:'/search/searchGoods?KW=' + encodeURI(this.props.match.params.value) + '&offset=0',
			method:'get'
		}).then(res=>{
			this.setState({
				goodslist: res.data.goods_infos
			})
			// console.log(this.state.goodslist)
		})

		axios({
			url:'/search/searchHongren?KW=' + encodeURI(this.props.match.params.value),
			method:'get'
		}).then(res=>{
			this.setState({
				Hongrenlist:res.data.hongren_infos
			})
			// console.log(this.state.Hongrenlist)
		})
		var word = this.refs.textInput;
		var input = document.querySelector('input').value;
		this.props.history.push('/search/result/' + input)
		console.log(this.props.history)
	}

	componentDidUpdate(){
		
	}
}

export default Search;
// export default connect((state)=>{
// 	console.log(state)
// 	return {
// 		goodslist:state.SearchReducer
// 	}
// },
// action
// )(Search);