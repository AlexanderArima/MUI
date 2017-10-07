/**
 * @description 基于准备好的dom，初始化echarts实例
 */
var myChart = echarts.init(document.getElementById('main'));
myChart.setOption({
	title : {
        text: '水表02 12小时 趋势图',
        x:'center'
      },
	tooltip: {
		trigger: 'axis'
	},
	toolbox: {
		show: true,
		feature: {
			magicType: {
				show: true,
				type: ['line', 'bar']
			},
			restore: {
				show: true
			}
		}
	},
	calculable: true,
	xAxis: [{
		type: 'category',
		data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
		name:'小时/h'
	}],
	yAxis: [{
			type: 'value',
			name: '水耗用/t'
	}
	],
	series: [
		{
			name: '耗水量',
			type: 'line',
			data: [10, 18, 32, 50, 64, 56, 54, 40, 45, 30, 35, 25]
		}
	]
});

/*********************************** 初始化弹出框***********************************/

var _picker_device = new mui.PopPicker();
_picker_device.setData([{
		value: '0',
		text: '水表01'
	},
	{
		value: '1',
		text: '水表02'
	},
	{
		value: '2',
		text: '水表03'
	}
]);

var _picker_type = new mui.PopPicker();
_picker_type.setData([{
		value: '0',
		text: '水'
	},
	{
		value: '1',
		text: '蒸汽'
	},
	{
		value: '2',
		text: '电力'
	}
]);

var _picker_time = new mui.PopPicker();
_picker_time.setData([{
		value: '0',
		text: '1小时'
	},
	{
		value: '1',
		text: '2小时'
	},
	{
		value: '2',
		text: '6小时'
	},
	{
		value: '3',
		text: '12小时'
	},
	{
		value: '4',
		text: '一天'
	}
]);

var _picker_month = new mui.PopPicker();
_picker_month.setData([{
		value: '0',
		text: '一月'
	},
	{
		value: '1',
		text: '二月'
	},
	{
		value: '2',
		text: '三月'
	},
	{
		value: '3',
		text: '四月'
	},
	{
		value: '4',
		text: '五月'
	},
	{
		value: '5',
		text: '六月'
	},
	{
		value: '6',
		text: '七月'
	},
	{
		value: '7',
		text: '八月'
	},
	{
		value: '8',
		text: '九月'
	},
	{
		value: '9',
		text: '十月'
	},
	{
		value: '10',
		text: '十一月'
	},
	{
		value: '11',
		text: '十二月'
	}
]);

/********************************************下拉菜单 ******************************************/

/**
 * @description 设备列表(报表)
 */
mui("body").on("tap","#button_device",function(event){
	window.parent.showDevice(event.target);
})

/**
 * @description 数据类型(报表)
 */
mui("body").on("tap","#button_type",function(event){
	window.parent.showType(event.target);
})

/**
 * @description 时间范围(报表)
 */
mui("body").on("tap","#button_time",function(event){
	window.parent.showTime(event.target);
})

/**
 * @description 日期范围(详情)
 */
mui("body").on("tap","#button_month",function(event){
	window.parent.showMonth(event.target);
})


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

var _is_warn = true;
/*
 开始闪烁警告标志
 * */
function startFlash() 
{
	var img_warn = document.getElementById("img_warn");
	if(_is_warn == true)
	{
		//开始闪烁
		if(img_warn.style.visibility == "visible")
		{
			img_warn.style.visibility = "hidden";
		}
		else
		{
			img_warn.style.visibility = "visible";
		}
		setTimeout('startFlash()', 1000);
	}
	else
	{
		img_warn.style.visibility = "hidden";
	}
}

startFlash();

/*
 停止闪烁
 * */
mui("body").on('tap', '#img_warn', function() {
	_is_warn = false;
})