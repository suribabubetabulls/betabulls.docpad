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
	
	var costModal = new Y.Modal(
		{
			bodyContent: '<span class="left"><span id="why-is-it-so-cheap"><strong>Why does it cost this?</strong> <br/>This is actually more of a comment than a question that we receive: “That’s out of my budget.” At BetaBulls, we’re trying something that hasnt really been done before. Unlike our competitors we don’t require equity to build your MVP, despite it being offered to us, but more importantly, we’re less than half the cost of what a MVP will normally cost. See this article from <a target="_blank" href="http://www.forbes.com/sites/stellafayman/2013/05/02/how-much-does-it-cost-to-build-an-mvp/">Forbes: How Much Does It Cost To Build an MVP?</a> What costs 20k+ anywhere else, is 10k with BetaBulls and you keep your equity. </span> <br/><br/> <span id="what-is-an-MVP"><strong>Then why is it so cheap?</strong> <br/>We believe that the state of web/mobile app development is at a point where bootstrapping a MVP can be streamlined via an optimized/quantitative process based on <a target="_blank" href="http://en.wikipedia.org/wiki/Lean_Startup">The Lean Methodology</a>. We are jumping ahead of the tech curve via iterative innovations in process &amp; principle to arrive at our price. </span><br/><br/> <sub>Get more questions &amp; answers on our <a href="/pages/faq">FAQ page</a>.</sub></span>',
			centered: true,
			headerContent: '<h3>Pricing FAQs</h3>',
			modal: true,
			render: '#costModal',
			resizable: {
				handles: ''
			},
			width: 595,
			height: 404
		}
	).render();
	
	var pricingFeedbackModal = new Y.Modal(
		{
			bodyContent: '<iframe src="https://docs.google.com/a/betabulls.com/forms/d/1cyB8j6YTkAy7W9ImdTiSskHMQ7-B_e9-TP8KiH3dAuY/viewform?embedded=true" width="585" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>',
			centered: true,
			headerContent: '<h3>Pricing Page Questions</h3>',
			modal: true,
			render: '#pricingFeedbackModal',
			resizable: {
				handles: ''
			},
			width: 616,
			height: 545
		}
	).render();
	
	var beyondModal = new Y.Modal(
      {
        bodyContent: '<div class="pure-u-1 center"><p>Get a hold of us to learn how we can apply lean development to your app.</p><span class="jot-form"><iframe class="jot-frame" src="/pages/jot-form"></iframe></span></div> <!-- .pure-u-1 .center -->',
        centered: true,
        headerContent: '<h3>We do more than just prototype.</h3>',
        modal: true,
        render: '#beyondMvp',
        resizable: {
          handles: ''
        },
        width: 565,
        height: 606
      }
    ).render();
    
    beyondModal.hide();
	runningLeanModal.hide();
    leanModalPrice.hide();
	costModal.hide();
	pricingFeedbackModal.hide();

    Y.one('.lean-cover').on('click', function() {
    	leanModalPrice.show();
    });
	Y.one('.running-frame').on('click', function(){
		runningLeanModal.show();
	});
	Y.one('#modalCost').on('click', function(){
		costModal.show();
	});
	Y.one('#priceFeedModal').on('click', function(){
		pricingFeedbackModal.show();
	});
	Y.one('#moreThanMvP').on('click', function(){
		beyondModal.show();
	});
	Y.one('.yui3-widget-mask').on('click', function(){
		leanModalPrice.hide();
		runningLeanModal.hide();
		costModal.hide();
		pricingFeedbackModal.hide();
		beyondModal.hide();
	});
		
});