
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

var _picker_year = new mui.PopPicker();
_picker_year.setData([{
		value: '0',
		text: '2017年'
	},
	{
		value: '1',
		text: '2016年'
	},
	{
		value: '2',
		text: '2015年'
	},
	{
		value: '3',
		text: '2014年'
	},
	{
		value: '4',
		text: '2013年'
	},
	{
		value: '5',
		text: '2012年'
	}
]);

var _picker_total_spent = new mui.PopPicker();
_picker_total_spent.setData([{
	value:'0',
	text:'全部',
},
{
	value:'1',
	text:'200tce/t',
},
{
	value:'2',
	text:'400tce/t',
},
{
	value:'3',
	text:'600tce/t',
},
{
	value:'4',
	text:'800tce/t',
},
{
	value:'5',
	text:'1000tce/t',
}])

function showMonth(target)
{
	_picker_month.show(function(selectItems) {
		//var button_time = document.getElementById("button_month")
		target.innerHTML = selectItems[0].text;
	})
}

function showDay(target)
{
	_picker_day.show(function(selectItems) {
		//var button_time = document.getElementById("button_day")
		target.innerHTML = selectItems[0].text;
	})
}

function showDevice(target)
{
	_picker_device.show(function(selectItems) {
		//var button_time = document.getElementById("button_device")
		target.innerHTML = selectItems[0].text;
	})
}

function showType(target)
{
	_picker_type.show(function(selectItems) {
		//var button_time = document.getElementById("button_type")
		target.innerHTML = selectItems[0].text;
	})
}

function showTime(target)
{
	_picker_day.show(function(selectItems) {
		//var button_time = document.getElementById("button_time")
		target.innerHTML = selectItems[0].text;
	})
}

function showYear(target)
{
	_picker_year.show(function(selectItems) {
		//var button_time = document.getElementById("button_year")
		target.innerHTML = selectItems[0].text;
	})
}

function showTotalSpent(target)
{
	_picker_total_spent.show(function(selectItems) {
		//var button_time = document.getElementById("button_total_spent")
		target.innerHTML = selectItems[0].text;
	})
}
