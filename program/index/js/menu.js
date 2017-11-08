			$(function(){
				$(".nav-c > a,#caidan").on("mouseenter",function(){
					$("#caidan").show()
					
				})
				$(".nav-c> a,#caidan").on("mouseleave",function(){
					$("#caidan").hide()
					
				})
				$(".yiji li a").on("mouseenter",function(){

					$(this).parent().find("ul").show().parent().siblings().find("ul").hide();
					
				})
				
			})