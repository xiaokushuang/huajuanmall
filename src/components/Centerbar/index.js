import React,{Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
import action from "./action.js"
import css from "./index.module.scss";
import {NavLink} from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
class Centerbar extends Component{
	constructor(props){
		super(props);
		this.state={
			current:-1
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
								<li key={item.gc_id} className={css.parli} onMouseOver={this.show.bind(this,index)} onMouseOut={this.hide.bind(this,index)} onClick={this.handle.bind(this,item.gc_id)}>
										<img src={item.pc_icon}/>
										<span>{item.gc_name}</span>
									{	
										<ul className={css.sonul}>
										{
											item.children.map((j)=>
												<li key={j.gc_id} className={this.state.current==index?css.sonli:css.hide} onClick={this.handle.bind(this,item.gc_id)}>
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

	handle(id){
		this.props.my.push('/category/' + id)
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