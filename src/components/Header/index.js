import React,{Component} from 'react';
import css from './index.module.scss';
import {NavLink,withRouter} from 'react-router-dom';
import imgurl from '../../logo.png';

class Header extends Component{
	constructor(props){
		super(props);

		this.state = {
			text:'',
		}
	}

	render(){
		var value = this.state.value;
		return <div>
		  <div className='container-fluid xhead'>
		    <div className='container'>
		    <NavLink to='/home' replace >
		      <i className='iconfont icon-huidaoshouye'><i className={css.shouye}>首页</i></i>
		    </NavLink>
		    <div className='headright r'>
		    	<p className='l'>Hi！花卷商城欢迎你~</p>
		    	<NavLink to='/login' className='l'>登录</NavLink>
		    	<i className='l'>&nbsp; | &nbsp;</i>
		    	<i className='iconfont icon-shouji l'>	
		    		<a className={css.xiazai} href='https://m.huajuanmall.com/'>花卷app下载</a>
		    	</i>
		    </div>
		    </div>
		  </div>
		  <div className='container xhead_down clear'>
		  	<main>
		  		<NavLink to='/home' replace className='l mainleft clear'>
		  			<div className='ximg clear'>
			  			<img src={imgurl} className='l'/>
			  			<h1 className='l'>花卷</h1>
		  			</div>
		  			<p>红人视频购物商城</p>
		  		</NavLink>
		  		<div className='mainright r clear'>
		  			<form className="l">
		  				<input type="text" ref="textInput" placeholder="请输入想找的红人或商品" onKeyDown={this.EnterClick}/>
		  				<button onClick={this.onSearchText.bind(this)}><i className="iconfont icon-sousuo"></i></button>
		  			</form>
		  			<NavLink to='/cart' replace className={css.cart}>
		  				<i className='iconfont icon-buy-car l'/>
		  				<p className='l'>我的购物车</p>
		  			</NavLink>
		  		</div>
		  	</main>
		  </div>
		  <div className='container-fluid xfooter'>
		  </div>
		</div>
	}

	// sousuoclick(){
	// 	var word = this.refs.textInput.value;
	// 	this.setState({
	// 		text: word
	// 	})
	// 	this.props.myevent(this.state.text);
	// 	this.props.history.push('/search/result/' + this.state.text)
	// }

	onSearchText(){
		var word = this.refs.textInput.value;

	    if(!word.trim()){
	         // message.warn('请输入搜索内容后再点击搜索按钮')
	         return false
	    }
		this.props.myevent(word);
		this.props.history.push('/search/result/' + word)
	}

	handleEnterKey = (e) => {
	    if(e.nativeEvent.keyCode === 13){ //e.nativeEvent获取原生的事件对像
	        this.onSearchText()
	    }
	}

	componentWillReceiveProps(nextProps){

		// console.log(nextProps)
		// nextProps.history.push('/search/result/' + this.state.text)
	}

}

export default withRouter(Header);