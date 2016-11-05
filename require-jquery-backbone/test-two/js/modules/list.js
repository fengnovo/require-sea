define(['jquery','swiper'],function($,Swiper){
	  var tabsSwiper = new Swiper('#tabs-container',{
	    speed:500,
	    onSlideChangeStart: function(){
	      $(".tabs .active").removeClass('active')
	      $(".tabs a").eq(tabsSwiper.activeIndex).addClass('active')  
	    }
	  })
	  $(".tabs a").on('touchstart mousedown',function(e){
	    e.preventDefault()
	    $(".tabs .active").removeClass('active')
	    $(this).addClass('active')
	    tabsSwiper.slideTo( $(this).index() )
	  })
	  $(".tabs a").click(function(e){
	    e.preventDefault()
	  })
  

});