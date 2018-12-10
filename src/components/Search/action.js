import axios from 'axios';
import React, { Component } from 'react';

const action = {
	getSearchList(){
	console.log(this.props)
		axios({
			url:'/search/searchGoods?KW=' + encodeURI(this.props.match.params.value) + '&offset=0',
			method:'get'
		}).then(res=>{
			this.setState({
				goodslist: res.data.goods_infos
			})
			console.log(this.state.goodslist)
		})

		axios({
			url:'/search/searchHongren?KW=' + encodeURI(this.props.match.params.value),
			method:'get'
		}).then(res=>{
			this.setState({
				Hongrenlist:res.data.hongren_infos
			})
			console.log(this.state.Hongrenlist)
		})
	}
}

export default action;