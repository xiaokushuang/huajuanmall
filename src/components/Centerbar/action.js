import axios from "axios";
const action ={
	getCenterbarListPromise(){
		return axios({
			url:"/pc/pcIndex/class",
			methods:'get'
		}).then(res=>{
			return {
				type:"huajuanCenter",
				payload:res.data.goodsClass
			}
		})
	}
}
export default action