import React, { Component } from 'react'
import './index.module.scss';
import Centerbar from "../../components/Centerbar";
class Home extends Component {
	render () {
		return <div>
		<Centerbar my = {this.props.history} myevent={(data,list)=>{}}	 event={(data)=>{}
		}>
			{
				console.log(this.props)
			}
		</Centerbar>
			Home
		</div>
	}
}

export default Home