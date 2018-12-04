import React, { Component } from 'react'
import './index.module.scss'
class Video extends Component {
	render () {
		return <div>
			Video
			{this.props.children}
		</div>
	}
}

export default Video