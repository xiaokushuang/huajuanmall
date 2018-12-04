import React, { Component } from 'react'
import './index.module.scss'
class Cart extends Component {
	render () {
		return <div>
			Cart
			{this.props.children}
		</div>
	}
}

export default Cart