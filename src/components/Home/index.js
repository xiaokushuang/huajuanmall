import React, { Component } from 'react'
import './index.module.scss';
import Centerbar from "../../components/Centerbar";
class Home extends Component {
	render () {
		return <div>
		<Centerbar my = {this.props.history}></Centerbar>
			Home
		</div>
	}
}

export default Home