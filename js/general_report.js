/**
 * @description 基于准备好的dom，初始化echarts实例
 */
var main1_1 = echarts.init(document.getElementById('main1_1'));
main1_1.setOption({
	tooltip: {
		trigger: 'axis'
	},
	toolbox: {
		show: true,
		feature: {
			mark: {
				show: true
			},
			dataView: {
				show: true,
				readOnly: false
			},
			magicType: {
				show: true,
				type: ['line', 'bar']
			},
			restore: {
				show: true
			},
			saveAsImage: {
				show: true
			}
		}
	},
	calculable: true,
	legend: {
		data: ['实际用量', '行业标准', '公司标准']
	},
	xAxis: [{
		type: 'category',
		name: '时间/天(一个月)',
		data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
	}],
	yAxis: [{
		type: 'value',
		name: '水能耗总用(吨)',
		axisLabel: {
			formatter: '{value} t'
		}
	}],
	series: [{
			name: '实际用量',
			type: 'line',
			data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 4.5, 6.8, 4.1, 14, 32.6, 20.0, 6.4, 3.3, 4.5, 6.8, 4.1, 14, 21, 10, 5, 3, 9, 4.5, 9]
		},
		{
			name: '行业标准',
			type: 'line',
			data: [6.4, 3.3, 4.5, 6.8, 4.1, 14, 21, 10, 5, 3, 9, 4.5, 9, 2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 4.5, 6.8, 4.1, 14, 32.6, 20.0]
		},
		{
			name: '公司标准',
			type: 'line',
			data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3, 9, 2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 4.5, 6.8, 6, 23, 11, 8]
		}
	]
});
/**
 * @description 基于准备好的dom，初始化echarts实例
 */
var main2_1 = echarts.init(document.getElementById('main2_1'));
main2_1.setOption({
	tooltip: {
		trigger: 'axis'
	},
	toolbox: {
		show: true,
		feature: {
			mark: {
				show: true
			},
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
	legend: {
		x: 'left',
		data: ['实际用量', '行业标准', '公司标准']
	},
	xAxis: [{
		type: 'category',
		name: '时间/天(一个月)',
		data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
	}],
	yAxis: [{
		type: 'value',
		name: '软水能耗总耗用/吨',
		axisLabel: {
			formatter: '{value} t'
		}
	}],
	series: [{
			name: '实际用量',
			type: 'line',
			data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 4.5, 6.8, 4.1, 14, 32.6, 20.0, 6.4, 3.3, 4.5, 6.8, 4.1, 14, 21, 10, 5, 3, 9, 4.5, 9]
		},
		{
			name: '行业标准',
			type: 'line',
			data: [6.4, 3.3, 4.5, 6.8, 4.1, 14, 21, 10, 5, 3, 9, 4.5, 9, 2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 4.5, 6.8, 4.1, 14, 32.6, 20.0]
		},
		{
			name: '公司标准',
			type: 'line',
			data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3, 9, 2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 4.5, 6.8, 6, 23, 11, 8]
		}
	]
});

var main2_2 = echarts.init(document.getElementById('main2_2'));
main2_2.setOption({
	tooltip: {
		trigger: 'axis'
	},
	toolbox: {
		show: true,
		feature: {
			mark: {
				show: true
			},
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
	legend: {
		x: 'left',
		data: ['实际用量', '行业标准', '公司标准']
	},
	xAxis: [{
		type: 'category',
		name: '时间/天(一个月)',
		data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
	}],
	yAxis: [{
		type: 'value',
		name: '软水能耗总耗用/吨',
		axisLabel: {
			formatter: '{value} t'
		}
	}],
	series: [{
			name: '实际用量',
			type: 'line',
			data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 4.5, 6.8, 4.1, 14, 32.6, 20.0, 6.4, 3.3, 4.5, 6.8, 4.1, 14, 21, 10, 5, 3, 9, 4.5, 9]
		},
		{
			name: '行业标准',
			type: 'line',
			data: [6.4, 3.3, 4.5, 6.8, 4.1, 14, 21, 10, 5, 3, 9, 4.5, 9, 2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 4.5, 6.8, 4.1, 14, 32.6, 20.0]
		},
		{
			name: '公司标准',
			type: 'line',
			data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3, 9, 2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 4.5, 6.8, 6, 23, 11, 8]
		}
	]
});

var main3_1 = echarts.init(document.getElementById('main3_1'));
main3_1.setOption({
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		x: 'left',
		data: ['8月份用量', '9月份用量']
	},
	toolbox: {
		show: true,
		feature: {
			mark: {
				show: true
			},
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
		data: ['泰安低温工厂', '马鞍山低温工厂', '马鞍山常温工厂']
	}],
	yAxis: [{
		name: '水能耗总用/吨',
		type: 'value'
	}],
	series: [{
			name: '8月份用量',
			type: 'bar',
			data: [2.0, 4.9, 7.0],
			markPoint: {
				data: [{
						type: 'max',
						name: '最大值'
					},
					{
						type: 'min',
						name: '最小值'
					}
				]
			},
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}]
			}
		},
		{
			name: '9月份用量',
			type: 'bar',
			data: [2.6, 5.9, 9.0],
			markPoint: {
				data: [{
						name: '年最高',
						value: 182.2,
						xAxis: 7,
						yAxis: 183,
						symbolSize: 18
					},
					{
						name: '年最低',
						value: 2.3,
						xAxis: 11,
						yAxis: 3
					}
				]
			},
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}]
			}
		}
	]
});

var main4_1 = echarts.init(document.getElementById('main4_1'));
main4_1.setOption({
	title: {
		text: '水能源总耗用'
	},
	tooltip: {
		trigger: 'item',
		formatter: "{b} : {c} ({d}%)"
	},
	legend: {
		orient: 'vertical',
		x: 'right',
		y:"bottom",
		data: ['已使用', '未使用']
	},
	calculable: true,
	series: [{
		type: 'pie',
		radius: ['50%', '70%'],
		itemStyle: {
			normal: {
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			},
			emphasis: {
				label: {
					show: true,
					position: 'center',
					textStyle: {
						fontSize: '30',
						fontWeight: 'bold'
					}
				}
			}
		},
		data: [{
				value: 60,
				name: '已使用'
			},
			{
				value: 40,
				name: '未使用'
			}
		]
	}]
});

var main4_2 = echarts.init(document.getElementById('main4_2'));
main4_2.setOption({
	title: {
		text: '泰安低温工厂总耗用'
	},
	tooltip: {
		trigger: 'item',
		formatter: "{b} : {c} ({d}%)"
	},
	legend: {
		orient: 'vertical',
		x: 'right',
		y:"bottom",
		data: ['已使用', '未使用']
	},
	calculable: true,
	series: [{
		type: 'pie',
		radius: ['50%', '70%'],
		itemStyle: {
			normal: {
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			},
			emphasis: {
				label: {
					show: true,
					position: 'center',
					textStyle: {
						fontSize: '30',
						fontWeight: 'bold'
					}
				}
			}
		},
		data: [{
				value: 70,
				name: '已使用'
			},
			{
				value: 30,
				name: '未使用'
			}
		]
	}]
});


var main4_3 = echarts.init(document.getElementById('main4_3'));
main4_3.setOption({
	title: {
		text: '马鞍山低温工厂'
	},
	tooltip: {
		trigger: 'item',
		formatter: "{b} : {c} ({d}%)"
	},
	legend: {
		orient: 'vertical',
		x: 'right',
		y:"bottom",
		data: ['已使用', '未使用']
	},
	calculable: true,
	series: [{
		type: 'pie',
		radius: ['50%', '70%'],
		itemStyle: {
			normal: {
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			},
			emphasis: {
				label: {
					show: true,
					position: 'center',
					textStyle: {
						fontSize: '30',
						fontWeight: 'bold'
					}
				}
			}
		},
		data: [{
				value: 80,
				name: '已使用'
			},
			{
				value: 20,
				name: '未使用'
			}
		]
	}]
});



var main4_4 = echarts.init(document.getElementById('main4_4'));
main4_4.setOption({
	title: {
		text: '马鞍山常温工厂'
	},
	tooltip: {
		trigger: 'item',
		formatter: "{b} : {c} ({d}%)"
	},
	legend: {
		orient: 'vertical',
		x: 'right',
		y:"bottom",
		data: ['已使用', '未使用']
	},
	calculable: true,
	series: [{
		type: 'pie',
		radius: ['50%', '70%'],
		itemStyle: {
			normal: {
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			},
			emphasis: {
				label: {
					show: true,
					position: 'center',
					textStyle: {
						fontSize: '30',
						fontWeight: 'bold'
					}
				}
			}
		},
		data: [{
				value: 90,
				name: '已使用'
			},
			{
				value: 10,
				name: '未使用'
			}
		]
	}]
});

mui(".mui-content").on("tap",".mui-icon-arrowleft", function(){
	 parent.document.getElementById("myframe").src = "home.html"
})
