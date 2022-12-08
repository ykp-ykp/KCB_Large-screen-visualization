$(document).ready(function () {
	$('#main-body').load('Index.jsp');
	getmessage();
});
var warehousename2;
function getmessage(){
	document.getElementById("username1").innerHTML=username;
	document.getElementById("username2").innerHTML=username;
	document.getElementById("warehousename1").innerHTML=warehousename;
	warehousename2=warehousename;
	var data={
			wclientid:wclientid
	};
	$callTask("monitoringtask.getMessage", data, function(msg) {
		if(msg.result){
			clientlists= msg.clientlist;	
			for(var i=0;i<clientlists.length;i++){
//				Onclick="$('#main-body').load('OrderQuantity.jsp');"
				document.getElementById("clientlists").innerHTML +="<li><a href=\"#\" Onclick=\"$('#main-body').load('CustomerManagement.jsp?clientid="+clientlists[i].clientid+"');\"><i class=\"fa fa-circle-o\">"+clientlists[i].clientname+"</i></a></li>";		
			}
//			alert(document.getElementById("clientlists").innerHTML);
		}else{
			alert(msg.value);
			return;
		}
	});	
}
