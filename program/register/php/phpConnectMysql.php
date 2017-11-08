<?php

//后台文件设置支持跨域(php)
header('Access-Control-Allow-Origin:*');
//识别中文
header('Content-Type:text/html;charset=utf8');
//php连接数据库
$conn1 = new mysqli("127.0.0.1", "root", "","beibei") or die("连接失败! ") ;
$sql1 = "insert into user(username,password) values('zhangsan2','123123')";
$result = $conn1->query($sql1) ;
if($result){
    echo "插入数据成功!" ;
}
else{
    echo "插入数据失败!";
}
$conn1->close();
