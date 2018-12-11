const proxy = require('http-proxy-middleware');

module.exports = function (app){
	app.use(proxy('/pc',{
		target:'https://www.huajuanmall.com',
		host:'www.huajuanmall.com',
		changeOrigin:true
	}));

	app.use(proxy('/search',{
		target:'https://www.huajuanmall.com',
		host:'www.huajuanmall.com',
		changeOrigin:true
	}));
}
//https://www.huajuanmall.com/pc/pcIndex/class
