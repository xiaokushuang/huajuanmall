import React, { Component } from 'react'
import './index.module.scss'
class Hongren extends Component {
	render () {
		return <div>
			Hongren
			{this.props.children}
		</div>
	}
}

export default Hongren