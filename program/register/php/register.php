<?php

//后台文件设置支持跨域(php)
header('Access-Control-Allow-Origin:*');
//识别中文
header('Content-Type:text/html;charset=utf8');
//接受客户端的参数
$username = $_POST["username"];
$password = $_POST["password"];

//注册
//检查是否有相同用户名
$conn = new mysqli("127.0.0.1","root","","beibei") or die("连接失败！");
$sql1 = "select * from user where username = '$username'";
$result1 = $conn->query($sql1);
if($result1 && $result1->num_rows>0){
    //不能注册，存在相同用户名
    $obj = array("status"=>0,"msg"=>"用户名已经存在，请更换用户名");
    echo json_encode($obj);
}
else{
    //可以注册
    $sql2 = "insert into user(username,password) values('$username','$password')";
    $result2 = $conn->query($sql2);
    if($result2){
        //注册成功
        $obj = array("status"=>1,"msg"=>"注册成功");
        echo json_encode($obj);
    }
    else {
        //注册失败
        $obj = array("status" => -1, "msg" => "注册失败，请重试");
        echo json_encode($obj);
    }
}
$conn->close();

