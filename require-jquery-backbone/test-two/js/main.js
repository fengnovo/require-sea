require.config({
    baseUrl: './js/libs',
    paths: {
        'jquery' : ["jquery.min"],
        'swiper' : ["swiper.min"],
        'modules': ['../modules']
    }
});

require(['jquery','swiper','modules/test','modules/list'], function() {
	

})	

