chrome.alarms.create("stm", { periodInMinutes: 1 });
chrome.alarms.onAlarm.addListener((alarm) => {

	/**
	 * the following block is a phrase from
	 * "https://blog.csdn.net/qq_44450349/article/details/121536717",
	 * which seems has problem with the key world "local", should be
	 * fixed before using it.
	 */
	/*
	let index = 1;
	chrome.storage.local.get(["index"], function (result) {
		if (result.index) {
			index = result.index;
			index++;
			chrome.storage.local.set({ 'index': index });
			console.log("executed times: " + index);
			if (index == 12) {
				chrome.alarms.clear("stm");
			}
		} else {
			chrome.storage.local.set({ 'index': index });
			console.log("the very 1st time");
		}
	});
	*/

	if (alarm.name == "stm") {
		var now = new Date();
		console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
	}
})
