/**
 * @description 基于准备好的dom，初始化echarts实例
 */
var _myChart = echarts.init(document.getElementById('main'));
//_myChart.setOption({
//	title: {
//		text: '当月华中地区工厂产能与水能耗消耗',
//		x: 'center'
//	},
//	tooltip: {
//		trigger: 'axis'
//	},
//	toolbox: {
//		show: true,
//		feature: {
//			magicType: {
//				show: true,
//				type: ['line', 'bar']
//			},
//			restore: {
//				show: true
//			},
//		}
//	},
//	calculable: true,
//	legend: {
//		x: 'left',
//		padding: [10, 10, 30, 30],
//		data: ['耗电量', '消耗蒸汽']
//	},
//	xAxis: [{
//		type: 'category',
//		data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
//	}],
//	yAxis: [{
//			type: 'value',
//			name: '水耗用/t',
//		},
//		{
//			type: 'value',
//			name: '产能/吨',
//		}
//	],
//	series: [
//
//		{
//			name: '耗电量',
//			type: 'bar',
//			data: [50, 70, 30, 50, 90, 60, 20, 80, 50, 70, 50, 35]
//		},
//		{
//			name: '消耗蒸汽',
//			type: 'line',
//			yAxisIndex: 1,
//			data: [50, 80, 20, 40, 80, 90, 30, 62, 72, 50, 48, 30]
//		}
//	]
//});

/**
 * @description 点击第1,2,3层筛选条件
 */
mui("#div_level_one").on("tap", "li", function(event) {
	$(this).parent().parent().find("li").each(function(index, item) {
		$(item).css("outline", "0px")
		$(item).removeClass("active")
	})
	$(this).css("outline", "red solid 2px")
	$(this).addClass("active")
	//说明
	//console.log(event.target.className.indexOf("mui-icon-info"))
	if(event.target.className.indexOf("mui-icon-info") > -1) {
		mui.toast("百分数为所有设备实际消耗与预期消耗之比")
	} else if(event.target.className.indexOf("mui-icon-list") > -1) {
		//document.getElementById("myframe").contentWindow.src = "general_report.html"
		console.log(parent.document.getElementById("myframe"))
		parent.document.getElementById("myframe").src = "general_report.html"
	}
})

mui("#div_level_two").on("tap", "li", function(event) {
	//判断第一层条件是否选中
	var is_active = 0;
	$("#div_level_one li").each(function(index, item) {
		console.log($(item))
		if($(item).hasClass("active")) {
			is_active++;
		}
	})
	if(is_active == 0) {
		mui.toast("请选择类型", "提示")
		return;
	}
	$(this).parent().parent().find("li").each(function(index, item) {
		$(item).css("outline", "0px")
		$(item).removeClass("active")
	})
	$(this).css("outline", "red solid 2px")
	$(this).addClass("active")
	//说明
	if(event.target.className.indexOf("mui-icon-info") > -1) {
		mui.toast("百分数为所有设备实际消耗与预期消耗之比")
	}

})

mui("#div_level_three").on("tap", "li", function() {
	var is_active = 0;
	$("#div_level_two li").each(function(index, item) {
		if($(item).hasClass("active")) {
			is_active++;
		}
	})
	if(is_active == 0) {
		mui.toast("请选择工厂")
		return;
	}
	$(this).parent().parent().find("li").each(function(index, item) {
		$(item).css("outline", "0px")
		$(item).removeClass("active")
	})
	$(this).css("outline", "red solid 2px")
	$(this).addClass("active")
	//显示报表
	$("#main").css("display", "block")
	_myChart.resize()
	//设置报表的titile
	var title = $(this).find("span").html();
	var data1 = new Array();
	var data2 = new Array();
	var data = new Array();
	data1[0] = [50, 70, 30, 50, 90, 60, 20, 80, 50, 35, 50, 35];
	data1[1] = [70, 50 ,30, 50, 35, 60, 20, 80, 50, 70, 50, 35];
	data1[2] = [50, 70, 50, 70, 90, 60, 20, 50, 80, 35, 50, 35];
	data1[3] = [35, 70, 30, 50, 35, 50, 70, 80, 50, 70, 50, 35];

	data2[0] = [50, 80, 20, 90, 80, 90, 48, 62, 52, 62, 30, 90];
	data2[1] = [80, 40, 72, 50, 48, 90, 30, 30, 22, 30, 48, 30];
	data2[2] = [50, 80, 20, 90, 80, 90, 48, 30, 72, 50, 30, 80];
	data2[3] = [40, 30, 62, 40, 48, 90, 30, 62, 62, 42, 48, 70];

	if(title == '华东') {
		data[0] = data1[0];
		data[1] = data2[0];
	}
	if(title == '华北') {
		data[0] = data1[1];
		data[1] = data2[1];
	}
	if(title == '华中') {
		data[0] = data1[2];
		data[1] = data2[2];
	}
	if(title == '华南') {
		data[0] = data1[3];
		data[1] = data2[3];
	}

	_myChart.setOption({
		title: {
			text: '当月' + title + '地区工厂产能与水能耗消耗',
			x: 'center'
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
				},
			}
		},
		calculable: true,
		legend: {
			x: 'left',
			padding: [10, 10, 30, 30],
			data: ['耗电量', '消耗蒸汽']
		},
		xAxis: [{
			type: 'category',
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
		}],
		yAxis: [{
				type: 'value',
				name: '水耗用/t',
			},
			{
				type: 'value',
				name: '产能/吨',
			}
		],
		series: [{
				name: '耗电量',
				type: 'bar',
				data: data[0],

			},
			{
				name: '消耗蒸汽',
				type: 'line',
				yAxisIndex: 1,
				data:data[1],
			}
		]
	});
	//说明
	if(event.target.className.indexOf("mui-icon-info") > -1) {
		mui.toast("百分数为所有设备实际消耗与预期消耗之比")
	}
})

//mui("#div_level_one").on("tap",".mui-icon-info",function(){
//	mui.toast("百分数为所有设备实际消耗与预期消耗之比")
//})