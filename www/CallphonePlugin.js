var CallphonePlugin = function(){
};
CallphonePlugin.prototype.failureCallback = function(msg){
	console.log("Javascript Callback Error: " + msg)
	alert("error callback >>"+msg);
}

CallphonePlugin.prototype.callPhoneByNumber = function(number,successCallback){
	cordova.exec(successCallback, this.failureCallback, "CallphonePlugin", "call", [number]);
}

if(!window.plugins){
	window.plugins = {};
}

if(!window.plugins.callphonePlugin){
	window.plugins.callphonePlugin = new CallphonePlugin();
}
module.exports = new CallphonePlugin(); 