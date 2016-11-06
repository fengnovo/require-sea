define(['jquery','swiper'],function($,Swiper){
		var page = 1, 
			canLoad = true, 
			list = [],
			tabType = ['','good','share','ask','job'],
			tab = '',
			index = 0;

            function bindScroll(i){
                // $('#list'+i).unbind('scroll').scroll( function() { 
                	var $elw = $('#tabs-container');
                	$elw.height($('body').height()-$(".tabs").height());
                $elw.unbind().on('scroll',function(){
	                var pH = $elw.height();
	                var pT = $elw.get(0).scrollHeight;
	                var pS = $elw.scrollTop();
	                if (pS/(pT -pH)>=0.99 && canLoad) {
                    // console.log("滚动条到顶部的垂直高度: "+$(document).scrollTop()); 
                    // console.log("页面的文档高度 ："+$(document).height());
                    // console.log('浏览器的高度：'+$(window).height());
                        canLoadcanLoad = false;
                        // console.log("到达底部"+page);
                        $.get('https://cnodejs.org/api/v1/topics?page='+page+'&limit=10&tab='+tab, function(data) {
                            var ajaxListData = data && data.data;
                            if( ajaxListData && ajaxListData.length>0){
                              	var _html = '';
			                    ajaxListData.forEach(function(i){
			                    	_html += '<li>'+ i.title +'</li>';
			                    });
			                    $('#list'+i).append(_html);
                            }
                            page ++;
                            canLoad = true;
                        });
                    }
                }); 
            }

            function loadData(i){
              if(canLoad){
              	tab = tabType[i];
                canLoad = false;
                $.get('https://cnodejs.org/api/v1/topics?page='+page+'&limit=10&tab='+tab, function(data) {
                    var ajaxListData = data && data.data;
                    if( ajaxListData && ajaxListData.length>0){
                      	var _html = '';
	                    ajaxListData.forEach(function(i){
	                    	_html += '<li>'+ i.title +'</li>';
	                    });
	                    $('#list'+i).html(_html);
                    }
                    page ++;
                    canLoad = true;
                    bindScroll(i);
                  });
              }
            }

            loadData(0);
	  var tabsSwiper = new Swiper('#tabs-container',{
	    speed:500,
	    onSlideChangeStart: function(){
	      $(".tabs .active").removeClass('active');
	      $(".tabs a").eq(tabsSwiper.activeIndex).addClass('active'); 
	      if(!list[tabsSwiper.activeIndex]){
	      	  $(window).scrollTop(0);
	      	  page = 0;
		      loadData(tabsSwiper.activeIndex);
		      list[tabsSwiper.activeIndex] = true;
		  }else{
		  	bindScroll(tabsSwiper.activeIndex);
		  }
		  
	    }
	  })
	  $(".tabs a").on('touchstart mousedown',function(e){
	    e.preventDefault();
	    $(".tabs .active").removeClass('active');
	    $(this).addClass('active');
	    tabsSwiper.slideTo( $(this).index() );
	  })
	  $(".tabs a").click(function(e){
	    e.preventDefault();
	  })
  

});