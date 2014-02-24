YUI().use('node', 'event', function (Y) {
    
    Y.one('.navbar-brand').on('mouseenter', function(){
        Y.one('#betabulls-svg-icon').setStyle('opacity', 1)        
    });   
    Y.one('.navbar-brand').on('mouseleave', function(){
        Y.one('#betabulls-svg-icon').setStyle('opacity', 0.7)
    });
 
});
