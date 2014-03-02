YUI().use('node', 'event', 'aui-modal', function (Y) {
	
	Y.one('.lean-cover').on('mouseenter', function(){
		Y.one('.play-icon').setStyle('opacity', '0.9');	
	});
	Y.one('.lean-cover').on('mouseleave', function(){
		Y.one('.play-icon').setStyle('opacity', '0');	
	});
	Y.one('.running-frame').on('mouseenter', function(){
		Y.one('.play-icon-running').setStyle('opacity', '0.9');	
	});
	Y.one('.running-frame').on('mouseleave', function(){
		Y.one('.play-icon-running').setStyle('opacity', '0');	
	});
	
	
	Y.one('#leanClick').on('click', function(){
        Y.one('.lean-startup').setStyle('display','block');
        Y.one('.lean-icon-bg').setStyles({
            padding: '33px 0 0',
            background: 'transparent'
        });
        Y.one('.books-included').setStyle('margin','11px 0 77px');
        Y.one('#leanClick').hide();
    });
	
	var leanModalPrice = new Y.Modal(
      {
        bodyContent: '<div class="pure-u-1 center lean-modal"> <iframe width="560" height="315" src="//www.youtube-nocookie.com/embed/_a3s0IXSuxY?rel=0" frameborder="0" allowfullscreen></iframe> </div> <!-- .pure-u-1 .center -->',
        centered: true,
        headerContent: '<h3>What is The Lean Startup?</h3>',
        modal: true,
        render: '#leanModalPrice',
        resizable: {
          handles: ''
        },
        width: 595,
        height: 404
      }
    ).render();
	
	var runningLeanModal = new Y.Modal(
      {
        bodyContent: '<div class="pure-u-1 center lean-modal"> <iframe width="560" height="315" src="//www.youtube-nocookie.com/embed/LyX2UDhyiIo?rel=0" frameborder="0" allowfullscreen></iframe> </div> <!-- .pure-u-1 .center -->',
        centered: true,
        headerContent: '<h3>Running Lean</h3>',
        modal: true,
        render: '#runningLeanModal',
        resizable: {
          handles: ''
        },
        width: 595,
        height: 404
      }
    ).render();
    
	runningLeanModal.hide();
    leanModalPrice.hide();

    Y.one('.lean-cover').on('click', function() {
    	leanModalPrice.show();
    });
	Y.one('.running-frame').on('click', function(){
		runningLeanModal.show();
	});
	Y.one('.yui3-widget-mask').on('click', function(){
		leanModalPrice.hide();
		runningLeanModal.hide();
	});
		
});