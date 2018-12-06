const countReducer = (prevState=[],action={})=>{
	let {type,payload} = action;
	switch(type){
		case "huajuanallCount":
		return payload;	
		default:
		return prevState
	}
}