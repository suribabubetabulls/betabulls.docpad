YUI().use('node', 'event', 'aui-modal', function (Y) {
    
    Y.one('.pure-menu-heading').on('mouseenter', function(){
        Y.one('#betabulls-svg-icon').setStyle('opacity', 1)        
    });   
    Y.one('.pure-menu-heading').on('mouseleave', function(){
        Y.one('#betabulls-svg-icon').setStyle('opacity', 0.7)
    });
 
    var modal = new Y.Modal(
      {
        bodyContent: '<div class="pure-u-1 center"><p>101, College Road East Princeton, NJ </p><span class="jot-form"><iframe class="jot-frame" src="/pages/jot-form"></iframe></span></div> <!-- .pure-u-1 .center -->',
        centered: true,
        headerContent: '<h3>.</h3>',
        modal: true,
        render: '#contact',
        resizable: {
          handles: ''
        },
        width: 565,
        height: 606
      }
    ).render();
    
    modal.hide();

    Y.all('#emailIcon, .pricing-signup, .contact-step').on(
        'click',
        function() {
            modal.show();
        }
    );
	Y.one('.yui3-widget-mask').on('click', function(){
		modal.hide();
	});

}); // YUI closing
