import React,{Component} from 'react';
import css from './index.module.scss';
import {NavLink} from 'react-router-dom';

class Header extends Component{
	render(){
		return <div>
		  <div className='container-fluid xhead'>
		    <div className='container'>
		    <NavLink to='/home' replace >
		      <i className='iconfont icon-huidaoshouye'><i className={css.shouye}>首页</i></i>
		    </NavLink>
		    <div className='headright r'>
		    	<p className='l'>Hi！花卷商城欢迎你~</p>
		    	<NavLink to='/login' replace className='l'>登录</NavLink>
		    	<i className='l'>&nbsp; | &nbsp;</i>
		    	<i className='iconfont icon-shouji l'>	
		    		<a className={css.xiazai} href='https://m.huajuanmall.com/'>花卷app下载</a>
		    	</i>
		    </div>
		    </div>
		  </div>
		  <div className='container'>
		  	
		  </div>
		</div>
	}
}

export default Header;