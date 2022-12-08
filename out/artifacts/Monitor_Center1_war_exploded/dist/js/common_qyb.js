
Date.prototype.toJSON = function () { 
	//return this.getFullYear()+'-'+(this.getMonth()+1)+'-' +this.getDay()+' ' + this.getHours()+':'+this.getMinutes()+':'+this.getSeconds();
	return this.toUTCString();
}
//同步
function $callTask(taskhandle,dataObj,successFunc){
	var data =  JSON.stringify(dataObj);
	$.ajax({
	    type: "POST",
	    contentType: 'application/json;charset=UTF-8',
	    url: contextPath+"/engine/excute?taskid="+taskhandle,
	    data:data,
	    async: false,
	    success: successFunc,
	    error: function(){
//	    	alert('Error: ' + e);
	    	window.location.href="Login.jsp";
	    }
	});
}
function $callTaskAsync(taskhandle,dataObj,successFunc){
var data =  JSON.stringify(dataObj);
$.ajax({
    type: "POST",
    contentType: 'application/json;charset=UTF-8',
    url: contextPath+"/engine/excute?taskid="+taskhandle,
    data:data,
    success: successFunc,
    async: true,
    error: function(){
//    	alert('Error: ' + e);
    	window.location.href="Login.jsp";
    }
});
}
