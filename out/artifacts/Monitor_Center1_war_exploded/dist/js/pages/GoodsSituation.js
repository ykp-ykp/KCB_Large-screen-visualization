//-------------
//-颜色数组 -
//--------------
var color = [ "progress-bar-red", "progress-bar-success",
		"progress-bar-yellow", "progress-bar-aqua", "progress-bar-striped",
		"progress-bar-green", "progress-bar-light-blue",
		"progress-bar-warning", "progress-bar-info" ];

var goodsName= [];
var goodsData= [];

//商品库存预警	
$(function () {
	   var data3 = {
			wclientid : wclientid,
			warehouseid : warehouseid,
			clientid : null
		};
		$callTask("monitoringtask.getStockinfoWar", data3, function(msg) {
			if (msg.result) {
				var lists = msg.value;
				for (var i = 0; i < lists.length; i++) {					
					goodsName[i] = lists[i].clientname;
					goodsData[i] = lists[i].amount.toFixed(0);																		
				}			
			}			 			 			 
			draw();		
		});	
});

function  draw(){
	//-------------
	//- BAR CHART商品库存预警画图方法  -
	//-------------
	var areaChartData = {
			
	        labels: goodsName,
			datasets: [
	        {
	          label: "Electronics",
	          fillColor: "rgba(255, 0, 0, 1)",
	          strokeColor: "rgba(255, 0, 0, 1)",
	          pointColor: "rgba(255, 0, 0, 1)",
	          pointStrokeColor: "#c1c7d1",
	          pointHighlightFill: "#fff",
	          pointHighlightStroke: "rgba(255, 0, 0,,1)",	          
	          data: goodsData
	        }
	      ]
	    };
	var barChartCanvas = $("#barChart").get(0).getContext("2d");
	var barChart = new Chart(barChartCanvas);
	var barChartData = areaChartData;
	barChartData.datasets[0].fillColor = "#FF0000";
	barChartData.datasets[0].strokeColor = "#FF0000";
	barChartData.datasets[0].pointColor = "#FF0000";
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
	  barValueSpacing: 26,
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
//end  of  商品库存预警

// 收货商品状态
$(function () {	
	 var data = {
				wclientid : wclientid,
				warehouseid : warehouseid,
				clientid : null
			};	 
	 $callTask("monitoringtask.getTakegoodssitua", data, function(msg) {
		if (msg.result) {
			var map = msg.value;
			document.getElementById("receiptGoods1").innerHTML =map.ps_amount;	
			document.getElementById("receiptGoods2").innerHTML =map.cc_amount;	
			document.getElementById("receiptGoods3").innerHTML =map.dj_amount;	
		}		
	});	                  
});	

//发货异常单
$(function () {	
	 var data = {
				wclientid : wclientid,
				warehouseid : warehouseid,
				clientid : null
			};
	 
	 $callTask("monitoringtask.getDeliveryunusual", data, function(msg) {
		if (msg.result) {
			var map = msg.value;
			document.getElementById("abnormaOrder1").innerHTML = map.refund_amount.toFixed(0);		
			document.getElementById("abnormaOrder2").innerHTML = map.cancle_amount.toFixed(0);		
			document.getElementById("abnormaOrder3").innerHTML = map.other_amount.toFixed(0);		
		}	
	});	 	                 
});	


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
	
	document.getElementById("username3").innerHTML=username;
	document.getElementById("funclist").innerHTML="<li><a href='Index.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>今日总览</a></li>"
        +"<li><a href='OrderQuantity.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>订单量</a></li>"
	+"<li><a href='OrderDistribute.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>订单分布</a></li>"
	+"<li><a href='DeliveryCosts.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>快递费用</a></li>"
	+"<li class='active'><a href='GoodsSituation.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>商品情况</a></li>"
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
