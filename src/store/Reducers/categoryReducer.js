const categoryReducer = (prevState=[],action={})=>{
	let {type,payload} = action;
	switch(type){
		case "huajuanCategory":
		return payload;
		case "huajuanCategory1":
		return [...prevState,...payload];
		default:
		return prevState
	}
}
export default categoryReducer;