	/*
	 * 颜色数组
	 */

	var color = [ "progress-bar-red", "progress-bar-success",
			"progress-bar-yellow", "progress-bar-aqua", "progress-bar-striped",
			"progress-bar-green", "progress-bar-light-blue",
			"progress-bar-warning", "progress-bar-info" ];
	
	var waitingforaudit;
	var readyforaudit;
	var numberofoutbound;
	var clientlists;
	
	var province= [];
	var orderQuantity= [];
	
	  
//各省订单日分布
$(function () {

		   var data = {
				wclientid : wclientid,
				warehouseid : warehouseid,
				clientid : null
			};
		   
			$callTask("monitoringtask.getOrderdistribution", data, function(msg) {
				//alert("msg.result -->"+msg.result);
				if (msg.result) {
					
					var lists = msg.value;
			//		alert("list.length -->"+lists.length)
					for (var i = 0; i < lists.length; i++) {
						province[i] = lists[i].province;
						orderQuantity[i] = lists[i].orderQuantity.toFixed(0);
					}		
				}
				//alert("call draw");
				draw();		
			});
			
	});

function  draw(){
			//-------------
			//- BAR CHART各省订单日分布量  -
			//-------------
		//alert("orderQuantity: "+orderQuantity);
		var areaChartData = {
			      labels: province,
			      datasets: [
			        {
			          label: "Electronics",
			          fillColor: "rgba(210, 214, 222, 1)",
			          strokeColor: "rgba(210, 214, 222, 1)",
			          pointColor: "rgba(210, 214, 222, 1)",
			          pointStrokeColor: "#c1c7d1",
			          pointHighlightFill: "#fff",
			          pointHighlightStroke: "rgba(220,220,220,1)",			          
			          data: orderQuantity
			        }
			      ]
			    };
			var barChartCanvas = $("#barChart").get(0).getContext("2d");
			var barChart = new Chart(barChartCanvas);
			var barChartData = areaChartData;
			barChartData.datasets[0].fillColor = "#87CEEB";
			barChartData.datasets[0].strokeColor = "#87CEEB";
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
			  barValueSpacing: 15,
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
		
var map1; 
var markersData = [		
        		   {latLng: [39.92, 116.46], name: '北京'},
        		   {latLng: [39.13, 117.2], name: '天津'},
        		   {latLng: [31.22, 121.48], name: '上海'},
        		   {latLng: [29.59, 106.54], name: '重庆'},
        		   {latLng: [29.97, 91.11], name: '拉萨'},
        		   {latLng: [43.77, 87.68], name: '乌鲁木齐'},
        		   {latLng: [38.47, 106.27], name: '银川'},
        		   {latLng: [40.82, 111.65], name: '呼和浩特市'},
        		   {latLng: [22.84, 108.33], name: '南宁'},
        		   {latLng: [45.75, 126.63], name: '哈尔滨'},
        		   {latLng: [43.88, 125.35], name: '长春'},
        		   {latLng: [41.8, 123.38], name: '沈阳'},
        		   {latLng: [38.03, 114.48], name: '石家庄'},
        		   {latLng: [37.87, 112.53], name: '太原'},
        		   {latLng: [36.56, 101.74], name: '西宁'},
        		   {latLng: [36.65, 117], name: '济南'},
        		   {latLng: [34.67, 113.65], name: '郑州'},
        		   {latLng: [32.04, 118.78], name: '南京'},
        		   {latLng: [31.86, 117.27], name: '合肥'},
        		   {latLng: [30.26, 120.19], name: '杭州'},
        		   {latLng: [26.08,119.3 ], name: '福州'},
        		   {latLng: [28.68, 115.89], name: '南昌'},
        		   {latLng: [28.21,113 ], name: '长沙'},
        		   {latLng: [30.52, 114.31], name: '武汉'},
        		   {latLng: [23.16, 113.23], name: '广州'},
        		   {latLng: [20.02, 110.35], name: '海口'},
        		   {latLng: [36.03, 103.73], name: '兰州'},
        		   {latLng: [34.27, 108.95], name: '西安'},
        		   {latLng: [30.67, 104.06], name: '成都'},
        		   {latLng: [26.57, 106.71], name: '贵阳'},
        		   {latLng: [25.04, 102.73], name: '昆明'},
        		   {latLng: [22.2, 114.1], name: '香港'},
        		   {latLng: [22.13, 113.33], name: '澳门'}		      
        		 ];


var data2=[{latLng: [39.92, 116.46], name: '北京',style: {r: 1, fill: '#00a65a'}},
           {latLng: [39.13, 117.2], name: '天津',style: {r: 1, fill: '#00a65a'}},
           {latLng: [31.22, 121.48], name: '上海',style: {r: 1, fill: '#00a65a'}},
  		    {latLng: [29.59, 106.54], name: '重庆',style: {r: 1, fill: '#00a65a'}},
  		    {latLng: [29.97, 91.11], name: '拉萨',style:{r: 1, fill: '#00a65a'}},
  		   {latLng: [43.77, 87.68], name: '乌鲁木齐',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [38.47, 106.27], name: '银川',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [40.82, 111.65], name: '呼和浩特市',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [22.84, 108.33], name: '南宁',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [45.75, 126.63], name: '哈尔滨',style:{r: 1, fill: '#00a65a'}},
  		   {latLng: [43.88, 125.35], name: '长春',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [41.8, 123.38], name: '沈阳',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [38.03, 114.48], name: '石家庄',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [37.87, 112.53], name: '太原',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [36.56, 101.74], name: '西宁',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [36.65, 117], name: '济南',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [34.67, 113.65], name: '郑州',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [32.04, 118.78], name: '南京',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [31.86, 117.27], name: '合肥',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [30.26, 120.19], name: '杭州',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [26.08,119.3 ], name: '福州',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [28.68, 115.89], name: '南昌',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [28.21,113 ], name: '长沙',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [30.52, 114.31], name: '武汉',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [23.16, 113.23], name: '广州',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [20.02, 110.35], name: '海口',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [36.03, 103.73], name: '兰州',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [34.27, 108.95], name: '西安',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [30.67, 104.06], name: '成都',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [26.57, 106.71], name: '贵阳',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [25.04, 102.73], name: '昆明',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [22.2, 114.1], name: '香港',style: {r: 1, fill: '#00a65a'}},
  		   {latLng: [22.13, 113.33], name: '澳门',style: {r: 1, fill: '#00a65a'}}	
           ];

$(document).ready(function() {
	"use strict";
	getmessage();
	map1 = new jvm.Map({
		 container:$('#world-map-markers'),
//		 map: 'cn_mill',
		 map: 'cn_china_mill',	 
		 normalizeFunction: 'polynomial',
		 hoverOpacity: 0.7,
		 hoverColor: false,
		 panOnDrag:true,
		// regionsSelectable:true,
		// markersSelectable:true,
         backgroundColor: 'transparent',
		 regionStyle: {
		   initial: {
           fill: 'rgba(220,220,220, 1)',
		     "fill-opacity": 1,
		     stroke: 'none',
		     "stroke-width": 0,
		     "stroke-opacity": 1
		   },
		   hover: {
		     "fill-opacity": 0.7,
		     cursor: 'pointer'
		   },
		   selected: {
		     fill: 'yellow'
		   },
		   selectedHover: {}
		 },
		 markerStyle: {
		   initial: {
		     fill: '#B0C4DE',
		     stroke: 'none',
		     r: 0
		   },
		   hover: {
			   stroke: 'none'  
			   },
		   selected: {
			        fill: '#B0C4DE',
			        stroke: 'none',
			        r:0
			  }
		 },
		 markers: markersData,
		});
	window.setInterval("RefreshMap()",6000);
});



function getmessage(){	
	
	document.getElementById("username1").innerHTML=username;
	document.getElementById("username2").innerHTML=username;
	document.getElementById("warehousename1").innerHTML=warehousename;
	document.getElementById("username3").innerHTML=username;
	document.getElementById("funclist").innerHTML="<li><a href='Index.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>今日总览</a></li>"
        +"<li><a href='OrderQuantity.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>订单量</a></li>"
	+"<li class='active'><a href='OrderDistribute.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>订单分布</a></li>"
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

function testData(){
	
	   var data = {
				wclientid : wclientid,
				warehouseid : warehouseid,
				clientid : null,
			};
			$callTask("monitoringtask.getOrderdistributionMap", data, function(msg) {
				//alert("map testData -->"+msg.value);
				if (msg.result) {
					
					var lists = msg.value;
					for (var i = 0; i < lists.length; i++) {
						data2[i].style.r = lists[i].totalNum/1000+4;
						if (lists[i].totalNum>10000){
							  data2[i].style.fill='#FF69B4';
						}else if(lists[i].totalNum<10000&lists[i].totalNum>2000){
							  data2[i].style.fill='#00BFFF';  
						}else if(lists[i].totalNum<2000&lists[i].totalNum>500){
							  data2[i].style.fill='#556B2F';  
						  }
						else{
							  data2[i].style.fill='#FFD700';
						  }					
					}
					
					for(var j = 32; j>= lists.length; j--){
						 data2[j].style.fill='#DCDCDC';
					}
					
				}
				
			});
}

function RefreshMap(){
//	var randomr = Math.floor(Math.random()*14+1);
	testData();
//	map1.removeMarkers( [0] );
//	map1.addMarker( 0, data1[0]);	
	map1.removeAllMarkers();
	setTimeout("sleep()", 300)
}

function sleep(){
	 // alert("func-sleep  of data2 --> "+ data2)
      map1.addMarker( 0, data2[0]);
	  map1.addMarker( 1, data2[1]);
	  map1.addMarker( 2, data2[2]);
	  map1.addMarker( 3, data2[3]);
	  map1.addMarker( 4, data2[4]);
	  map1.addMarker( 5, data2[5]);
	  map1.addMarker( 6, data2[6]);
	  map1.addMarker( 7, data2[7]);
	  map1.addMarker( 8, data2[8]);
	  map1.addMarker( 9, data2[9]);
	  map1.addMarker( 10, data2[10]);
	  map1.addMarker( 11, data2[11]);
	  map1.addMarker( 12, data2[12]);
	  map1.addMarker( 13, data2[13]);
	  map1.addMarker( 14, data2[14]);
	  map1.addMarker( 15, data2[15]);
	  map1.addMarker( 16, data2[16]);
	  map1.addMarker( 17, data2[17]);
	  map1.addMarker( 18, data2[18]);
	  map1.addMarker( 19, data2[19]);
	  map1.addMarker( 20, data2[20]);
	  map1.addMarker( 21, data2[21]);
	  map1.addMarker( 22, data2[22]);
	  map1.addMarker( 23, data2[23]);
	  map1.addMarker( 24, data2[24]);
	  map1.addMarker( 25, data2[25]);
	  map1.addMarker( 26, data2[26]);
	  map1.addMarker( 27, data2[27]);
	  map1.addMarker( 28, data2[28]);
	  map1.addMarker( 29, data2[29]);
	  map1.addMarker( 30, data2[30]);
	  map1.addMarker( 31, data2[31]);
	  map1.addMarker( 32, data2[32]);
	  
}