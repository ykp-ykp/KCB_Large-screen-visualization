<%--
  Created by IntelliJ IDEA.
  User: YKP
  Date: 2021/8/11
  Time: 11:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>酷仓宝数据监测中心</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">

    <style>
        body{
            background-color: #d2d6de;
        }
        .login-box{
            /*border: 1px solid rgba(49,126,170,1);*/
            width: 360px;
            margin-top: 150px;
            margin-left: 50%;
            transform: translate(-50%,0);
        }
        .login-box-msg{
            line-height: 40px;
            text-align: center;
            color: #666;
        }
        .login-box-body{
            background-color: #fff;
            padding: 0 10px 5px;
        }
        hr{
            margin-top: 10px;
            margin-bottom: 10px !important;
        }
    </style>
</head>
<body class="hold-transition login-page">
<div class="login-box">
    <div class="login-logo">
        <img src="dist/img/kcb.png"id="kcb_img"   />
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body" id ="login-width">
        <p class="login-box-msg">开始您的会话</p>
        <hr>
        <form action="monitor_index.jsp" method="post" onsubmit="return doAjaxPost()">
            <div class="form-group has-feedback">
                <input type="text" class="form-control" placeholder="用户名" id="loginName">
                <span class="glyphicon glyphicon-user form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <input type="password" class="form-control" placeholder="密码" id="psw">
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div class="row twobtn">
                <div class="col-xs-3">
                    <button type="button" onclick="reset();" class="btn btn-warning btn-block btn-flat">重置</button>
                </div>
                <div class="col-xs-3 col-xs-offset-6">
                    <button type="submit" class="btn btn-primary btn-block btn-flat">登录</button>
                </div>
            </div>
        </form>
    </div>
</div>
<script src="js/jquery-2.1.4.min.js"></script>
<script>
    function doAjaxPost() {

        var name = $("#loginName").val();
        var psw = $("#psw").val();
        console.log(name+"--"+psw)
        if(name == "ykp" && psw == "111111")
            return true
        else{
            alert("用户名或密码错误")
            return false
        }
    }
</script>
</body>
</html>
