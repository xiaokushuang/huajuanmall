import React, { Component } from 'react'
import './index.module.scss'
class GoodsDetail extends Component {
	render () {
		return <div>
			GoodsDetail
		</div>
	}
	componentDidMount(){
		console.log(this.props)
	}
}

export default GoodsDetail