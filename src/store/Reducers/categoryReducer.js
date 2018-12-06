const categoryReducer = (prevState={},action={})=>{
	let {type,payload} = action;
	switch(type){
		case "huajuanCategory":
		return payload;
		default:
		return prevState
	}
}
export default categoryReducer;