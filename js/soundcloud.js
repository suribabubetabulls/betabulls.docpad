YUI().use("node","event","node-event-simulate",function(a){a.one(".soundcloud-icon").on("click",function(){a.one(".post").toggleClass("post-soundcloud"),a.all(".soundcloud-iframe, .soundcloud-block, .close-soundcloud").toggleClass("show")}),a.one(".close-soundcloud").on("click",function(){a.one(".soundcloud-icon").simulate("click")})});