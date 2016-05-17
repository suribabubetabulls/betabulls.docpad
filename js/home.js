YUI().use('node', 'event', 'aui-modal', function (Y) {
 
    var leanModal = new Y.Modal(
      {
        bodyContent: '<div class="pure-u-1 center lean-modal"> <iframe width="560" height="315" src="//www.youtube-nocookie.com/embed/_a3s0IXSuxY?rel=0" frameborder="0" allowfullscreen></iframe> </div> <!-- .pure-u-1 .center -->',
        centered: true,
        headerContent: '<h3>What is The Lean Startup?</h3>',
        modal: true,
        render: '#leanModal',
        resizable: {
          handles: ''
        },
        width: 595,
        height: 404
      }
    ).render();
    
    leanModal.hide();

    Y.one('.bb-lean').on(
        'click',
        function() {
            leanModal.show();
        }
    );
	Y.one('.yui3-widget-mask').on('click', function(){
		leanModal.hide();
	});

}); // YUI closing
