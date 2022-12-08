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
var clientlists;

$(document).ready(function() {
    "use strict";
    getmessage();
    assignment();
});

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

}


function getmessage(){
    document.getElementById("username1").innerHTML=username;
    document.getElementById("username2").innerHTML=username;
    document.getElementById("warehousename1").innerHTML=warehousename;
    document.getElementById("warehousename2").innerHTML=warehousename;
    document.getElementById("username3").innerHTML=username;
    document.getElementById("funclist").innerHTML="<li class='active'><a href='Index.jsp?wclientid="+wclientid+"&warehouseid="+warehouseid+"&warehousename="+encodeURI(encodeURI(warehousename))+"&username="+encodeURI(encodeURI(username))+"'><i class='fa fa-circle-o'></i>今日总览</a></li>"
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