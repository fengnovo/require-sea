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

		let content = '';
        let reg = new RegExp('^<([^>\s]+)[^>]*>(.*?<\/\\1>)?$');
        let format = reg.test(content); //文章有可能是有格式的（带html标签），也可能无格式
        if(!format){
            content = content && content.split('\n').map((item,i)=><p key={i}>{item.replace(/(^\s*)|(\s*$)/g, "")}</p>);
        }else{
            content = content && content.replace(/\n/g, "<br />");
            //带格式的可能含有换行的/n，要转化为<br />
        }

        let contentHtml1 = <article id='contentHtml' className='content' dangerouslySetInnerHTML={{__html: content}}></article>;
        let contentHtml2 = <article id='contentHtml' className='content no-fomat'>{content}</article>;
        let contentHtml = format ? contentHtml1 : contentHtml2;

        return (
            <div className="detail" ref='detail'>
                {contentHtml}
            </div>
        );