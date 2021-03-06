(function(global, undefined){
	self.console = {
		log: function(msg) {
			postMessage("WORKER1: " + JSON.stringify(msg, null, 2));
		}
	};
	importScripts('../ext/underscore.js', '../ext/riveter.js', '../ext/postal.js', '../ext/postal.federation.js', '../lib/postal.xframe.js');
	postal.instanceId("worker1");
	postal.fedx.configure({
		filterMode: "blacklist"
	});
	postal.subscribe({
		channel: "webworker1",
		topic : "hit.me.baby.one.more.time",
		callback : function(d, e) {
			postal.publish({
				channel : "webworker",
				topic   : "How.About.Them.Apples",
				data    : "Hai, I am Worker 1."
			});
		}
	});
}(this));