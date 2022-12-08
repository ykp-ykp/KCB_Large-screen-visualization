/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/


//-------------
//-颜色数组 -
//--------------
var color = [ "progress-bar-color0", "progress-bar-color1", "progress-bar-color2", "progress-bar-color3",
		"progress-bar-color4", "progress-bar-color5", "progress-bar-color6", "progress-bar-color7",
		"progress-bar-color8","progress-bar-color9","progress-bar-color10","progress-bar-color11",
		"progress-bar-color12","progress-bar-color13","progress-bar-color14","progress-bar-color15",
		"progress-bar-color16","progress-bar-color17","progress-bar-color18","progress-bar-color19"];
var daycost;
var monthcost;
var daycost1;
var monthcost1;

//各快递费用/月
var companyfeedatas = [];

// -------------
// -快递日费用趋势7天 -
// --------------
var days_costs = [];
var days30_costs = [];
var ordercounts_costs = [];
var ordercounts_costs1 = [];
var ordercounts30_costs = [];
var months_costs = [];
var months_fee = [];
var months_fee1 = [];

var month=[];
var testData1=[];
var testData2=[];

var days7_costsChartCanvas = $("#days_costChart").get(0).getContext("2d");
var days7_costsChart = new Chart(days7_costsChartCanvas);
var months_costsChartCanvas =$("#monthChart").get(0).getContext("2d");
var months_costsChart = new Chart(months_costsChartCanvas);
var days7_costsChartData = {		
	labels : days_costs,
	datasets : [ {
		label : "Electronics",
		fillColor: "rgba(60,141,188,0.9)",
        strokeColor: "rgba(60,141,188,0.8)",
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
		data : ordercounts_costs
	},{
		label: "Digital Goods",
		fillColor: "rgba(210, 214, 222, 1)",
        strokeColor: "rgba(210, 214, 222, 1)",
        pointColor: "rgba(210, 214, 222, 1)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
		data : ordercounts_costs1
	} ]

};
// 单量趋势7天 options
var days7_costsChartOptions = {			
		 //Boolean - If we should show the scale at all
	      showScale: true,
	      //Boolean - Whether grid lines are shown across the chart
	      scaleShowGridLines: false,
	      //String - Colour of the grid lines
	      scaleGridLineColor: "rgba(0,0,0,.05)",
	      //Number - Width of the grid lines
	      scaleGridLineWidth: 1,
	      //Boolean - Whether to show horizontal lines (except X axis)
	      scaleShowHorizontalLines: true,
	      //Boolean - Whether to show vertical lines (except Y axis)
	      scaleShowVerticalLines: true,
	      //Boolean - Whether the line is curved between points
	      bezierCurve: true,
	      //Number - Tension of the bezier curve between points
	      bezierCurveTension: 0.3,
	      //Boolean - Whether to show a dot for each point
	      pointDot: false,
	      //Number - Radius of each point dot in pixels
	      pointDotRadius: 4,
	      //Number - Pixel width of point dot stroke
	      pointDotStrokeWidth: 1,
	      //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
	      pointHitDetectionRadius: 20,
	      //Boolean - Whether to show a stroke for datasets
	      datasetStroke: true,
	      //Number - Pixel width of dataset stroke
	      datasetStrokeWidth: 2,
	      //Boolean - Whether to fill the dataset with a color
	      datasetFill: true,
	      //String - A legend template
	      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
	      //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
	      maintainAspectRatio: true,
	      //Boolean - whether to make the chart responsive to window resizing
	      responsive: true
	    };


// //-单量趋势30天 -
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
// 单量趋势30天 options
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

// //-------------
// //-快递月费用趋势 -
var month_costsChartData = {		
	labels : months_costs,
	datasets : [ {
		label : "Electronics",
		fillColor: "rgba(60,141,188,0.9)",
        strokeColor: "rgba(60,141,188,0.8)",
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
		data : months_fee
	},{
		label: "Digital Goods",
		fillColor: "rgba(210, 214, 222, 1)",
        strokeColor: "rgba(210, 214, 222, 1)",
        pointColor: "rgba(210, 214, 222, 1)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
		data : months_fee1
	} ]

};

// 快递月费用趋势options
var month_costsChartOptions = {		
		 //Boolean - If we should show the scale at all
	      showScale: true,
	      //Boolean - Whether grid lines are shown across the chart
	      scaleShowGridLines: false,
	      //String - Colour of the grid lines
	      scaleGridLineColor: "rgba(0,0,0,.05)",
	      //Number - Width of the grid lines
	      scaleGridLineWidth: 1,
	      //Boolean - Whether to show horizontal lines (except X axis)
	      scaleShowHorizontalLines: true,
	      //Boolean - Whether to show vertical lines (except Y axis)
	      scaleShowVerticalLines: true,
	      //Boolean - Whether the line is curved between points
	      bezierCurve: true,
	      //Number - Tension of the bezier curve between points
	      bezierCurveTension: 0.3,
	      //Boolean - Whether to show a dot for each point
	      pointDot: false,
	      //Number - Radius of each point dot in pixels
	      pointDotRadius: 4,
	      //Number - Pixel width of point dot stroke
	      pointDotStrokeWidth: 1,
	      //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
	      pointHitDetectionRadius: 20,
	      //Boolean - Whether to show a stroke for datasets
	      datasetStroke: true,
	      //Number - Pixel width of dataset stroke
	      datasetStrokeWidth: 2,
	      //Boolean - Whether to fill the dataset with a color
	      datasetFill: true,
	      //String - A legend template
	      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
	      //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
	      maintainAspectRatio: true,
	      //Boolean - whether to make the chart responsive to window resizing
	      responsive: true
	    };


/*cp-2759-start*/
/*
 *快递利润趋势 
 */
var monthData = [];
var coustCounts = [];
var days7outChartCanvas =  $("#monthoutChart").get(0).getContext("2d");
var monthoutChart = new Chart(days7outChartCanvas);

/*
 * 快递利润趋势
 */
var monthoutChartData = {
	labels : monthData,
	datasets : [ {
		label : "Electronics",
		fillColor : "rgba(255,255,255,1)",//rgba(116,165,193,1)
		strokeColor : "rgba(60,141,188,1)",
		pointColor : "rgba(60,141,188,1)",
		pointStrokeColor : "#fff",//#3b8bba
		pointHighlightFill : "#fff",//rgba(60,141,188,1)
		pointHighlightStroke : "#3b8bba",
		data : coustCounts
	} ]

};

/*
 * 快递利润趋势
 */
var monthoutChartOptions = {
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
	responsive : true
};
/*cp-2759-end*/


$(document).ready(function () {
	"use strict";	
	assignment();
	getmessage();
	


});
function dayClick30_costs() {
	days7_costsChart.Line(days30_costsChartData, days30_costsChartOptions);
	document.getElementById("days30").className="active";
	$("#days7").removeClass("active");
	
}

function dayClick7_costs() {
	days7_costsChart.Line(days7_costsChartData, days7_costsChartOptions);
	document.getElementById("days7").className="active";
	$("#days30").removeClass("active");
}

function monthcosts(){
	months_costsChart.Line(month_costsChartData, month_costsChartOptions);
}

function forwardfeebymonth(){
	//各快递费用
	var donut2 = new Morris.Donut({
		element : 'companyfee-chart',
		resize : true,
		colors : [ "#FF0000", "#00a65a", "#f39c12", "#00c0ef", "#4169E1",
				  "#d2d6de", "#800080", "#FFFF33", "#90EE90",  "#DB7093",
				  "#000080", "#FFC0CB", "#778899", "#A0522D", "#008080",
				  "#2F4F4F", "#FFDEAD", "#FF1493", "#D2B48C", "#000000"],
		data : companyfeedatas,
				
		hideHover : 'auto'
	});
}

/*cp-2759-start*/
function monthoutClick12() {
	monthoutChart.Line(monthoutChartData, monthoutChartOptions);
}
/*cp-2759-end*/


function assignment() {
	
/*cp-2759 start日快递成本*/	    //（前后端已接应）
	var data_day_cost = {
		wclientid : wclientid,
		warehouseid : warehouseid,
		clientid : null
	};
	$callTask("monitoringtask.getForwardCostByDay", data_day_cost, function(msg) {
		if (msg.result) {
			if (msg.forwardcost == null) {
				daycost1 = 0;
			} else {
				daycost1 = msg.forwardcost;
			}
			document.getElementById("daycosts1").innerHTML = daycost1.toFixed(2);
		} else {
			alert(msg.value);
			return;
		}
	});
	
	/*
	 * 日快递费用
	 */
	var data1 = {
		wclientid : wclientid,
		warehouseid : warehouseid,
		clientid : null
	};
	$callTask("monitoringtask.getForwardFeeByDay", data1, function(msg) {
		if (msg.result) {
			if (msg.forwardfee == null) {
				daycost = 0;
			} else {
				daycost = msg.forwardfee;
			}
			document.getElementById("daycosts").innerHTML = daycost.toFixed(2);
		} else {
			alert(msg.value);
			return;
		}
	});
/* cp-2759 start 月快递成本*/      //(前后端已接应)
	var data_cost_month = {
		wclientid : wclientid,
		warehouseid : warehouseid,
		clientid : null
	};
	$callTask("monitoringtask.getForwardCostByMonth", data_cost_month, function(msg) {
		if (msg.result) {
			if (msg.forwardcost == null) {
				monthcost1 = 0;
			} else {
				monthcost1 = msg.forwardcost;
			}
			document.getElementById("monthcosts1").innerHTML = monthcost1.toFixed(2);
			
		} else {
			alert(msg.value);
			return;
		}
	});
	/*
	 * 月快递费用
	 */
	var data2 = {
		wclientid : wclientid,
		warehouseid : warehouseid,
		clientid : null
	};
	$callTask("monitoringtask.getForwardFeeByMonth", data2, function(msg) {
		if (msg.result) {
			if (msg.forwardfee == null) {
				monthcost = 0;
			} else {
				monthcost = msg.forwardfee;
			}
			document.getElementById("monthcosts").innerHTML = monthcost.toFixed(2);
			
		} else {
			alert(msg.value);
			return;
		}
	});
	
//快递日费用趋势  
	
	var data3 = {
		wclientid : wclientid,
		warehouseid : warehouseid,
		clientid : null,
		days : 7
	};
	$callTask("monitoringtask.getForwardCostAndForwardFeeByDays", data3, function(msg) {
		if (msg.result) {
			var lists = msg.value;
			for (var i = 0; i < lists.length; i++) {
				days_costs[i] = lists[i].day;
				ordercounts_costs1[i] = lists[i].forwardcost.toFixed(2);
				ordercounts_costs[i] = lists[i].forwardfee.toFixed(2);
			}
			dayClick7_costs();
		}
	});
	
	var data4 = {
		wclientid : wclientid,
		warehouseid : warehouseid,
		clientid : null,
		days : 30
	};
	$callTask("monitoringtask.getForwardFeeByDays", data4, function(msg) {
		if (msg.result) {
			var lists = msg.value;
			for (var i = 0; i < lists.length; i++) {
				days30_costs[i] = lists[i].day;
				ordercounts30_costs[i] = lists[i].forwardfee.toFixed(2);
			}
		}
	});
  //快递月费用趋势   （前后端已接应）
	var data5 = {
		wclientid : wclientid,
		warehouseid : warehouseid,
		clientid : null,
		months : 12
	};
	$callTask("monitoringtask.getForwardCostAndForwardFeeByMonths", data5, function(msg) {
		if (msg.result) {
			var lists = msg.value;
			for (var i = 0; i < lists.length; i++) {
				months_costs[i] = lists[i].month;
				months_fee1[i] = lists[i].forwardcost.toFixed(2);
				months_fee[i] = lists[i].forwardfee.toFixed(2);
			}
			monthcosts();
		}
	});
	

		 var data6 = {
		wclientid : wclientid,
		warehouseid : warehouseid,

	};

	$callTask("monitoringtask.getForwardFeeByForwardCompany", data6, function(
			msg) {
		if (msg.result) {
			var lists = msg.value;
			for (var i = 0; i < lists.length; i++) {
				var datas = {};
				if(lists[i].forwardfee!=0){
					datas["label"] = lists[i].name;
					datas["value"] = lists[i].forwardfee.toFixed(2);
					companyfeedatas.push(datas);
				}			
			}
			forwardfeebymonth();

		}
	});
	

		 var data7 = {
		wclientid : wclientid,
		warehouseid : warehouseid,
		clientid : null
	};
	$callTask("monitoringtask.getForwardFeeByForwardCompany", data7, function(
			msg) {
		if (msg.result) {
			var lists = msg.value;
			var total = null;
			for (var j = 0; j < lists.length; j++) {
				total += lists[j].forwardfee;
			}
			if(total!=0){
				 for (var i = 0; i < lists.length; i++) {
					 var list = lists[i];
					 document.getElementById("expresscosts").innerHTML += "<span id=''>"
					 + list.name
					 + "</span>"
					 + "<span class='progress-number'><b>"
					 + (list.forwardfee/total*100).toFixed(2)
					 + "</b>%</span>"
					 + "<div class='progress sm'>"
					 + "<div class='progress-bar "
					 + color[i]
					 + "' style='width: "
					 + (list.forwardfee/total*100).toFixed(2)
					 + "%'></div>" + "</div>";
					 }
			}	
		}
	});	
/*cp-2759-start 快递利润趋势*/     //（前后端已接应）
	var data_out = {
			wclientid : wclientid,
			warehouseid : warehouseid,
			clientid : null,
			months : 12
	};
	$callTaskAsync("monitoringtask.getDeliveryProfitTrendByMonth", data_out, function(msg) {
		if (msg.result) {
			var lists = msg.value;
			for (var i = 0; i < lists.length; i++) {
				monthData[i] = lists[i].month;
				coustCounts[i] = lists[i].forwardprofits.toFixed(2);
			}		
			
			monthoutClick12();
		}
	});	
/*cp-2759-end  快递利润趋势*/
}


/*cp-2759-start  各快递月费用*/
$(function () {
	
    var data = {
		wclientid : wclientid,
		warehouseid : warehouseid,
		clientid : null,
	};
	
	$callTask("monitoringtask.getForwardCostAndForwardFeeByForwardCompany", data, function(msg) {
		if (msg.result) {
			var lists = msg.value;		
			for (var i = 0; i < lists.length; i++) {			
				month[i] = lists[i].name;
				testData2[i] = lists[i].forwardcost.toFixed(2);
				testData1[i] = lists[i].forwardfee.toFixed(2);
			}			
		}			
		draw();		
	});				
});	
    function draw() {
     var areaChartData = {
      labels: month,
      datasets: [
        {
          label: "Electronics",
          fillColor: "rgba(210, 214, 222, 1)",
          strokeColor: "rgba(210, 214, 222, 1)",
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: testData1
        } ,
        {
          label: "Digital Goods",
          fillColor: "rgba(192,192,192,0.9)",
          strokeColor: "rgba(192,192,192,0.8)",
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(192,192,192,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(192,192,192,1)",
          data:testData2
        }        
      ]
    };
var barChartCanvas = $("#barChart9").get(0).getContext("2d");
var barChart = new Chart(barChartCanvas);
var barChartData = areaChartData;
barChartData.datasets[0].fillColor = "#00a65a";
barChartData.datasets[0].strokeColor = "#00a65a";
barChartData.datasets[0].pointColor = "#00a65a";
var barChartOptions = {
  //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
  scaleBeginAtZero: true,
  //Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines: true,
  //String - Colour of the grid lines
  scaleGridLineColor: "rgba(0,0,0,.05)",
  //Number - Width of the grid lines
  scaleGridLineWidth: 1,
  //Boolean - Whether to show horizontal lines (except X axis)
  scaleShowHorizontalLines: true,
  //Boolean - Whether to show vertical lines (except Y axis)
  scaleShowVerticalLines: true,
  //Boolean - If there is a stroke on each bar
  barShowStroke: true,
  //Number - Pixel width of the bar stroke
  barStrokeWidth: 2,
  //Number - Spacing between each of the X value sets
  barValueSpacing: 8,
  //Number - Spacing between data sets within X values
  barDatasetSpacing: 1,
  //String - A legend template
  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
  //Boolean - whether to make the chart responsive
  responsive: true,
  maintainAspectRatio: true
};  
barChartOptions.datasetFill = false;
barChart.Bar(barChartData, barChartOptions);
}
/*cp-2759-end  各快递月费用 */   

    $(document).ready(function() {
    	"use strict";
    	getmessage();
    	setTimeout('myrefresh()',300000); 
    });

    function myrefresh()
    {
           window.location.reload();     
    }

function getmessage(){
	document.getElementById("username1").innerHTML=username;
	document.getElementById("username2").innerHTML=username;
	document.getElementById("warehousename1").innerHTML=warehousename;
	document.getElementById("warehousename2").innerHTML=warehousename;
	document.getElementById("username3").innerHTML=username;
	document.getElementById("funclist").innerHTML="<li><a href='Index.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>今日总览</a></li>"
        +"<li><a href='OrderQuantity.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>订单量</a></li>"
	+"<li><a href='OrderDistribute.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>订单分布</a></li>"
	+"<li class='active'><a href='DeliveryCosts.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>快递费用</a></li>"
	+"<li><a href='GoodsSituation.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>商品情况</a></li>"
	+"<li><a href='StaffPerformance.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>人员绩效</a></li>";
	
	var data={
			wclientid:wclientid
	};
	$callTaskAsync("monitoringtask.getMessage", data, function(msg) {
		if(msg.result){
			var clientlists= msg.clientlist;	
			for(var i=0;i<clientlists.length;i++){
				document.getElementById("clientlists").innerHTML +="<li><a href='CustomerManagement.jsp?clientid="+clientlists[i].clientid+"&wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>"+clientlists[i].clientname+"</a></li>";		
			}
		}else{
			alert(msg.value);
			return;
		}
	});	

}

