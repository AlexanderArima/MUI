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

/*
 能耗预测对比
 * */
var _chart_1 = echarts.init(document.getElementById('div_level_1'));
_chart_1.setOption({
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['预测消耗','实际消耗']
    },
    calculable : true,
    xAxis : [
        {
        	name: "月份/日期",
            type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
        	name: "tce/t",
            type : 'value'
        }
    ],
    series : [
        {
            name:'预测消耗',
            type:'bar',
            data:[500, 500,600, 800,600, 400, 800, 400, 700, 800, 500, 400],
        },
        {
            name:'实际消耗',
            type:'bar',
            data:[700, 300, 900, 700, 500, 400, 700, 500, 800, 600, 500, 500],
        }
    ]
});

/*
 能耗同比分析
 * */
var _chart_2 = echarts.init(document.getElementById('div_level_2'));
_chart_2.setOption({
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['2016年','2017年']
    },
    calculable : true,
    xAxis : [
        {
        	name: "月份/日期",
            type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
        	name: "tce/t",
            type : 'value'
        }
    ],
    series : [
        {
            name:'2016年',
            type:'bar',
            data:[500, 500,600, 800,600, 400, 800, 400, 700, 800, 500, 400],
        },
        {
            name:'2017年',
            type:'bar',
            data:[700, 300, 900, 700, 500, 400, 700, 500, 800, 600, 500, 500],
        }
    ]
});


/*
 能耗环比分析
 * */
var _chart_3 = echarts.init(document.getElementById('div_level_3'));
_chart_3.setOption({
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['8月','9月']
    },
    calculable : true,
    xAxis : [
        {
        	name: "产品",
            type : 'category',
            data : ['鲜奶01','鲜奶02','鲜奶03','鲜奶04','鲜奶05',
            '鲜奶06','酸奶01','酸奶02','酸奶03','酸奶04','酸奶05','酸奶06']
        }
    ],
    yAxis : [
        {
        	name: "tce/t",
            type : 'value'
        }
    ],
    series : [
        {
            name:'8月',
            type:'bar',
            data:[500, 500,600, 800,600, 400, 800, 400, 700, 800, 500, 400],
        },
        {
            name:'9月',
            type:'bar',
            data:[700, 300, 900, 700, 500, 400, 700, 500, 800, 600, 500, 500],
        }
    ]
});

/**
 * @description 年份
 */
mui("body").on("tap",".button_year",function(event){
	var target = event.target;
	//调用父窗体的方法，显示下拉菜单
	window.parent.showYear(target);
})

/**
 * @description 月份
 */
mui("body").on("tap",".button_month",function(event){
	var target = event.target;
	//调用父窗体的方法，显示下拉菜单
	window.parent.showMonth(target);
})

/**
 * @description 总消耗
 */
mui("body").on("tap",".button_total_spent",function(event){
	var target = event.target;
	//调用父窗体的方法，显示下拉菜单
	window.parent.showTotalSpent(target);
})