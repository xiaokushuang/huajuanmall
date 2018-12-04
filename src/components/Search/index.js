import React, { Component } from 'react'
import './index.module.scss'
class Search extends Component {
	render () {
		return <div>
			Search
			{this.props.children}
		</div>
	}
}

export default Search