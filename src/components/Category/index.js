import React, { Component } from 'react'
import './index.module.scss'
import Centerbar  from "../../components/Centerbar";
class Category extends Component {
	render () {
		return <div>
			<Centerbar my = {this.props.history}></Centerbar>
			Category
		</div>
	}
}

export default Category