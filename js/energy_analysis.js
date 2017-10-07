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
mui("#li_nav2").on('tap', 'a.mui-control-item', function(event) {
	//显示对应的2级菜单
	$("#li_nav3").show()
	if(event.target.href.length > 0)
	{
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
		trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	legend: {
		data: ['水', '电', '蒸汽',]
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
		name:"日期",
	}],
	yAxis: [{
		name:"tce",
		type: 'value'
	}],
	series: [
		{
			name: '水',
			type: 'bar',
			stack: '广告',
			data: [20, 32, 40,40]
		},
		{
			name: '电',
			type: 'bar',
			stack: '广告',
			data: [20,45, 45,32]
		},
		{
			name: '蒸汽',
			type: 'bar',
			stack: '广告',
			data: [32, 28, 17,20]
		},
	]
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
		data: ['水', '电', '蒸汽','产能']
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
		name:"日期",
	}],
	yAxis: [{
		name:"tce",
		type: 'value'
	},
	{
            type : 'value',
            name : '产能/t',
          
        }],
	series: [
		{
			name: '水',
			type: 'bar',
			stack: '广告',
			data: [0.03, 0.02, 0.03,0.03]
		},
		{
			name: '电',
			type: 'bar',
			stack: '广告',
			data: [0.02, 0.04, 0.04,0.03]
		},
		{
			name: '蒸汽',
			type: 'bar',
			stack: '广告',
			data: [0.04, 0.03, 0.03,0.01]
		},
		{
            name:'产能',
            type:'line',
            yAxisIndex: 1,
            data:[4000,4500,3000,2000]
        }
	]
});

var _chart_2_1 = echarts.init(document.getElementById('div_level_2_1'));
_chart_2_1.setOption({
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
		},
		x: "left",
	},
	tooltip: {
		trigger: 'item',
		formatter: "{b} : {d}%"
	},

	calculable: true,
	series: [{
		type: 'pie',
		radius: '55%',
		center: ['50%', '60%'],
		data: [{
				value: 26,
				name: '低温酸奶'
			},
			{
				value: 14,
				name: '鲜奶01'
			},
			{
				value: 21,
				name: '鲜奶02'
			},
			{
				value: 39,
				name: '褐饮'
			},
		]
	}]
});


var _chart_2_2 = echarts.init(document.getElementById('div_level_2_2'));
_chart_2_2.setOption({
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
		},
		x: "left",
	},
	tooltip: {
		trigger: 'item',
		formatter: "{b} : {d}%)"
	},

	calculable: true,
	series: [{
		type: 'pie',
		radius: '55%',
		center: ['50%', '60%'],
		data: [{
				value: 50,
				name: '水'
			},
			{
				value: 30,
				name: '电'
			},
			{
				value: 20,
				name: '蒸汽'
			},
		]
	}]
});


var _chart_2_3 = echarts.init(document.getElementById('div_level_2_3'));
_chart_2_3.setOption({
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
		},
		x: "left",
	},
	tooltip: {
		trigger: 'item',
		formatter: "{b} : {d}%)"
	},

	calculable: true,
	series: [{
		type: 'pie',
		radius: '55%',
		center: ['50%', '60%'],
		data: [{
				value: 4,
				name: '收奶'
			},
			{
				value: 23,
				name: '混料'
			},
			{
				value: 27,
				name: '巴杀'
			},
			{
				value: 18,
				name: '发酵'
			},
			{
				value: 5,
				name: '打冷'
			},
			{
				value: 23,
				name: '灌装'
			},
		]
	}]
});


var _chart_3_1 = echarts.init(document.getElementById('div_level_3_1'));
_chart_3_1.setOption({
	tooltip: {
		trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	legend: {
		data: ['水', '电', '蒸汽',]
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
		data: ['低温酸奶', '鲜奶01', '鲜奶02', '褐饮'],
		name:"产品",
	}],
	yAxis: [{
		name:"tce/t",
		type: 'value'
	}],
	series: [
		{
			name: '水',
			type: 'bar',
			stack: '广告',
			data: [0.03, 0.02, 0.03,0.03]
		},
		{
			name: '电',
			type: 'bar',
			stack: '广告',
			data: [0.01,0.03, 0.03,0.02]
		},
		{
			name: '蒸汽',
			type: 'bar',
			stack: '广告',
			data: [0.02, 0.02, 0.02,0.01]
		},
	]
});

var _chart_3_2 = echarts.init(document.getElementById('div_level_3_2'));
_chart_3_2.setOption({
	tooltip: {
		trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
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
		data: ['水', '电', '蒸汽'],
		name:"能源",
	}],
	yAxis: [{
		name:"tce/t",
		type: 'value'
	}],
	series: [
		{
			name: '能源',
			type: 'bar',
			data: [0.08, 0.09, 0.05]
		}
	]
});

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

var _picker_day = new mui.PopPicker();
_picker_day.setData([
	{
		value: '-1',
		text: '全部'
	},
	{
		value: '0',
		text: '1号'
	},
	{
		value: '1',
		text: '2号'
	},
	{
		value: '2',
		text: '3号'
	},
	{
		value: '3',
		text: '4号'
	},
	{
		value: '4',
		text: '5号'
	},
	{
		value: '5',
		text: '6号'
	},
	{
		value: '6',
		text: '7号'
	},
	{
		value: '7',
		text: '8号'
	},
	{
		value: '8',
		text: '9号'
	},
	{
		value: '9',
		text: '10号'
	},
	{
		value: '10',
		text: '11号'
	},
	{
		value: '11',
		text: '12号'
	},
	{
		value: '12',
		text: '13号'
	},
	{
		value: '13',
		text: '14号'
	},
	{
		value: '14',
		text: '15号'
	},
	{
		value: '15',
		text: '16号'
	},
	{
		value: '16',
		text: '17号'
	},
	{
		value: '17',
		text: '18号'
	},
	{
		value: '18',
		text: '19号'
	},
	{
		value: '19',
		text: '20号'
	},
	{
		value: '20',
		text: '21号'
	},
	{
		value: '21',
		text: '22号'
	},
	{
		value: '22',
		text: '23号'
	},
	{
		value: '23',
		text: '24号'
	},
	{
		value: '24',
		text: '25号'
	},
	{
		value: '25',
		text: '26号'
	},
	{
		value: '26',
		text: '27号'
	},
	{
		value: '27',
		text: '28号'
	},
	{
		value: '28',
		text: '29号'
	},
	{
		value: '29',
		text: '30号'
	},
	{
		value: '30',
		text: '31号'
	},
]);

/**
 * @description 日期范围(详情)
 */
mui("body").on("tap",".button_month",function(event){
	var target = event.target;
	//调用父窗体的方法，显示下拉菜单
	window.parent.showMonth(target);
//	_picker_month.show(function(selectItems) {
//		var button_time = document.getElementById("button_month")
//		target.innerHTML = selectItems[0].text;
//	})
})

/**
 * @description 天数范围(详情)
 */
mui("body").on("tap",".button_day",function(event){
	var target = event.target;
		//调用父窗体的方法，显示下拉菜单
	window.parent.showDay(target);
//	_picker_day.show(function(selectItems) {
//		var button_time = document.getElementById("button_day")
//		target.innerHTML = selectItems[0].text;
//	})
})

