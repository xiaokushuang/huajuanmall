import React, { Component } from 'react'
import './index.module.scss'
class User extends Component {
	render () {
		return <div>
			User
			{this.props.children}
		</div>
	}
}

export default User