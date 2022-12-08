/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/
	/*
	 * 颜色数组
	 */
	var color = [ "progress-bar-red", "progress-bar-success",
			"progress-bar-yellow", "progress-bar-aqua", "progress-bar-striped",
			"progress-bar-green", "progress-bar-light-blue",
			"progress-bar-warning", "progress-bar-info" ];
	//今日新增单量
	var allnum;
	//今日新增待出库数
	var unaudit;
	//今日已出库数
	var outbound;
	//快递费用
	var customermanagement;
	
	var waitingforaudit;
	var readyforaudit;
	var numberofoutbound;
	var clientlists;
	

	
	/*
	 *新增单量趋势7天 
	 */
	var days7 = [];
	var ordercounts7 = [];
	var days7ChartCanvas =  $("#days7Chart").get(0).getContext("2d");
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
		scaleGridLineWidth : 2,
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
		// Number - amount extra to add to the radius to cater for hit detection outside the drawn point
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
	 * 新增单量趋势30天
	 */
	var days30 = [];
	var ordercounts30 = [];
	
	/*
	 * 新增单量趋势30天数据
	 */
	var days30ChartData = {
		labels : days30,
		datasets : [ {
			label : "Electronics",
			fillColor : "rgba(116,165,193,1)",//rgba(116,165,193,1)
			strokeColor : "rgba(60,141,188,1)",
			pointColor : "rgba(60,141,188,1)",
			pointStrokeColor : "#fff",//#3b8bba
			pointHighlightFill : "#fff",//rgba(60,141,188,1)
			pointHighlightStroke : "#3b8bba",
			data : ordercounts30,
			
		} ]

	};
	
	/* 
	 * 新增单量趋势30天设置
	 */
	var days30ChartOptions = {
		// Boolean - If we should show the scale at all
		showScale : true,
		// Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,
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
		responsive : true,
		
	};

	/*
	 *出库单量趋势7天 
	 */
	var days7out = [];
	var ordercounts7out = [];
	var days7outChartCanvas =  $("#days7outChart").get(0).getContext("2d");
	var days7outChart = new Chart(days7outChartCanvas);

	/*
	 * 出库单量趋势7天 数据
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
	 * 客户单量按日排序 CHART -
	 */
	var names_customer_day = [];
	var ordercounts_customer_day = [];
	var customer_dayChartCanvas = $("#dayChart").get(0).getContext("2d");
	var customer_dayChart = new Chart(customer_dayChartCanvas);
	var customer_dayChartData = {
		labels : names_customer_day,
		datasets : [ {
			label : "Electronics",
			fillColor : "rgba(245,105,84,1)",
			strokeColor : "rgba(245,105,84,0.9)",
			pointColor : "#f56954",
			pointStrokeColor : "rgba(60,141,188,1)",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(60,141,188,1)",
			data : ordercounts_customer_day
		} ]
	};
	
	var customer_dayChartOptions = {
		//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
		scaleBeginAtZero : true,
		//Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,
		//String - Colour of the grid lines
		scaleGridLineColor : "rgba(0,0,0,.05)",
		//Number - Width of the grid lines
		scaleGridLineWidth : 1,
		//Boolean - Whether to show horizontal lines (except X axis)
		scaleShowHorizontalLines : true,
		//Boolean - Whether to show vertical lines (except Y axis)
		scaleShowVerticalLines : true,
		//Boolean - If there is a stroke on each bar
		barShowStroke : true,
		//Number - Pixel width of the bar stroke
		barStrokeWidth : 2,
		//Number - Spacing between each of the X value sets
		barValueSpacing : 5,
		//Number - Spacing between data sets within X values
		barDatasetSpacing : 1,
		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
		//Boolean - whether to make the chart responsive
		responsive : true,
		maintainAspectRatio : true,
		datasetFill : false,
	};

	/*
	 * 客户单量按月排序 CHART -
	 */
	var names_customer_month = [];
	var ordercounts_customer_month = [];
	var customer_monthChartData = {
		labels : names_customer_month,
		datasets : [ {
			label : "Electronics",
			fillColor : "rgba(0,166,90,1)",
			strokeColor : "rgba(0,166,90,0.9)",
			pointColor : "#f56954",
			pointStrokeColor : "rgba(60,141,188,1)",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(60,141,188,1)",
			data : ordercounts_customer_month
		} ]
	};
	
	var customer_monthChartOptions = {
		//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
		scaleBeginAtZero : true,
		//Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,
		//String - Colour of the grid lines
		scaleGridLineColor : "rgba(0,0,0,.05)",
		//Number - Width of the grid lines
		scaleGridLineWidth : 1,
		//Boolean - Whether to show horizontal lines (except X axis)
		scaleShowHorizontalLines : true,
		//Boolean - Whether to show vertical lines (except Y axis)
		scaleShowVerticalLines : true,
		//Boolean - If there is a stroke on each bar
		barShowStroke : true,
		//Number - Pixel width of the bar stroke
		barStrokeWidth : 2,
		//Number - Spacing between each of the X value sets
		barValueSpacing : 5,
		//Number - Spacing between data sets within X values
		barDatasetSpacing : 1,
		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
		//Boolean - whether to make the chart responsive
		responsive : true,
		maintainAspectRatio : true,
		datasetFill : false,
	};


$(document).ready(function() {
	"use strict";
	getmessage();
	assignment();	
});

function dayClick7() {
	days7Chart.Line(days7ChartData, days7ChartOptions);
}

function dayoutClick7() {
	days7outChart.Line(days7outChartData, days7outChartOptions);
}

function Clickday() {
	customer_dayChart.Bar(customer_dayChartData, customer_dayChartOptions);
}

function assignment() {
	/*
	 * 今日新增单量
	 */
	var data = {
		wclientid : wclientid,
		warehouseid : warehouseid,
		clientid : null
	};
	$callTaskAsync("monitoringtask.getOrderCount", data, function(msg) {
		if (msg.result) {
			if (msg.ordercount == null) {
				allnum = 0;
			} else {
				allnum = msg.ordercount;
			}
			document.getElementById("allnum").innerHTML = allnum;
		} else {
			alert(msg.value);
			return;
		}
	});
	
	/*
	 * 今日新增待出库数
	 */
	var data_dsh = {
			wclientid : wclientid,
			warehouseid : warehouseid,
			clientid : null
	};
	$callTaskAsync("monitoringtask.getOrderCount_dsh", data_dsh, function(msg) {
		if (msg.result) {
			if (msg.ordercount == null) {
				unaudit = 0;
			} else {
				unaudit = msg.ordercount;
			}
			document.getElementById("unaudit").innerHTML = unaudit;
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
			clientid : null
	};
	$callTaskAsync("monitoringtask.getOrderCount_yck", data_yck, function(msg) {
		if (msg.result) {
			if (msg.ordercount == null) {
				outbound = 0;
			} else {
				outbound = msg.ordercount;
			}
			document.getElementById("outbound").innerHTML = outbound;
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
		clientid : null
	};
	$callTaskAsync("monitoringtask.getForwardFeeByDay",data_forwardfee,function(msg) {
			if (msg.result) {
				if (msg.forwardfee == null) {
					customermanagement = 0;
				} else {
					customermanagement = msg.forwardfee.toFixed(2);
				}
				document.getElementById("customermanagement").innerHTML = customermanagement;
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
		clientid : null,
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
	 * 7天的出库单量趋势
	 */
	var data_out = {
			wclientid : wclientid,
			warehouseid : warehouseid,
			clientid : null,
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
	 * 当日各客户单量
     */
	var data_client = {
		wclientid : wclientid,
		warehouseid : warehouseid
	};
	$callTaskAsync("monitoringtask.getOrderCountByClientidAndDay", data_client, function(msg) {
		if (msg.result) {
			var lists = msg.value;
			for (var i = 0; i < lists.length; i++) {
				names_customer_day[i] = lists[i].name;
				ordercounts_customer_day[i] = lists[i].ordercount;
			}
		Clickday();
	  }
    });
	
	/*
	 * 订单进度
	 */
	var data_status = {
		wclientid : wclientid,
		warehouseid : warehouseid,
		clientid : null
	};
	$callTaskAsync("monitoringtask.getOrderCountByStatus",data_status,function(msg) {
			if (msg.result) {
				var lists = msg.value;
				var total = msg.total;
				for (var i = 0; i < lists.length; i++) {
					var list = lists[i];
					if (list.orderstatus == '待审核') {
						if (list.ordercount == 0) {
							document.getElementById("rateofwait").innerHTML=0;
							document.getElementById("rateofwaitsm").innerHTML=0;
							document.getElementById("rateofwaitsm").style.width=0+"%";
						} else {
							document.getElementById("rateofwait").innerHTML = (list.ordercount/total*100).toFixed(2);
							document.getElementById("rateofwaitsm").innerHTML = list.ordercount;
							document.getElementById("rateofwaitsm").style.width = (list.ordercount/total*100).toFixed(2)+"%";
						}						
					 }
					 if (list.orderstatus == '已审核') {
						 if (list.ordercount == 0) {
							document.getElementById("notoutbound").innerHTML=0;
							document.getElementById("notoutboundsm").innerHTML=0;
							document.getElementById("notoutboundsm").style.width=0+"%";
						 } else {
							document.getElementById("notoutbound").innerHTML = (list.ordercount/total*100).toFixed(2);
							document.getElementById("notoutboundsm").innerHTML = list.ordercount;
							document.getElementById("notoutboundsm").style.width = (list.ordercount/total*100).toFixed(2)+"%";
						 }						
					  }
					  if (list.orderstatus == '已出库') {
							if (list.ordercount == 0) {
							    document.getElementById("readyoutbound").innerHTML=0;
							    document.getElementById("readyoutboundsm").innerHTML=0;
								document.getElementById("readyoutboundsm").style.width=0+ "%";
							} else {
								document.getElementById("readyoutbound").innerHTML = (list.ordercount/total*100).toFixed(2);
								document.getElementById("readyoutboundsm").innerHTML = list.ordercount;
								document.getElementById("readyoutboundsm").style.width = (list.ordercount/total*100).toFixed(2)+"%";
					  }			
					}
				}
			}
	});
		
	/*
	 *  各快递单量/日 
	 */
	var data_forwardcompany = {
		wclientid : wclientid,
		warehouseid : warehouseid,
		clientid : null
	};
	$callTaskAsync("monitoringtask.getOrderCountByForwardCompany",data_forwardcompany,function(msg) {
			if (msg.result) {
				var lists = msg.value;
				var total=null;
				var companydatas=[];
				for(var j = 0;j<lists.length;j++){
					total += lists[j].ordercount; 									 
				}
				for (var i = 0; i < lists.length; i++) {
					var datas={};					
					var list = lists[i];
					datas["label"]=list.name;
					datas["value"]=list.ordercount;
					companydatas.push(datas);	
					document.getElementById("expressnum").innerHTML += "<span id=''>"
							+ list.name
							+ "</span>"
							+ "<span class='progress-number'><b>"
							+ (list.ordercount/total*100).toFixed(2)
							+ "</b>%</span>"
							+ "<div class='progress sm'>"
							+ "<div class='progress-bar "
							+ color[i]
							+ "' style='width: "
							+ (list.ordercount/total*100).toFixed(2)
							+ "%'></div>" + "</div>";
				}
				//各快递单量
				var donut2 = new Morris.Donut({
					element : 'Deliveryorders-chart',
					resize : true,
					colors : [ "#f56954", "#00a65a", "#f39c12", "#00c0ef", "#3c8dbc", "#d2d6de", "#9966CC", "#FFFF33", "#66CC99" ],
					data : companydatas,							
					hideHover : 'auto'
				});					
			}
	});
}


function getmessage(){	
	document.getElementById("username1").innerHTML=username;
	document.getElementById("username2").innerHTML=username;
	document.getElementById("warehousename1").innerHTML=warehousename;
	// document.getElementById("warehousename2").innerHTML=warehousename;
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
		var	clientlists= msg.clientlist;	
			for(var i=0;i<clientlists.length;i++){
				document.getElementById("clientlists").innerHTML +="<li><a href='CustomerManagement.jsp?clientid="+clientlists[i].clientid+"&wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>"+clientlists[i].clientname+"</a></li>";		
			}
		}else{
			alert(msg.value);
			return;
		}
	});	

}