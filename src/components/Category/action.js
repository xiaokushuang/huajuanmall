import axios from "axios"
const action = {
	getCategoryListPromise(id,current){
		return axios({
			url:`/pc/goods/gcGoods?gc_id=${id}&limit=15&offset=${current}`,
			methods:'get'
		}).then(res=>{
			return {
				type:"huajuanCategory",
				payload:res.data
			}
		})
	}
}

export default action;