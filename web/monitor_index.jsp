<%--
  Created by IntelliJ IDEA.
  User: YKP
  Date: 2021/7/27
  Time: 14:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <%--<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">--%>
    <title>Document</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css"> <!-- Bootstrap-Core-CSS -->
    <link rel="stylesheet" href="./css/contentCSS/bootstrapindex.css">
</head>

<body>

<%--下面是导航栏，暂时隐藏起来--%>

<%--<nav class="navbar navbar-default navbar-fixed-top navbar-inverse">--%>
    <%--<div class="container-fluid">--%>
        <%--<div class="navbar-header">--%>
            <%--<a href="#" class="navbar-brand">酷仓宝检测中心</a>--%>
        <%--</div>--%>

        <%--<div class="navbar-left">--%>
            <%--<!-- 左侧搜索栏 -->--%>
            <%--<form class="navbar-form col-md-6" role="search">--%>
                <%--<div class="form-group">--%>
                    <%--<input type="text" class="form-control" placeholder="搜索客户">--%>
                <%--</div>--%>
                <%--<button type="submit" class="btn btn-default">搜索</button>--%>
            <%--</form>--%>
        <%--</div>--%>

        <%--<div>--%>
            <%--<!-- 中间导航栏 -->--%>
            <%--<ul class="nav navbar-nav">--%>
                <%--<li class="action"><a href="#">今日销量</a></li>--%>
                <%--<li><a href="#">快递费用</a></li>--%>
                <%--<li><a href="#">地区分布</a></li>--%>
                <%--<li class="dropdown">--%>
                    <%--<a href="#" class="dropdown-toggle" data-toggle="dropdown">--%>
                        <%--更多<span class="caret"></span>--%>
                    <%--</a>--%>
                    <%--<ul class="dropdown-menu" role="menu">--%>
                        <%--<li><a href="#"></a>七日订单量</li>--%>
                        <%--<li><a href="#"></a>月订单量</li>--%>
                        <%--<li><a href="#"></a>员工管理</li>--%>
                        <%--<li><a href="#"></a>绩效管理</li>--%>
                    <%--</ul>--%>
                <%--</li>--%>
            <%--</ul>--%>
        <%--</div>--%>

        <%--<div class="dropdown navbar-right">--%>
            <%--<!-- 右侧用户信息 -->--%>
            <%--<a href="" class="btn dropdown-toggle navbar-btn" data-toggle="dropdown">--%>
                <%--<img src="./images/avatar.png"/>张三<span class="caret"></span>--%>
            <%--</a>--%>
            <%--<ul class="dropdown-menu" role="menu">--%>
                <%--<li class="dropdown-header">用户信息</li>--%>
                <%--<li><a href="">用户名：张三</a></li>--%>
                <%--<li class="divider"></li>--%>
                <%--<li class="dropdown-header">仓库信息</li>--%>
                <%--<li><a href="">仓库名：宁波一号仓</a></li>--%>
            <%--</ul>--%>
        <%--</div>--%>

    <%--</div>--%>
<%--</nav>--%>


<div class="container-fluid">
    <div class="row">

        <header class="col-sm-12 col-xs-12">
            <h1>可视化展板-ECharts</h1>
            <div class="showTime">当前时间：2020年3月17-0时54分14秒</div>
            <script>
                var t = null;
                t = setTimeout(time, 1000); //開始运行
                function time() {
                    clearTimeout(t); //清除定时器
                    dt = new Date();
                    var y = dt.getFullYear();
                    var mt = dt.getMonth() + 1;
                    var day = dt.getDate();
                    var h = dt.getHours(); //获取时
                    var m = dt.getMinutes(); //获取分
                    var s = dt.getSeconds(); //获取秒
                    document.querySelector(".showTime").innerHTML =
                        "当前时间：" +y +"年" +mt +"月" +day +"-" +h +"时" +m +"分" +s +"秒";
                    t = setTimeout(time, 1000); //设定定时器，循环运行
                }
            </script>
        </header>

        <section class="mainbox container-fluid">
            <div class="row">
                <div class="column col-md-3 col-sm-12 col-xs-12">
                    <div class="panel bar">
                        <h2>
                            就业行业 <a href="javascript:;" >2019</a>
                            <a href="javacript:;"> 2020</a>
                        </h2>
                        <div class="chart"></div>
                        <div class="panel-footer"></div>
                    </div>
                    <div class="panel line">
                        <h2 class="peopleChange" id="changeyear">人员变化
                            <a href="#" @click="changeyear(2020)">2020</a>
                            <a href="#" @click="changeyear(2021)">2021</a>
                        </h2>
                        <div class="chart"></div>
                        <div class="panel-footer"></div>
                    </div>
                    <div class="panel pie">
                        <h2>年龄分布</h2>
                        <div class="chart"></div>
                        <div class="panel-footer"></div>
                    </div>
                </div>
                <div class="column col-md-6 col-sm-12 col-xs-12">
                    <div class="no">
                        <div class="no-hd">
                            <ul>
                                <li>125811</li>
                                <li>104563</li>
                            </ul>
                        </div>
                        <div class="no-bd">
                            <ul>
                                <li>前端需求人数</li>
                                <li>市场供应人数</li>
                            </ul>
                        </div>
                    </div>

                    <div class="map">
                        <div class="chart"></div>
                        <div class="map1"></div>
                        <div class="map2"></div>
                        <div class="map3"></div>
                    </div>
                </div>
                <div class="column col-md-3 col-sm-12 col-xs-12">
                    <div class="panel bar1">
                        <h2>柱状图-技能掌握</h2>
                        <div class="chart"></div>
                        <div class="panel-footer"></div>
                    </div>
                    <div class="panel line1">
                        <h2>折线图-播放量</h2>
                        <div class="chart"></div>
                        <div class="panel-footer"></div>
                    </div>
                    <div class="panel pie1">
                        <h2>饼形图-地区分布</h2>
                        <div class="chart"></div>
                        <div class="panel-footer"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>

</div>



<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>

<!-- 以下是echart用的 -->
<script type="text/javascript" src="js/flexible.js"></script>
<script type="text/javascript" src="js/echarts.min.js"></script>
<script type="text/javascript" src="js/contentJS/china.js"></script>
<script type="text/javascript" src="js/vue.min.js"></script>
<script type="text/javascript" src="js/contentJS/china.js"></script>
<script type="text/javascript" src="js/contentJS/index.js"></script>
<!-- <script type="text/javascript" src="js/contentJS/myMap.js"></script> -->
<!-- myMap是另外一个图，暂时没有使用 -->


<script type="text/javascript">
    var t = null;
    t = setTimeout(time, 1000); //開始运行
    function time() {
        clearTimeout(t); //清除定时器
        dt = new Date();
        var y = dt.getFullYear();
        var mt = dt.getMonth() + 1;
        var day = dt.getDate();
        var h = dt.getHours(); //获取时
        var m = dt.getMinutes(); //获取分
        var s = dt.getSeconds(); //获取秒
        document.querySelector(".showTime").innerHTML =
            "当前时间：" +y +"年" +mt +"月" +day +"-" +h +"时" +m +"分" +s +"秒";
        t = setTimeout(time, 1000); //设定定时器，循环运行
    }
</script>

</body>
</html>
