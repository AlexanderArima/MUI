			mui('.mui-scroll-wrapper').scroll();
			/**
 *@description 单击1级菜单 
 */
mui("#li_nav1").on('tap', 'a.mui-control-item', function() {
	console.log(this.getAttribute("index"))
	//显示对应的2级菜单

	$("#li_nav2").show()
})

/**
 *@description 单击2级菜单 
 */
mui("#li_nav2").on('tap', 'a.mui-control-item', function() {
	console.log(this.getAttribute("index"))
	//显示对应的2级菜单
	$("#li_nav3").show()
})



/**
 * @description 点击其他地方隐藏菜单
 */
mui("html").on('tap', 'body', function(e) {
	var e = e || window.event; //浏览器兼容性 
	var elem = e.target || e.srcElement;
	while(elem) {
		//循环判断至根节点
		if(elem.className && elem.className.indexOf('mui-control-item') > -1) {
			return;
		}
		elem = elem.parentNode;
	}
	$('#li_nav2,#li_nav3').css('display', 'none'); //隐藏2,3级菜单
})
	/**
 *@description 单击能源1级菜单 
 */
mui("#li_nav1_1").on('tap', '#item1_water', function() {
	
	//console.log(this.getAttribute("index"))
	//显示对应的2级菜单
$("#li_nav2_water").show();
$("#li_nav2_energy").hide();
$("#li_nav2_steam").hide();
})
mui("#li_nav1_1").on('tap', '#item1_energy', function() {
	
	//console.log(this.getAttribute("index"))
	//显示对应的2级菜单
$("#li_nav2_water").hide();
$("#li_nav2_energy").show();
$("#li_nav2_steam").hide()
})
mui("#li_nav1_1").on('tap', '#item1_steam', function() {
	
	//console.log(this.getAttribute("index"))
	//显示对应的2级菜单
$("#li_nav2_water").hide();
$("#li_nav2_energy").hide();
$("#li_nav2_steam").show()
})



/**
 * @description 点击其他地方隐藏菜单
 */
mui("html").on('tap', 'body', function(e) {
	var e = e || window.event; //浏览器兼容性 
	var elem = e.target || e.srcElement;
	while(elem) {
		//循环判断至根节点
		if(elem.className && elem.className.indexOf('mui-control-item') > -1) {
			return;
		}
		elem = elem.parentNode;
	}
	$('#li_nav2_energy').css('display', 'none');
	$('#li_nav2_water').css('display', 'none');
	$('#li_nav2_steam').css('display', 'none');//隐藏2,3级菜单
})


mui("#li_nav111").on('tap', 'a.mui-control-item', function() {
	console.log(this.getAttribute("index"))
	//显示对应的2级菜单
	$("#li_nav222").show()
})



/**
 * @description 点击其他地方隐藏菜单
 */
mui("html").on('tap', 'body', function(e) {
	var e = e || window.event; //浏览器兼容性 
	var elem = e.target || e.srcElement;
	while(elem) {
		//循环判断至根节点
		if(elem.className && elem.className.indexOf('mui-control-item') > -1) {
			return;
		}
		elem = elem.parentNode;
	}
	$('#li_nav222').css('display', 'none'); //隐藏2,3级菜单
})

/**echart图标**/

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
