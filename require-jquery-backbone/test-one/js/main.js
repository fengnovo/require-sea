require.config({
    baseUrl: './js/libs',
    paths: {
        'jquery' : ["jquery.min"],
        'iscroll' : ["iscroll"],
        'modules': ['../modules']
    }
});

require(['jquery','iscroll','modules/test','modules/list'], function() {
	

})	