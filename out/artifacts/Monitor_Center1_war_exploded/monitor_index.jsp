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
    <title>Document</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/contentCSS/index.css">
    <link rel="stylesheet" href="./layui/css/layui.css">
</head>

<body>


<div class="container-fluid">
    <div class="row">

        <header class="col-sm-12 col-xs-12">
            <h1>可视化展板-ECharts</h1>
            <div class="showTime"></div>
        </header>

        <section class="mainbox container-fluid">
            <div class="row">
                <div class="column col-md-3 col-sm-12 col-xs-12">

                    <div class="panel">
                        <selector :chartnum="0" :currenttitle="sevenCharts[0]" @exchangechart="exchangeChart"></selector>
                        <div num="0" :class=[sevenChartsClassName[0]] class="chart"></div>
                        <div class="panel-footer"></div>
                    </div>

                    <div draggable="true" class="panel ">
                        <selector :chartnum="1" :currenttitle="sevenCharts[1]" @exchangechart="exchangeChart"></selector>
                        <div num="1" :class=[sevenChartsClassName[1]] class="chart"></div>
                        <div class="panel-footer"></div>
                    </div>

                    <div draggable="true" class="panel ">
                        <selector :chartnum="2" :currenttitle="sevenCharts[2]" @exchangechart="exchangeChart"></selector>
                        <div num="2" :class=[sevenChartsClassName[2]] class="chart"></div>
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
                        <selector :chartnum="3" :currenttitle="sevenCharts[3]" @exchangechart="exchangeChart"></selector>
                        <div num="3" class="chart" :class=[sevenChartsClassName[3]]></div>
                        <div class="map1"></div>
                        <div class="map2"></div>
                        <div class="map3"></div>
                    </div>
                </div>


                <div class="column col-md-3 col-sm-12 col-xs-12">

                    <div draggable="true"  class="panel ">
                        <selector :chartnum="4" :currenttitle="sevenCharts[4]" @exchangechart="exchangeChart"></selector>
                        <div num="4" :class=[sevenChartsClassName[4]] class="chart"></div>
                        <div class="panel-footer"></div>
                    </div>

                    <div draggable="true"  class="panel ">
                        <selector :chartnum="5" :currenttitle="sevenCharts[5]" @exchangechart="exchangeChart"></selector>
                        <div num="5" :class=[sevenChartsClassName[5]] class="chart"></div>
                        <div class="panel-footer"></div>
                    </div>

                    <div draggable="true"  class="panel">
                        <selector :chartnum="6" :currenttitle="sevenCharts[6]" @exchangechart="exchangeChart"></selector>
                        <div num="6" :class=[sevenChartsClassName[6]] class="chart"></div>
                        <div class="panel-footer"></div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</div>



    <script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/vue.js"></script>
    <!-- 以下是echart用的 -->
    <script type="text/javascript" src="js/flexible.js"></script>
    <script type="text/javascript" src="js/echarts.min.js"></script>
    <script type="text/javascript" src="layui/layui.js"></script>
    <script type="text/javascript" src="js/contentJS/china.js"></script>
    <script type="text/javascript" src="js/contentJS/index_data.js"></script>
    <script type="text/javascript" src="js/contentJS/index.js"></script>
    <script type="text/javascript" src="js/contentJS/index_vue.js"></script>

</body>
</html>
