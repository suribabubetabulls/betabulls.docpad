YUI().use('node', 'event', function (Y) {
	
	Y.one('.soundcloud-icon').on('click', function(){
        Y.one('.post').toggleClass('post-soundcloud');
        Y.one('.soundcloud-iframe').toggleClass('show');
	});
		
});