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
mui("#li_nav1_1").on('tap', 'a.mui-control-item', function() {
	
	console.log(this.getAttribute("index"))
	if(this.getAttribute("index")==1){
		$("#li_nav2_2").show();
		$("#li_nav2_3").hide();
	
	}
	if(this.getAttribute("index")==2){
		$("#li_nav2_2").hide();
		$("#li_nav2_3").show();}
	
	//显示对应的2级菜单

})
mui("#pureWater").on('tap', 'a#pureWater', function() {
	$("#pureWater").style.color==red;
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
	$('#li_nav2_2').css('display', 'none'); //隐藏2,3级菜单
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
		name: '时间/日',
		data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
	}],
	yAxis: [{
		type: 'value',
		name: '纯水能耗总用(吨)',
		axisLabel: {
			formatter: '{value} t'
		}
	}],
	series: [{
			name: '实际用量',
			type: 'line',
			data: [6.4, 13.7, 17.5, 14.8, 13.1, 14.5, 20, 15.5, 14.5, 31, 18.9, 13.5, 18, 19.0, 13.9, 15.0, 22.2, 27.6, 36.4, 32.6, 43.2, 31.6, 21.0, 23.4, 32.3, 4.6, 15.8, 13.1, 12.5, 31.6, 21.0]
		},
		{
			name: '行业标准',
			type: 'line',
			data: [16, 16, 16, 16, 16, 16, 16,16,16, 16, 16, 16, 16, 16,16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,16, 16, 16, 16, 16, 16]
		},
		{
			name: '公司标准',
			type: 'line',
			data: [2.6, 5.9, 9.0, 26.4, 28.7, 20.7, 25.6, 22.2, 28.7, 18.8, 16.0, 12.3, 19, 12.0, 14.9, 7.0, 23.2, 25.6, 26.7, 35.6, 12.2, 32.6, 20.0, 6.4, 3.3, 4.5, 6.8, 6, 23, 11, 8]
		}
	]
});


var main4_1 = echarts.init(document.getElementById('main4_1'));
main4_1.setOption({
	title: {
		text: '各工段能耗占比',
		    x:'center'  
	},
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	legend: {
		orient: 'vertical',
		x: 'right',
		y:"center",
		data: ['收奶', '混料','巴杀','发酵','打冷','罐装']
	},
	calculable: true,
	series: [{
		name: '访问来源',
		type: 'pie',
		radius: ['50%', '70%'],
		itemStyle: {
			normal: {
				label: {
					show: true
				},
				labelLine: {
					show: true
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
				name: '罐装'
			}
			
			
		
		]
	}]
});

var main4_2 = echarts.init(document.getElementById('main4_2'));
main4_2.setOption({
	title: {
		text: '各产品能耗占比',
		   x:'center'  
	},
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	legend: {
		orient: 'vertical',
		x: 'right',
		y:"center",
		data: ['低温酸奶', '鲜奶01','鲜奶02','褐饮']
	},
	calculable: true,
	series: [{
		name: '访问来源',
		type: 'pie',
		radius: ['50%', '70%'],
		itemStyle: {
			normal: {
				label: {
					show: true
				},
				labelLine: {
					show: true
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
			}
		]
	}]
});


var dom1 = document.getElementById("chart1");
var myChart = echarts.init(dom1);
var app = {};
option = null;
app.title = '坐标轴刻度与标签对齐';

option = {
      title: {
                text: '产量能耗图',
                x:'center'
            },
            color: ['#912CEE', '#8FBC8F', '	#CD2626', '#0000FF', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
     legend: {
     	x:'right',
         data: ['17年8月产量', '17年8月能耗', ]
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
    xAxis : [
        {
            type : 'category',
            name: '时间/日',
            data : [
                    '8-1', '8-2', '8-3', '8-4', '8-5', '8-6', '8-7', '8-8', '8-9', '8-10',
                    '8-11', '8-12', '8-13', '8-14', '8-15', '8-16', '8-17', '8-18', '8-19', '8-20'
                    , '8-21', '8-22', '8-23', '8-24', '8-25', '8-26', '8-27', '8-28', '8-29', '8-30', '8-31'

                ],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'产量(T)'
           
        }, {
                type: 'value',
                name:'能耗(TCE)',
                splitLine: {
                    show:true,
                }
            }
    ],
    series : [
            {
                name: '17年8月产量',
                type: 'bar',
                
                barWidth: 10,
              data: [200,210,220,221,230,240,250,260,270,280,290,210,230,240,230,210,200,190,200,178,150,170,180,135,178,245,189,178,197,165,180]
            },
			
			  {
                name: '17年8月能耗',
                type: 'line',
                yAxisIndex: 1,

                data: [20,32,38,25,36,32,32,33,36,45,47,38,27,40,42,38,25,36,22,42,43,36,25,37,28,17,33,24,30,20,30]
           }

        ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

var main1_2 = echarts.init(document.getElementById('main1_2'));
main1_2.setOption({
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
		data: ['马鞍山低温厂', '泰安低温厂','行业标准', '公司标准']
	},
	xAxis: [{
		type: 'category',
		name: '时间/日',
		data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
	}],
	yAxis: [{
		type: 'value',
		name: '用电(度)',
		axisLabel: {
			formatter: '{value} °'
		}
	}],
	series: [{
			name: '马鞍山低温厂',
			type: 'line',
			data: [6.5, 13.3, 17.2, 24.8, 10.1, 24.5, 20.8, 25.5, 24.5, 20, 11.9, 14.5, 20, 29.0, 11.9, 12.0, 24.2, 29.6, 26.4, 22.6, 43.2, 37.6, 22.0, 33.4, 35.3, 14.6, 10.8, 12.1, 11.5, 11.6, 31.0]
		},{
			name: '泰安低温厂',
			type: 'line',
			data: [6.4, 13.7, 17.5, 14.8, 13.1, 14.5, 20, 15.5, 14.5, 31, 18.9, 13.5, 18, 19.0, 13.9, 15.0, 22.2, 27.6, 36.4, 32.6, 43.2, 31.6, 21.0, 23.4, 32.3, 4.6, 15.8, 13.1, 12.5, 31.6, 21.0]
		},
		{
			name: '行业标准',
			type: 'line',
			data: [16, 16, 16, 16, 16, 16, 16,16,16, 16, 16, 16, 16, 16,16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,16, 16, 16, 16, 16, 16]
		},
		{
			name: '公司标准',
			type: 'line',
			data: [2.6, 5.9, 9.0, 26.4, 28.7, 20.7, 25.6, 22.2, 28.7, 18.8, 16.0, 12.3, 19, 12.0, 14.9, 7.0, 23.2, 25.6, 26.7, 35.6, 12.2, 32.6, 20.0, 6.4, 3.3, 4.5, 6.8, 6, 23, 11, 8]
		}
	]
});
var main4_1_1 = echarts.init(document.getElementById('main4_1_1'));
main4_1_1.setOption({
	title: {
		text: '马鞍山低温厂各工段电力能耗占比',
		    x:'center'  
	},
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	legend: {
		orient: 'vertical',
		x: 'right',
		y:"center",
		data: ['锅炉', '变电','中心','车间']
	},
	calculable: true,
	series: [{
		name: '访问来源',
		type: 'pie',
		radius: ['50%', '70%'],
		itemStyle: {
			normal: {
				label: {
					show: true
				},
				labelLine: {
					show: true
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
				value: 8,
				name: '锅炉'
			},
			{
				value: 42,
				name: '变电'
			},
			{
				value: 23,
				name: '中心'
			},
			{
				value: 27,
				name: '车间'
			}

			
		
		]
	}]
});

var main4_2_2 = echarts.init(document.getElementById('main4_2_2'));
main4_2_2.setOption({
	title: {
		text: '泰安低温厂各工段电力能耗占比',
		   x:'center'  
	},
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	legend: {
		orient: 'vertical',
		x: 'right',
		y:"center",
		data: ['锅炉', '变电','中心','车间']
	},
	calculable: true,
	series: [{
		name: '访问来源',
		type: 'pie',
		radius: ['50%', '70%'],
		itemStyle: {
			normal: {
				label: {
					show: true
				},
				labelLine: {
					show: true
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
				value: 14,
				name: '锅炉'
			},
			{
				value: 36,
				name: '变电'
			},
			{
				value: 13,
				name: '中心'
			},
			{
				value: 37,
				name: '车间'
			}

		]
	}]
});
 
var main4_1_3 = echarts.init(document.getElementById('main4_1_3'));
main4_1_3.setOption({
	title: {
		text: '马鞍山低温厂各产品电力能耗占比',
		    x:'center'  
	},
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	legend: {
		orient: 'vertical',
		x: 'right',
		y:"center",
		data: ['低温酸奶', '鲜奶01','鲜奶02','褐饮']
	},
	calculable: true,
	series: [{
		name: '访问来源',
		type: 'pie',
		radius: ['50%', '70%'],
		itemStyle: {
			normal: {
				label: {
					show: true
				},
				labelLine: {
					show: true
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
			}

			
		
		]
	}]
});

var main4_2_4 = echarts.init(document.getElementById('main4_2_4'));
main4_2_4.setOption({
	title: {
		text: '泰安低温厂各产品电力能耗占比',
		   x:'center'  
	},
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	legend: {
		orient: 'vertical',
		x: 'right',
		y:"center",
		data: ['低温酸奶', '鲜奶01','鲜奶02','褐饮']
	},
	calculable: true,
	series: [{
		name: '访问来源',
		type: 'pie',
		radius: ['50%', '70%'],
		itemStyle: {
			normal: {
				label: {
					show: true
				},
				labelLine: {
					show: true
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
				value: 30,
				name: '低温酸奶'
			},
			{
				value: 20,
				name: '鲜奶01'
			},
			{
				value: 11,
				name: '鲜奶02'
			},
			{
				value: 39,
				name: '褐饮'
			}
		]
	}]
});
 
 
var main1_3 = echarts.init(document.getElementById('main1_3'));
main1_3.setOption({
	title: {
		text: '一季度马鞍山泰安低温工厂用电能耗图',
		    x:'center'  
	},
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
		orient: 'vertical',
		x: 'left',
		y:"top",
		data: [ '马鞍山低温工厂', '泰安低温工厂']
	},
	xAxis: [{
		type: 'category',
		name: '日期/月份',
		data: ['一月', '二月', '三月']
	}],
	yAxis: [{
		type: 'value',
		name: '用电(度)',
		axisLabel: {
			formatter: '{value} °'
		}
	}],
	series: [{
			name: '马鞍山低温工厂',
			type: 'bar',
			data: [11116.4, 12223.7, 12228.3]},
		{
			name: '泰安低温工厂',
			type: 'bar',
			data: [12336.2, 7886.1,20322.1]
		},

	]
});

var main1_4 = echarts.init(document.getElementById('main1_4'));
main1_4.setOption({
	title: {
		text: '一季度马鞍山泰安低温工厂产量图',
		    x:'center'  
	},
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
		orient: 'vertical',
		x: 'left',
		y:"top",
		data: [ '马鞍山低温工厂', '泰安低温工厂']
	},
	xAxis: [{
		type: 'category',
		name: '日期/月份',
		data: ['一月', '二月', '三月']
	}],
	yAxis: [{
		type: 'value',
		name: '产量(TCE)',
		axisLabel: {
			formatter: '{value} t'
		}
	}],
	series: [{
			name: '马鞍山低温工厂',
			type: 'bar',
			data: [500, 600, 400]},
		{
			name: '泰安低温工厂',
			type: 'bar',
			data: [300, 800,600]
		},

	]
});

var main4_1_5 = echarts.init(document.getElementById('main4_1_5'));
main4_1_5.setOption({
	title: {
		text: '马鞍山低温厂设备能耗占比',
		    x:'center'  
	},
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	legend: {
		orient: 'vertical',
		x: 'right',
		y:"center",
		data: ['车间配电室变压器', '高压配电室变压器','锅炉配电室变压器']
	},
	calculable: true,
	series: [{
		name: '访问来源',
		type: 'pie',
		radius: ['50%', '70%'],
		itemStyle: {
			normal: {
				label: {
					show: true
				},
				labelLine: {
					show: true
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
				value: 23,
				name: '车间配电室变压器'
			},
			{
				value: 27,
				name: '高压配电室变压器'
			},
			{
				value: 50,
				name: '锅炉配电室变压器'
			}
			
		]
	}]
});
var main4_1_6 = echarts.init(document.getElementById('main4_1_6'));
main4_1_6.setOption({
	title: {
		text: '泰安低温厂设备能耗占比',
		    x:'center'  
	},
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	legend: {
		orient: 'vertical',
		x: 'right',
		y:"center",
		data: ['车间配电室变压器', '高压配电室变压器','锅炉配电室变压器']
	},
	calculable: true,
	series: [{
		name: '访问来源',
		type: 'pie',
		radius: ['50%', '70%'],
		itemStyle: {
			normal: {
				label: {
					show: true
				},
				labelLine: {
					show: true
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
				value: 27,
				name: '车间配电室变压器'
			},
			{
				value: 33,
				name: '高压配电室变压器'
			},
			{
				value: 40,
				name: '锅炉配电室变压器'
			}
			
		]
	}]
});
var main4_1_7 = echarts.init(document.getElementById('main4_1_7'));
main4_1_7.setOption({
	title: {
		text: '马鞍山低温厂各时段能耗占比',
		    x:'center'  
	},
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	legend: {
		orient: 'vertical',
		x: 'right',
		y:"center",
		data: ['峰电', '谷电','平电']
	},
	calculable: true,
	series: [{
		name: '能耗占比',
		type: 'pie',
		radius: ['50%', '70%'],
		itemStyle: {
			normal: {
				label: {
					show: true
				},
				labelLine: {
					show: true
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
				value: 37,
				name: '峰电'
			},
			{
				value: 23,
				name: '谷电'
			},
			{
				value: 40,
				name: '平电'
			}
			
		]
	}]
});

var main4_1_8 = echarts.init(document.getElementById('main4_1_8'));
main4_1_8.setOption({
	title: {
		text: '泰安低温厂各时段能耗占比',
		    x:'center'  
	},
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	legend: {
		orient: 'vertical',
		x: 'right',
		y:"center",
		data: ['峰电', '谷电','平电']
	},
	calculable: true,
	series: [{
		name: '能耗占比',
		type: 'pie',
		radius: ['50%', '70%'],
		itemStyle: {
			normal: {
				label: {
					show: true
				},
				labelLine: {
					show: true
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
				value: 37,
				name: '峰电'
			},
			{
				value: 23,
				name: '谷电'
			},
			{
				value: 60,
				name: '平电'
			}
			
		]
	}]
});
