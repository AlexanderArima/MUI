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
	//显示对应的2级菜单
	$("#li_nav3").show()
	if(event.target.href.length > 0) {
		window.location.href = event.target.href;
	}
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

var _chart_1_1 = echarts.init(document.getElementById('div_level_1_1'));
_chart_1_1.setOption({
	tooltip: {
		//'蒙牛{b}工厂9月份产量:{c0}',
		formatter: function(item) {
			if(item[0].length > 0) {
				//显示数据
				return '蒙牛' + item[5].name + '工厂9月份<br/>产量：' + item[5].value + "<br/>能耗：" + item[5].value2
			} else {
				return '<span>暂无数据</span>'
			}
			//return "{c0}"
		},
	},
	dataRange: {
		min: 0,
		max: 5000,
		calculable: true,
		color: ['#CC0000', '#FF5050', '#FF6666', '#FF9999']
	},
	series: [{
		name: 'Top5',
		type: 'map',
		mapType: 'china',
		data: [],
		hoverable: true,
		geoCoord: {
			"呼和浩特": [111.65, 40.82],
			"马鞍山": [118.48, 31.56],
			"泰安": [117.13, 36.18],
			"北京": [116.46, 39.92],
		},
		markPoint: {
			symbol: 'circle',
			symbolSize: function(v) {
				return 10 + v / 1000
			},
			effect: {
				show: true,
				shadowBlur: 0
			},
			itemStyle: {
				normal: {
					label: {
						show: false
					}
				}
			},
			data: [{
					name: "呼和浩特",
					value: 500,
					value2: 5000,
				},
				{
					name: "马鞍山",
					value: 2000,
					value2: 20000,
				},
				{
					name: "泰安",
					value: 2500,
					value2: 25000,
				},
				{
					name: "北京",
					value: 5000,
					value2: 50000,
				}
			]
		}
	}]
});

var _chart_1_2 = echarts.init(document.getElementById('div_level_1_2'));
_chart_1_2.setOption({
	tooltip: {
		trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	legend: {
		data: ['水','产能']
	},
	
	calculable: true,
	dataZoom: {
		orient: "horizontal", //水平显示
		show: true, //显示滚动条
		start: 0, //起始值为20%
		end: 60, //结束值为60%
		height:20,
	},
	xAxis: [{
		type: 'category',
		data: ['1', '2', '3', '4','5','6','7','8','9','10','11'],
		name: "工厂",
		splitArea: {
			show: true
		}
	}],
	yAxis: [{
			name: "tce/t",
			type: 'value'
		},
		{
			type: 'value',
			name: '产能/t',

		}
	],
	series: [{
			name: '水',
			type: 'bar',
			stack: '广告',
			data: [50, 70, 30, 50,90,60,20,70,50,70,40],
			barWidth: 20,
	},
		{
			name: '产能',
			type: 'line',
			yAxisIndex: 1,
			data: [50, 70, 30, 50,90,60,20,70,50,70,40],
		}
	]
});

var _chart_2_1 = echarts.init(document.getElementById('div_level_2_1'));
_chart_2_1.setOption({
	tooltip: {
		trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	legend: {
		data: ['水', '电', '蒸汽', ]
	},
	toolbox: {
		show: true,
		orient: 'vertical',
		x: 'right',
		y: 'center',
		feature: {
			magicType: {
				show: true,
				type: ['line', 'bar', 'stack', 'tiled']
			},
			restore: {
				show: true
			},
		}
	},
	calculable: true,
	xAxis: [{
		type: 'category',
		data: ['9月17', '9月18', '9月19', '9月20'],
		name: "日期",
	}],
	yAxis: [{
		name: "tce",
		type: 'value'
	}],
	series: [{
			name: '水',
			type: 'bar',
			stack: '广告',
			data: [20, 32, 40, 40],
			barWidth: 20,
		},
		{
			name: '电',
			type: 'bar',
			stack: '广告',
			data: [20, 45, 45, 32]
		},
		{
			name: '蒸汽',
			type: 'bar',
			stack: '广告',
			data: [32, 28, 17, 20]
		},
	]
});

var _chart_2_2 = echarts.init(document.getElementById('div_level_2_2'));
_chart_2_2.setOption({
	tooltip: {
		trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	legend: {
		data: ['水', '电', '蒸汽', '产能']
	},
	toolbox: {
		show: true,
		orient: 'vertical',
		x: 'right',
		y: 'center',
		feature: {
			magicType: {
				show: true,
				type: ['line', 'bar', 'stack', 'tiled']
			},
			restore: {
				show: true
			},
		}
	},
	calculable: true,
	xAxis: [{
		type: 'category',
		data: ['6月', '7月', '8月', '9月'],
		name: "月份",
	}],
	yAxis: [{
			name: "tce/t",
			type: 'value'
		},
		{
			type: 'value',
			name: '产能/t',

		}
	],
	series: [{
			name: '水',
			type: 'bar',
			stack: '广告',
			data: [0.03, 0.02, 0.03, 0.03],
			barWidth: 20,
		},
		{
			name: '电',
			type: 'bar',
			stack: '广告',
			data: [0.02, 0.04, 0.04, 0.03]
		},
		{
			name: '蒸汽',
			type: 'bar',
			stack: '广告',
			data: [0.04, 0.03, 0.03, 0.01]
		},
		{
			name: '产能',
			type: 'line',
			yAxisIndex: 1,
			data: [4000, 4500, 3000, 2000]
		}
	]
});


/**
 * @description 年份范围(详情)
 */
mui("body").on("tap", ".button_year", function(event) {
//	var mask = mui.createMask();//callback为用户点击蒙版时自动执行的回调；
//	mask.show();//显示遮罩

	window.parent.showYear(event.target);
})

/**
 * @description 月份范围(详情)
 */
mui("body").on("tap", ".button_month", function(event) {
//	var mask = mui.createMask();//callback为用户点击蒙版时自动执行的回调；
//	mask.show();//显示遮罩
	window.parent.showMonth(event.target);
})

/**
 * @description 天数范围(详情)
 */
mui("body").on("tap", ".button_day", function(event) {
	window.parent.showDay(event.target);
})