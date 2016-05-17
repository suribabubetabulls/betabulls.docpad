YUI().use('node', 'event', 'node-event-simulate', function (Y) {
	
	Y.one('.soundcloud-icon').on('click', function(){
        Y.one('.post').toggleClass('post-soundcloud');
        Y.all('.soundcloud-iframe, .soundcloud-block, .close-soundcloud').toggleClass('show');
	});
	Y.one('.close-soundcloud').on('click', function(){
		Y.one('.soundcloud-icon').simulate('click');
	});
		
});