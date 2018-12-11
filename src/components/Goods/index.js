import React, { Component } from 'react'
import './index.module.scss'
class Goods extends Component {
	render () {
		return <div>
			Goods
			{this.props.children}
		</div>
	}
	componentDidMount(){
		console.log(this.props)
	}
	
}

export default Goods