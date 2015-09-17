Reveal.initialize({
	controls: true,
	progress: false,
	history: true,
	center: true,

	transition: 'fade', // none/fade/slide/convex/concave/zoom

	// Optional reveal.js plugins
	dependencies: [
		{ src: '/js/vendor/classList.js', condition: function() { return !document.body.classList; } },
		{ src: 'js/vendor/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
		{ src: 'js/vendor/notes/notes.js', async: true }
	]
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-58087941-1', 'auto');
ga('send', 'pageview');

(function(e,t,n){
var config = {
    key: "ce63d09d5b11dfa66efe6f1550e96788",
    anonymous: true
};
var i;var s=e.getElementsByTagName(t)[0];if(e.getElementById(n)){return}i=e.createElement(t);i.id=n;i.src="https://widget.goinside.co/widget.js";i.type="text/javascript";i.async=true;i.onload=i.onreadystatechange=function(){var e=this.readyState;if(e&&e!="complete"&&e!="loaded"){return}try{var t=new Inside;t.init(config)}catch(n){}};s.parentNode.insertBefore(i,s)})(document,"script","inside-js");
