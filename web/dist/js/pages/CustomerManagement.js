//今日新增单量
var allnum_customer;
//今日待审核单量
var waitingforaudit_CustomerManagement;
//今日已出库数
var numberofoutbound_CustomerManagement;
//日快递费用
var daycost_CustomerManagement;
var monthcost_CustomerManagement;

var readyforaudit_CustomerManagement;


/*
 * 新增单量趋势7天
 */
var days7 = [];
var ordercounts7 = [];
var days7ChartCanvas = $("#days7Chartforsomeone").get(0).getContext("2d");
var days7Chart = new Chart(days7ChartCanvas);
/*
 * 新增单量趋势7天数据
 */
var days7ChartData = {
	labels : days7,
	datasets : [ {
		label : "Electronics",
		fillColor : "rgba(116,165,193,1)",//rgba(116,165,193,1)
		strokeColor : "rgba(60,141,188,1)",
		pointColor : "rgba(60,141,188,1)",
		pointStrokeColor : "#fff",//#3b8bba
		pointHighlightFill : "#fff",//rgba(60,141,188,1)
		pointHighlightStroke : "#3b8bba",
		data : ordercounts7
	} ]

};
/*
 * 新增单量趋势7天设置
 */
var days7ChartOptions = {
	// Boolean - If we should show the scale at all
	showScale : true,
	// Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines : false,
	// String - Colour of the grid lines
	scaleGridLineColor : "rgba(0,0,0,.05)",
	// Number - Width of the grid lines
	scaleGridLineWidth : 1,
	// Boolean - Whether to show horizontal lines (except X axis)
	scaleShowHorizontalLines : true,
	// Boolean - Whether to show vertical lines (except Y axis)
	scaleShowVerticalLines : true,
	// Boolean - Whether the line is curved between points
	bezierCurve : true,
	// Number - Tension of the bezier curve between points
	bezierCurveTension : 0.3,
	// Boolean - Whether to show a dot for each point
	pointDot : true,
	// Number - Radius of each point dot in pixels
	pointDotRadius : 4,
	// Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,
	// Number - amount extra to add to the radius to cater for hit detection
	// outside the drawn point
	pointHitDetectionRadius : 20,
	// Boolean - Whether to show a stroke for datasets
	datasetStroke : true,
	// Number - Pixel width of dataset stroke
	datasetStrokeWidth : 5,
	// Boolean - Whether to fill the dataset with a color
	datasetFill : true,
	// String - A legend template
	legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
	// Boolean - whether to maintain the starting aspect ratio or not when
	// responsive, if set to false, will take up entire container
	maintainAspectRatio : true,
	// Boolean - whether to make the chart responsive to window resizing
	responsive : true
};

/*
 * 新增单量趋势点击事件
 */
function dayClick7() {
	days7Chart.Line(days7ChartData, days7ChartOptions);
}

/*
 * 出库单量趋势7天
 */
var days7out = [];
var ordercounts7out = [];
var days7outChartCanvas = $("#daysforsomeone").get(0).getContext("2d");
var days7outChart = new Chart(days7outChartCanvas);
/*
 * 出库单量趋势7天数据
 */
var days7outChartData = {
	labels : days7out,
	datasets : [ {
		label : "Electronics",
		fillColor : "rgba(116,165,193,1)",//rgba(116,165,193,1)
		strokeColor : "rgba(60,141,188,1)",
		pointColor : "rgba(60,141,188,1)",
		pointStrokeColor : "#fff",//#3b8bba
		pointHighlightFill : "#fff",//rgba(60,141,188,1)
		pointHighlightStroke : "#3b8bba",
		data : ordercounts7out
	} ]

};
/*
 * 出库单量趋势7天设置
 */
var days7outChartOptions = {
	// Boolean - If we should show the scale at all
	showScale : true,
	// Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines : false,
	// String - Colour of the grid lines
	scaleGridLineColor : "rgba(0,0,0,.05)",
	// Number - Width of the grid lines
	scaleGridLineWidth : 1,
	// Boolean - Whether to show horizontal lines (except X axis)
	scaleShowHorizontalLines : true,
	// Boolean - Whether to show vertical lines (except Y axis)
	scaleShowVerticalLines : true,
	// Boolean - Whether the line is curved between points
	bezierCurve : true,
	// Number - Tension of the bezier curve between points
	bezierCurveTension : 0.3,
	// Boolean - Whether to show a dot for each point
	pointDot : true,
	// Number - Radius of each point dot in pixels
	pointDotRadius : 4,
	// Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,
	// Number - amount extra to add to the radius to cater for hit detection
	// outside the drawn point
	pointHitDetectionRadius : 20,
	// Boolean - Whether to show a stroke for datasets
	datasetStroke : true,
	// Number - Pixel width of dataset stroke
	datasetStrokeWidth : 5,
	// Boolean - Whether to fill the dataset with a color
	datasetFill : true,
	// String - A legend template
	legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
	// Boolean - whether to maintain the starting aspect ratio or not when
	// responsive, if set to false, will take up entire container
	maintainAspectRatio : true,
	// Boolean - whether to make the chart responsive to window resizing
	responsive : true
};

/*
 * 出库单量趋势点击事件
 */
function dayoutClick7() {
	days7outChart.Line(days7outChartData, days7outChartOptions);
}











/*
 * 快递日费用趋势7天
 */
var days_costs = [];
var ordercounts_costs = [];
var days7_costsChartCanvas = $("#days_costChartforsomeone").get(0).getContext("2d");
var days7_costsChart = new Chart(days7_costsChartCanvas);
/*
 * 快递日费用趋势7天数据
 */
var days7_costsChartData = {
	labels : days_costs,
	datasets : [ {
		label : "Electronics",
		fillColor : "rgba(116,165,193,1)",//rgba(116,165,193,1)
		strokeColor : "rgba(60,141,188,1)",
		pointColor : "rgba(60,141,188,1)",
		pointStrokeColor : "#fff",//#3b8bba
		pointHighlightFill : "#fff",//rgba(60,141,188,1)
		pointHighlightStroke : "#3b8bba",
		data : ordercounts_costs
	} ]

};
/*
 * 快递日费用趋势7天设置
 */
var days7_costsChartOptions = {
	// Boolean - If we should show the scale at all
	showScale : true,
	// Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines : false,
	// String - Colour of the grid lines
	scaleGridLineColor : "rgba(0,0,0,.05)",
	// Number - Width of the grid lines
	scaleGridLineWidth : 1,
	// Boolean - Whether to show horizontal lines (except X axis)
	scaleShowHorizontalLines : true,
	// Boolean - Whether to show vertical lines (except Y axis)
	scaleShowVerticalLines : true,
	// Boolean - Whether the line is curved between points
	bezierCurve : true,
	// Number - Tension of the bezier curve between points
	bezierCurveTension : 0.3,
	// Boolean - Whether to show a dot for each point
	pointDot : true,
	// Number - Radius of each point dot in pixels
	pointDotRadius : 4,
	// Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,
	// Number - amount extra to add to the radius to cater for hit detection
	// outside the drawn point
	pointHitDetectionRadius : 20,
	// Boolean - Whether to show a stroke for datasets
	datasetStroke : true,
	// Number - Pixel width of dataset stroke
	datasetStrokeWidth : 5,
	// Boolean - Whether to fill the dataset with a color
	datasetFill : true,
	// String - A legend template
	legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
	// Boolean - whether to maintain the starting aspect ratio or not when
	// responsive, if set to false, will take up entire container
	maintainAspectRatio : true,
	// Boolean - whether to make the chart responsive to window resizing
	responsive : true
};

function dayClick7_costs(){
	days7_costsChart.Line(days7_costsChartData, days7_costsChartOptions);
}






/*
 * 快递日费用趋势30天
 */
var days30_costs = [];
var ordercounts30_costs = [];
/*
 * 快递日费用趋势30天数据
 */
var days30_costsChartData = {
	labels : days30_costs,
	datasets : [ {
		label : "Electronics",
		fillColor : "rgba(116,165,193,1)",//rgba(116,165,193,1)
		strokeColor : "rgba(60,141,188,1)",
		pointColor : "rgba(60,141,188,1)",
		pointStrokeColor : "#fff",//#3b8bba
		pointHighlightFill : "#fff",//rgba(60,141,188,1)
		pointHighlightStroke : "#3b8bba",
		data : ordercounts30_costs
	} ]
};
/*
 * 快递日费用趋势30天设置
 */
var days30_costsChartOptions = {
	// Boolean - If we should show the scale at all
	showScale : true,
	// Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines : false,
	// String - Colour of the grid lines
	scaleGridLineColor : "rgba(0,0,0,.05)",
	// Number - Width of the grid lines
	scaleGridLineWidth : 1,
	// Boolean - Whether to show horizontal lines (except X axis)
	scaleShowHorizontalLines : true,
	// Boolean - Whether to show vertical lines (except Y axis)
	scaleShowVerticalLines : true,
	// Boolean - Whether the line is curved between points
	bezierCurve : true,
	// Number - Tension of the bezier curve between points
	bezierCurveTension : 0.3,
	// Boolean - Whether to show a dot for each point
	pointDot : true,
	// Number - Radius of each point dot in pixels
	pointDotRadius : 4,
	// Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,
	// Number - amount extra to add to the radius to cater for hit detection
	// outside the drawn point
	pointHitDetectionRadius : 20,
	// Boolean - Whether to show a stroke for datasets
	datasetStroke : true,
	// Number - Pixel width of dataset stroke
	datasetStrokeWidth : 5,
	// Boolean - Whether to fill the dataset with a color
	datasetFill : true,
	// String - A legend template
	legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
	// Boolean - whether to maintain the starting aspect ratio or not when
	// responsive, if set to false, will take up entire container
	maintainAspectRatio : true,
	// Boolean - whether to make the chart responsive to window resizing
	responsive : true
};








/*
 * 快递月费用趋势
 */
var months_costs = [];
var months_fee = [];
var months_costsChartCanvas = $("#monthChartforsomeone").get(0).getContext("2d");
var months_costsChart = new Chart(months_costsChartCanvas);
/*
 * 快递月费用趋势数据
 */
var month_costsChartData = {		
	labels : months_costs,
	datasets : [ {
		label : "Electronics",
		fillColor : "rgba(116,165,193,1)",//rgba(116,165,193,1)
		strokeColor : "rgba(60,141,188,1)",
		pointColor : "rgba(60,141,188,1)",
		pointStrokeColor : "#fff",//#3b8bba
		pointHighlightFill : "#fff",//rgba(60,141,188,1)
		pointHighlightStroke : "#3b8bba",
		data : months_fee
	} ]

};

/*
 * 快递月费用趋势设置
 */
var month_costsChartOptions = {		
	// Boolean - If we should show the scale at all
	showScale : true,
	// Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines : false,
	// String - Colour of the grid lines
	scaleGridLineColor : "rgba(0,0,0,.05)",
	// Number - Width of the grid lines
	scaleGridLineWidth : 1,
	// Boolean - Whether to show horizontal lines (except X axis)
	scaleShowHorizontalLines : true,
	// Boolean - Whether to show vertical lines (except Y axis)
	scaleShowVerticalLines : true,
	// Boolean - Whether the line is curved between points
	bezierCurve : true,
	// Number - Tension of the bezier curve between points
	bezierCurveTension : 0.3,
	// Boolean - Whether to show a dot for each point
	pointDot : true,
	// Number - Radius of each point dot in pixels
	pointDotRadius : 4,
	// Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,
	// Number - amount extra to add to the radius to cater for hit detection
	// outside the drawn point
	pointHitDetectionRadius : 20,
	// Boolean - Whether to show a stroke for datasets
	datasetStroke : true,
	// Number - Pixel width of dataset stroke
	datasetStrokeWidth : 5,
	// Boolean - Whether to fill the dataset with a color
	datasetFill : false,
	// String - A legend template
	legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
	// Boolean - whether to maintain the starting aspect ratio or not when
	// responsive, if set to false, will take up entire container
	maintainAspectRatio : true,
	// Boolean - whether to make the chart responsive to window resizing
	responsive : true
};

/*
 * 月快递费用事件
 */
function monthcosts(){
	months_costsChart.Line(month_costsChartData, month_costsChartOptions);
}






/*
 * 初始化
 */

$(document).ready(function () {

	"use strict";
	assignment_CustomerManagement();
    getmessage();
    var length = document.getElementById("feemonth").offsetHeight; 
    alignment();
});

/*
 * 从后台获取数据
 */
function assignment_CustomerManagement() {

	/*
	 * 今日新增单量
	 */
	var data = {
		wclientid : wclientid,
		warehouseid : warehouseid,
		clientid : clientid
	};
	$callTaskAsync("monitoringtask.getOrderCount", data, function(msg) {
		if (msg.result) {
			if (msg.ordercount == null) {
				allnum_customer = 0;
			} else {
				allnum_customer = msg.ordercount;
			}
			document.getElementById("allnum_customer").innerHTML = allnum_customer;
		} else {
			alert(msg.value);
			return;
		}
	});

	/*
	 * 今日新增待审核数
	 */
	var data_dsh = {
			wclientid : wclientid,
			warehouseid : warehouseid,
			clientid : clientid
	};
	$callTaskAsync("monitoringtask.getOrderCount_dsh", data_dsh, function(msg) {
		if (msg.result) {
			if (msg.ordercount == null) {
				waitingforaudit_CustomerManagement = 0;
			} else {
				waitingforaudit_CustomerManagement = msg.ordercount;
			}
			document.getElementById("waitingforaudit_CustomerManagement").innerHTML = waitingforaudit_CustomerManagement;
		} else {
			alert(msg.value);
			return;
		}
	});
	
    /*
     * 今日已出库数
     */
	var data_yck = {
			wclientid : wclientid,
			warehouseid : warehouseid,
			clientid : clientid
	};
	$callTaskAsync("monitoringtask.getOrderCount_yck", data_yck, function(msg) {
		if (msg.result) {
			if (msg.ordercount == null) {
				numberofoutbound_CustomerManagement = 0;
			} else {
				numberofoutbound_CustomerManagement = msg.ordercount;
			}
			document.getElementById("numberofoutbound_CustomerManagement").innerHTML = numberofoutbound_CustomerManagement;
		} else {
			alert(msg.value);
			return;
		}
	});
     
	/*
	 * 快递费用
	 */
	var data_forwardfee = {
		wclientid : wclientid,
		warehouseid : warehouseid,
		clientid : clientid
	};
	$callTaskAsync("monitoringtask.getForwardFeeByDay",data_forwardfee,function(msg) {
			if (msg.result) {
				if (msg.forwardfee == null) {
					daycost_CustomerManagement = 0;
				} else {
					daycost_CustomerManagement = msg.forwardfee.toFixed(2);
				}
				document.getElementById("daycost_CustomerManagement").innerHTML = daycost_CustomerManagement;
			} else {
				alert(msg.value);
				return;
			}
	});

	/*
	 * 7天的新增单量趋势
	 */	
	var data_add = {
		wclientid : wclientid,
		warehouseid : warehouseid,
		clientid : clientid,
		days : 7
	};
	$callTaskAsync("monitoringtask.getOrderCountByDay", data_add, function(msg) {
		if (msg.result) {
			var lists = msg.value;
			for (var i = 0; i < lists.length; i++) {
				days7[i] = lists[i].day;
				ordercounts7[i] = lists[i].ordercount;
			}		
			dayClick7();
		}
	});

	/*
	 * 订单进度
	 */
	var data_status = {
		wclientid : wclientid,
		warehouseid : warehouseid,
		clientid : clientid
	};
	$callTaskAsync("monitoringtask.getOrderCountByStatus",data_status,function(msg) {
			if (msg.result) {
				var lists = msg.value;
				var total = msg.total;
				for (var i = 0; i < lists.length; i++) {
					var list = lists[i];
					if (list.orderstatus == '待审核') {
						if (list.ordercount == 0) {
							document.getElementById("rateofwait_CustomerManagement").innerHTML=0;
							document.getElementById("rateofwaitsm_CustomerManagement").style.width=0+"%";
						} else {
							document.getElementById("rateofwait_CustomerManagement").innerHTML = (list.ordercount/total*100).toFixed(2);
							document.getElementById("rateofwaitsm_CustomerManagement").style.width = (list.ordercount/total*100).toFixed(2)+"%";
						}						
					 }
					 if (list.orderstatus == '已审核') {
						 if (list.ordercount == 0) {
							document.getElementById("notoutbound_CustomerManagement").innerHTML=0;
							document.getElementById("notoutboundsm_CustomerManagement").style.width=0+"%";
						 } else {
							document.getElementById("notoutbound_CustomerManagement").innerHTML = (list.ordercount/total*100).toFixed(2);
							document.getElementById("notoutboundsm_CustomerManagement").style.width = (list.ordercount/total*100).toFixed(2)+"%";
						 }						
					  }
					  if (list.orderstatus == '已出库') {
							if (list.ordercount == 0) {
							    document.getElementById("readyoutbound_CustomerManagement").innerHTML=0;
								document.getElementById("readyoutboundsm_CustomerManagement").style.width=0+ "%";
							} else {
								document.getElementById("readyoutbound_CustomerManagement").innerHTML = (list.ordercount/total*100).toFixed(2);
								document.getElementById("readyoutboundsm_CustomerManagement").style.width = (list.ordercount/total*100).toFixed(2)+"%";
					  }			
					}
				}
			}
	});
	
	/*
	 * 7天的出库单量趋势
	 */
	var data_out = {
			wclientid : wclientid,
			warehouseid : warehouseid,
			clientid : clientid,
			days : 7
	};
	$callTaskAsync("monitoringtask.getOutOrderCountByDay", data_out, function(msg) {
		if (msg.result) {
			var lists = msg.value;
			for (var i = 0; i < lists.length; i++) {
				days7out[i] = lists[i].day;
				ordercounts7out[i] = lists[i].ordercount;
			}		
			dayoutClick7();
		}
	});
	
	/*
	 *  各快递单量/日 
	 */
	var data_forwardcompany = {
		wclientid : wclientid,
		warehouseid : warehouseid,
		clientid : clientid
	};
	$callTaskAsync("monitoringtask.getOrderCountByForwardCompany",data_forwardcompany,function(msg) {
			if (msg.result) {
				var lists = msg.value;
				var total=null;
				var companydatas=[];
				for (var i = 0; i < lists.length; i++) {
					var datas={};					
					var list = lists[i];
					datas["label"]=list.name;
					datas["value"]=list.ordercount;
					companydatas.push(datas);					
				}
				//各快递单量
				var donut2 = new Morris.Donut({
					element : 'companyorder',
					resize : true,
					colors : [ "#f56954", "#00a65a", "#f39c12", "#00c0ef", "#3c8dbc", "#d2d6de", "#9966CC", "#FFFF33", "#66CC99" ],
					data : companydatas,							
					hideHover : 'auto'
				});					
			}
	});
	
	/*
	 *7天的快递日费用趋势
	 */
	var data_dayforwardfee = {
		wclientid : wclientid,
		warehouseid : warehouseid,
		clientid : clientid,
		days : 7
	};
	$callTaskAsync("monitoringtask.getForwardFeeByDays", data_dayforwardfee, function(msg) {
		if (msg.result) {
			var lists = msg.value;
			for (var i = 0; i < lists.length; i++) {
				days_costs[i] = lists[i].day;
				ordercounts_costs[i] = lists[i].forwardfee.toFixed(2);
			}
			dayClick7_costs();
		}
	});

	/*
	 * 快递月费用趋势
	 */
	var data_monthforwardfee = {
		wclientid : wclientid,
		warehouseid : warehouseid,
	    clientid : clientid,
	    months : 12
	};
	$callTaskAsync("monitoringtask.getForwardFeeByMonths",data_monthforwardfee,function(msg) {
		if (msg.result) {
			var lists = msg.value;
			for (var i = 0; i < lists.length; i++) {
				months_costs[i] = lists[i].month;
				months_fee[i] = lists[i].forwardfee.toFixed(2);
			}
			monthcosts();
		}
	});	
}

/*
 * 获取信息
 * 	
 */
function getmessage(){
	document.getElementById("username1").innerHTML=username;
	document.getElementById("username2").innerHTML=username;
	document.getElementById("warehousename1").innerHTML=warehousename;
	document.getElementById("warehousename2").innerHTML=warehousename;
	document.getElementById("username3").innerHTML=username;
	document.getElementById("funclist").innerHTML="<li><a href='Index.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>今日总览</a></li>"
        +"<li><a href='OrderQuantity.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>订单量</a></li>"
	+"<li><a href='OrderDistribute.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>订单分布</a></li>"
	+"<li><a href='DeliveryCosts.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>快递费用</a></li>"
	+"<li><a href='GoodsSituation.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>商品情况</a></li>"
	+"<li><a href='StaffPerformance.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>人员绩效</a></li>";
    var data={
			wclientid:wclientid
	};
	$callTaskAsync("monitoringtask.getMessage", data, function(msg) {
		if(msg.result){
			var clientlists= msg.clientlist;	
			for(var i=0;i<clientlists.length;i++){
				document.getElementById("clientlists").innerHTML +="<li id='"+clientlists[i].clientid+"'><a href='CustomerManagement.jsp?clientid="+clientlists[i].clientid+"&wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>"+clientlists[i].clientname+"</a></li>";		
			}
			document.getElementById(clientid).className="active";
		}else{
			alert(msg.value);
			return;
		}
	});	

}

//对齐
function alignment(){
	   var length = document.getElementById("feeday").offsetHeight; 
	    document.getElementById("feemonth").style.height=length+"px";
}