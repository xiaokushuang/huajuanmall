import React, { Component } from 'react'
import './index.module.scss'
class Order extends Component {
	render () {
		return <div>
			Order
			{this.props.children}
			

		</div>
	}
}

export default Order