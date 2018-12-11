import axios from "axios"
const action = {
	getCategoryListPromise1(id,current){
		return axios({
			url:`/pc/goods/gcGoods?gc_id=${id}&limit=15&offset=${current}`,
			methods:'get'
		}).then(res=>{
			if(res.data){
				return {
					type:"huajuanCategory1",
					payload:res.data.goods_info
				}
			}
				
		})
	},
	getCategoryListPromise(id,current){
		return axios({
			url:`/pc/goods/gcGoods?gc_id=${id}&limit=15&offset=${current}`,
			methods:'get'
		}).then(res=>{
				return {
					type:"huajuanCategory",
					payload:res.data.goods_info
				}
			
		})
	},
	getCategoryListPromise2(id){
		return axios({
			url:`/pc/goods/gcGoods?gc_id=${id}&limit=15&offset=0`,
			methods:'get'
		}).then(res=>{
				return {
					type:"huajuanCategory2",
					payload:res.data.allCount
				}
			
		})
	}

}

export default action;