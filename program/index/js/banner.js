			$(function(){
				//ajax获取数据
				$.get("../json/index.json", function(responseData){
					//console.log(responseData);
					var arr = responseData.data;
					
					//遍历arr，动态创建节点
					for (var i=0; i<arr.length; i++) {
						var obj = arr[i];
						$("<li><img src="+ obj.img +" ></li>").appendTo("#list1");
						var li = $("<li>"+ (i+1) +"</li>").appendTo("#list2");
						if (i==0) {
							li.addClass("active");
						}
					}
					
					//轮播
					lunbo();
				})
				
				function lunbo(){
					//jq轮播图
					var list1 = $("#list1");
					var list2 = $("#list2");
					var li1 = $("#list1 li");
					var li2 = $("#list2 li");
					
					//复制第一张图到最后
					li1.first().clone(true).appendTo(list1);
					
					var size = $("#list1 li").size();
					list1.width(1400*size);
					
				}
				
				
				
			})
