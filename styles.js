//	styles.js 0.1
//	https://github.com/rabu81/styles.js
//	created by: Rasmus Burkal, @rabu81

var styles = (function() {
	var body = document.getElementsByTagName("body")[0];
	body.style.display = "none";

	var head = document.getElementsByTagName("head")[0];

	function loadScript(url, callback) {
	   var script = document.createElement("script");
	   script.type = "text/javascript";
	   script.src = url+".js";
	   script.onreadystatechange = callback;
	   script.onload = callback;
	   head.appendChild(script);
	}

	function loadCss(url) {
	    var link = document.createElement("link");
	    link.type = "text/css";
	    link.rel = "stylesheet";
	    link.href = url;
	    head.appendChild(link);
	}

	var showBody = function() {
		setTimeout(function() {body.style.display = "block"}, 5);
	}

	var documentScripts = document.getElementsByTagName("script");

	var cssConfig = false;

	var i=0;
	while (documentScripts[i])	{
		var cssData = documentScripts[i].getAttribute("data-css");
		if(cssData) {
			cssConfig = cssData;
			break;
		} 
		i++;
	}

	if(cssConfig) {
		loadScript(cssConfig, showBody);
	}

	return {
		load: function(cssfile) {
			var path = cssConfig.replace('config', '')
			loadCss(path+cssfile+'.css')
		},
		version: '0.1'	
	};
})();