const numReducer = (prevState='',action={})=>{
	let {type,payload} = action;
	switch(type){
		case "huajuanCategory2":
		return payload;
		default:
		return prevState
	}
}
export default numReducer;