const listReducer = (prevState=[],action={})=>{
	let {type,payload} = action;
	switch(type){
		case "huajuanCenter":
		return payload;
		default:
		return prevState
	}
}
export default listReducer;