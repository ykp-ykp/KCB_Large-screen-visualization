
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
	
	var achievements1=[];
	var receiptData=[];
	
    var achievements2=[];
    var pickingData1=[];
    var pickingData2=[];
    
    var achievements3=[];   
    var checkingData1=[];
    var checkingData2=[];
    
    var achievements4=[];
    var weighptData=[];
    
    var achievements5=[];
    var outData=[];
    
    var achievements6=[];
    var transferData=[];
    
    var achievements7=[];
    var inventoryData=[];
    
    var achievements8=[];
    var doneData=[];
    
    var achievements9=[];
    var retestData1=[];
    var retestData2=[];
//1收货绩效
	$(function () {

		   var data = {
				wclientid : wclientid,
				warehouseid : warehouseid,
				clientid : null,
			};
			$callTask("monitoringtask.getTakePerformance", data, function(msg) {
				if (msg.result) {
					var lists = msg.value;
					for (var i = 0; i < lists.length; i++) {
						achievements1 [i] = lists[i].creator;
						receiptData [i] = lists[i].amount.toFixed(2);
					}
					
				}				
				draw1();
				
			});
			
	});
	
//收货绩效画图方法
	function  draw1(){
		
			var areaChartData = {
			      labels: achievements1,
			      datasets: [
			        {
			          label: "Electronics",
			          fillColor: "rgba(210, 214, 222, 1)",
			          strokeColor: "rgba(210, 214, 222, 1)",
			          pointColor: "rgba(210, 214, 222, 1)",
			          pointStrokeColor: "#c1c7d1",
			          pointHighlightFill: "#fff",
			          pointHighlightStroke: "rgba(220,220,220,1)",
			          
			          data: receiptData
			        }
			      ]
			    };
			var barChartCanvas = $("#barChart1").get(0).getContext("2d");
			var barChart = new Chart(barChartCanvas);
			var barChartData = areaChartData;
		//	var legend = myChart.generateLegend();
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
			  barValueSpacing: 20,
			  //Number - Spacing between data sets within X values
			  barDatasetSpacing: 1,
			  //String - A legend template
			  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
			  
			  //legendTemplate: "<ul><li><span>1</span></li><li><span>2</span></li></ul>",
			  //Boolean - whether to make the chart responsive
			  responsive: true,
			  
			  maintainAspectRatio: true
			};      
			barChartOptions.datasetFill = false;
			barChart.Bar(barChartData, barChartOptions);
			barChart.generateLegend();
			
			
	}

	
//2上架绩效
	$(function () {

		   var data = {
				wclientid : wclientid,
				warehouseid : warehouseid,
				clientid : null,
			};
			$callTask("monitoringtask.getDonePerformance", data, function(msg) {
				if (msg.result) {
					var lists = msg.value;
					for (var i = 0; i < lists.length; i++) {
						achievements8 [i] = lists[i].creator;
						doneData [i] = lists[i].amount.toFixed(2);
					}
					
				}				
				draw8();
				
			});
			
	});
	
//上架绩效画图方法
	function  draw8(){
		
			var areaChartData = {
			      labels: achievements8,
			      datasets: [
			        {
			          label: "Electronics",
			          fillColor: "rgba(210, 214, 222, 1)",
			          strokeColor: "rgba(210, 214, 222, 1)",
			          pointColor: "rgba(210, 214, 222, 1)",
			          pointStrokeColor: "#c1c7d1",
			          pointHighlightFill: "#fff",
			          pointHighlightStroke: "rgba(220,220,220,1)",		          
			          data: doneData
			        }
			      ]
			    };
			var barChartCanvas = $("#barChart8").get(0).getContext("2d");
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
			  //barShowStroke: true,
			 // scaleShowLabels: true,
			 // pointDot : true,
			  //datasetStroke : true,
			  //scaleShowLine : true,
			  //Number - Pixel width of the bar stroke
			  barStrokeWidth: 2,
			  //Number - Spacing between each of the X value sets
			  barValueSpacing: 20,
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
	
	
//3捡货绩效   	
	$(function () {
			
		    var data = {
				wclientid : wclientid,
				warehouseid : warehouseid,
				clientid : null,
			};
			
			$callTask("monitoringtask.getPickPerformance", data, function(msg) {
				if (msg.result) {
					var lists = msg.value;
					
					
					for (var i = 0; i < lists.length; i++) {
						
						achievements2 [i] = lists[i].creator;
						pickingData1 [i] = lists[i].goodsamount.toFixed(2);
						pickingData2 [i] = lists[i].orderamount.toFixed(2);
					}
					
				}	
				
				draw2();
				
			});
						
	});	
//捡货绩效画图方法	
function draw2() {
		//-------------
		//- BAR CHART捡货绩效 -
		//-------------
		//alert("achievements2:" + achievements2);
		//alert("pickingData1:" + pickingData1);
		//alert("pickingData2:" + pickingData2);
		
		var areaChartData = {
		      labels: achievements2,
		      datasets: [
		        {
		          label: "Electronics",
		          fillColor: "rgba(210, 214, 222, 1)",
		          strokeColor: "rgba(210, 214, 222, 1)",
		          pointColor: "rgba(210, 214, 222, 1)",
		          pointStrokeColor: "#c1c7d1",
		          pointHighlightFill: "#fff",
		          pointHighlightStroke: "rgba(220,220,220,1)",
		          data: pickingData1
		        } ,
		        {
		          label: "Digital Goods",
		          fillColor: "rgba(218,165,32,0.9)",
		          strokeColor: "rgba(218,165,32,0.8)",
		          pointColor: "#3b8bba",
		          pointStrokeColor: "rgba(218,165,32,1)",
		          pointHighlightFill: "#fff",
		          pointHighlightStroke: "rgba(218,165,32,1)",
		          data: pickingData2
		        }        
		      ]
		    };
		var barChartCanvas = $("#barChart2").get(0).getContext("2d");
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

//4验货绩效
$(function () {
	
    var data = {
		wclientid : wclientid,
		warehouseid : warehouseid,
		clientid : null,
	};
	
	$callTask("monitoringtask.getTestPerformance", data, function(msg) {
		if (msg.result) {
			var lists = msg.value;

			
			for (var i = 0; i < lists.length; i++) {
				
				achievements3 [i] = lists[i].creator;
				checkingData1 [i] = lists[i].goodsamount.toFixed(2);
				checkingData2 [i] = lists[i].orderamount.toFixed(2);
			}
			
		}	
		
		draw3();
		
	});
				
});	
//验货绩效画图方法
    function draw3() {
     var areaChartData = {
      labels: achievements3,
      datasets: [
        {
          label: "Electronics",
          fillColor: "rgba(210, 214, 222, 1)",
          strokeColor: "rgba(210, 214, 222, 1)",
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: checkingData1
        } ,
        {
          label: "Digital Goods",
          fillColor: "rgba(218,165,32,0.9)",
          strokeColor: "rgba(218,165,32,0.8)",
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(218,165,32,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(218,165,32,1)",
          data: checkingData2
        }        
      ]
    };
var barChartCanvas = $("#barChart3").get(0).getContext("2d");
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

    
//5复验绩效
    $(function () {
    	
        var data = {
    		wclientid : wclientid,
    		warehouseid : warehouseid,
    		clientid : null,
    	};
    	
    	$callTask("monitoringtask.getRetestPerformance", data, function(msg) {
    		if (msg.result) {
    			var lists = msg.value;

    			
    			for (var i = 0; i < lists.length; i++) {
    				
    				achievements9 [i] = lists[i].creator;
    				retestData1 [i] = lists[i].goodsamount.toFixed(2);
    				retestData2 [i] = lists[i].orderamount.toFixed(2);
    			}
    			
    		}	
    		
    		draw9();
    		
    	});
    				
    });	
    //验货绩效画图方法
        function draw9() {
         var areaChartData = {
          labels: achievements9,
          datasets: [
            {
              label: "Electronics",
              fillColor: "rgba(210, 214, 222, 1)",
              strokeColor: "rgba(210, 214, 222, 1)",
              pointColor: "rgba(210, 214, 222, 1)",
              pointStrokeColor: "#c1c7d1",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: retestData1
            } ,
            {
              label: "Digital Goods",
              fillColor: "rgba(218,165,32,0.9)",
              strokeColor: "rgba(218,165,32,0.8)",
              pointColor: "#3b8bba",
              pointStrokeColor: "rgba(218,165,32,1)",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(218,165,32,1)",
              data:retestData2
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
        
//6称重打印绩效
	$(function () {

		   var data = {
				wclientid : wclientid,
				warehouseid : warehouseid,
				clientid : null,
			};
			$callTask("monitoringtask.getWeightPerformance", data, function(msg) {
				if (msg.result) {
					var lists = msg.value;
					for (var i = 0; i < lists.length; i++) {
						achievements4 [i] = lists[i].creator;
						weighptData [i] = lists[i].amount.toFixed(2);
					}
					
				}				
				draw4();
				
			});
			
	});
//称重打印绩效画图方法
	function  draw4(){
		var areaChartData = {
		      labels: achievements4,
		      datasets: [
		        {
		        	  label: "Electronics",
		              fillColor: "rgba(218,165,32,0.9)",
		              strokeColor: "rgba(218,165,32,0.8)",
		              pointColor: "#3b8bba",
		              pointStrokeColor: "rgba(218,165,32,1)",
		              pointHighlightFill: "#fff",
		              pointHighlightStroke: "rgba(218,165,32,1)",
		              data: weighptData
		        }   
		      ]
		    };
		var barChartCanvas = $("#barChart4").get(0).getContext("2d");
		var barChart = new Chart(barChartCanvas);
		var barChartData = areaChartData;
		barChartData.datasets[0].fillColor = "#ffa500";
		barChartData.datasets[0].strokeColor = "#ffa500";
		barChartData.datasets[0].pointColor = "#ffa500";
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
		  barValueSpacing: 20,
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
	
//7出库绩效
	$(function () {

		   var data = {
				wclientid : wclientid,
				warehouseid : warehouseid,
				clientid : null,
			};
			$callTask("monitoringtask.getOutPerformance", data, function(msg) {
				if (msg.result) {
					var lists = msg.value;
					for (var i = 0; i < lists.length; i++) {
						achievements5 [i] = lists[i].creator;
						outData [i] = lists[i].amount.toFixed(2);
					}
					
				}				
				draw5();
				
			});
			
	});
//7出库绩效画图方法
	function draw5() {

		var areaChartData = {
		      labels: achievements5,
		      datasets: [
		        {
		        	label: "Digital Goods",
		              fillColor: "rgba(218,165,32,0.9)",
		              strokeColor: "rgba(218,165,32,0.8)",
		              pointColor: "#3b8bba",
		              pointStrokeColor: "rgba(218,165,32,1)",
		              pointHighlightFill: "#fff",
		              pointHighlightStroke: "rgba(218,165,32,1)",
		              data: outData
		        }       
		      ]
		    };
		var barChartCanvas = $("#barChart5").get(0).getContext("2d");
		var barChart = new Chart(barChartCanvas);
		var barChartData = areaChartData;
		barChartData.datasets[0].fillColor = "#ffa500";
		barChartData.datasets[0].strokeColor = "#ffa500";
		barChartData.datasets[0].pointColor = "#ffa500";
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
		  barValueSpacing: 20,
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
	
	
//8移库绩效
	$(function () {

		   var data = {
				wclientid : wclientid,
				warehouseid : warehouseid,
				clientid : null,
			};
			$callTask("monitoringtask.getShifPerformance", data, function(msg) {
				if (msg.result) {
					var lists = msg.value;
					for (var i = 0; i < lists.length; i++) {
						achievements6 [i] = lists[i].creator;
						transferData [i] = lists[i].amount.toFixed(2);
					}
					
				}				
				draw6();
				
			});
			
	});
//8移库绩效画图方法
function draw6() {
		//-------------
		//- BAR CHART移库绩效 -
		//-------------
		var areaChartData = {
			      labels: achievements6,
			      datasets: [
			        {
			          label: "Electronics",
			          fillColor: "rgba(210, 214, 222, 1)",
			          strokeColor: "rgba(210, 214, 222, 1)",
			          pointColor: "rgba(210, 214, 222, 1)",
			          pointStrokeColor: "#c1c7d1",
			          pointHighlightFill: "#fff",
			          pointHighlightStroke: "rgba(220,220,220,1)",
			          data: transferData
			        }       
			      ]
			    };

		var barChartCanvas = $("#barChart6").get(0).getContext("2d");
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
		  barValueSpacing: 20,
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
	
//9盘点组
	$(function () {

		   var data = {
				wclientid : wclientid,
				warehouseid : warehouseid,
				clientid : null,
			};
			$callTask("monitoringtask.getInventoryPerformance", data, function(msg) {
				if (msg.result) {
					var lists = msg.value;
					for (var i = 0; i < lists.length; i++) {
						achievements7 [i] = lists[i].creator;
						inventoryData [i] = lists[i].amount.toFixed(2);
					}
					
				}				
				draw7();
				
			});
			
	});
//9盘点组绩效画图方法
function draw7() {
		//-------------
		//- BAR CHART盘点组 -
		//-------------
		var areaChartData = {
			      labels: achievements7,
			      datasets: [
			        {
			          label: "Electronics",
			          fillColor: "rgba(210, 214, 222, 1)",
			          strokeColor: "rgba(210, 214, 222, 1)",
			          pointColor: "rgba(210, 214, 222, 1)",
			          pointStrokeColor: "#c1c7d1",
			          pointHighlightFill: "#fff",
			          pointHighlightStroke: "rgba(220,220,220,1)",
			          data: inventoryData
			        }       
			      ]
			    };

		var barChartCanvas = $("#barChart7").get(0).getContext("2d");
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
		  barValueSpacing: 20,
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
	+"<li><a href='GoodsSituation.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>商品情况</a></li>"
	+"<li class='active'><a href='StaffPerformance.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>人员绩效</a></li>";
    
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