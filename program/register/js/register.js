			$(function(){

				var fig1,fig2,fig3;
				$("input").eq(0).keyup(function(){
					var value = $(this).val() ;
					var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
					if(reg.test(value)){
						$("span").eq(0).html("格式正确");
						fig1 = true ;
					}
					else{
						$("span").eq(0).html("格式不正确");
						fig1 = false ;
					}
//					console.log(fig1);
				});
				
				$("input").eq(1).keyup(function(){
					var value = $(this).val() ;
					var reg = /^.{6,18}$/;
					if(reg.test(value)){
						$("span").eq(1).html("格式正确");
						fig2 = true ;
					}
					else{
						$("span").eq(1).html("格式不正确");
						fig2 = false ;
					}
//					console.log(fig2);
				});
				
				$("input").eq(2).keyup(function(){
					var value = $(this).val() ;
					var value2 = $("input").eq(3).val();
					if(value==value2){
						$("span").eq(2).html("验证正确");
						fig3 = true ;
					}
					else{
						$("span").eq(2).html("验证不正确");
						fig3 = false ;
					}
//					console.log(fig3);
				});
				
				$("input").eq(3).click(function(){
					 var a = parseInt(Math.random()*10);
					 var b = parseInt(Math.random()*10);
					 var c = parseInt(Math.random()*10);
					 var d = parseInt(Math.random()*10);
					$("input").eq(3).val(a+""+b+""+c+""+d)
				})
				
				$("input").eq(4).click(function(){
					if(!(fig1&&fig2&&fig3)){
						alert("格式错误,请检查!")
					}
					else{
						var username = $("input").eq(0).val();
						var password = $("input").eq(1).val();

						var xhr = new XMLHttpRequest();
						xhr.open("post", "http://localhost/beibei/program/register/php/register.php", true);
						xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
						xhr.send("username=" + username + "&password=" + password);
						xhr.onreadystatechange = function(){

							if(xhr.readyState==4 && xhr.status==200){
							
								var obj = JSON.parse(xhr.responseText );
							
								if(obj.status ==1){
									//注册成功跳转登录页面
									location.href = "http://localhost/beibei/program/login/html/login.html" ;
								}
								else if(obj.status ==0){
									alert("用户名已经存在");
								}
								else{
									alert("注册失败！");
								}
							}

						}
						
					}
					
					
				})
				
			})