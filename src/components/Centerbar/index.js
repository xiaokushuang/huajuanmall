import React,{Component} from "react";
import {connect} from "react-redux";
import action from "./action.js"
import css from "./index.module.scss";
import {NavLink} from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import store from "../../store"
class Centerbar extends Component{
	constructor(props){
		super(props);
		this.state={
			current:-1,
			num:0
		}
	}
	render(){
		return (
			<div className="container">
				{
					this.props.datalist?
					<ul className={css.navlist}>
						{
							this.props.datalist.map((item,index)=>
								<li key={item.tag_id} className={this.state.num == index?css.active:css.parli} onMouseOver={this.show.bind(this,index)} onMouseOut={this.hide.bind(this,index)} onClick={this.handle.bind(this,item.gc_id,index)}>
										<img src={item.pc_icon}/>
										<span>{item.gc_name}</span>
									{	
										<ul className={css.sonul}>
										{
											item.children.map((j)=>
												<li key={j.tag_id} className={this.state.current==index?css.sonli:css.hide} onClick={(e)=>this.handleClick.call(this,e,j.gc_id)}>
													{j.gc_name}
												</li>
											)
										}
										</ul>
									}	
								</li>
								)
						}
					</ul>:null
				}
			</div>
			)
	}
	show(index){
		this.setState({
			current:index
		})
	}

	hide(index){
		this.setState({
			current:-1
		})
	}

	handle(id,index){
		this.setState({
			num :index
		})
		this.props.my.push('/category/' + id)
		this.props.myevent(id,this.props.datalist)
		this.props.event(this.props.my.location.pathname)
	}
	handleClick(e,data){
		e.stopPropagation();
		e.nativeEvent.stopImmediatePropagation()
		this.props.my.push('/category/' + data)
		this.props.event(this.props.my.location.pathname)
	}
	componentWillMount(){                                    
		if(this.props.datalist.length == 0){
			this.props.getCenterbarListPromise();
		}
	}

}
export default connect((state)=>{
	return{
		datalist:state.listReducer
	}

},action)(Centerbar);