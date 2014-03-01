YUI().use('node', 'event', function (Y) {
	
	Y.one('#leanClick').on('click', function(){
        Y.one('.lean-startup').setStyle('display','block');
        Y.one('.lean-icon-bg').setStyles({
            padding: '33px 0 0',
            background: 'transparent'
        });
        Y.one('.books-included').setStyle('margin','11px 0 77px');
        Y.one('#leanClick').hide();
    });
		
});