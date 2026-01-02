var request= new XMLHttpRequest();

request.onreadystatechange = function(response)
{
	if (request.readyState === 4 && request.status === 200)
	{
		var data = JSON.parse(request.responseText);
		if (!(localStorage.getItem("version") === data.version) || data.forceupdate === "true")
		{
			if (storageAvailable("localStorage"))
			{
				localStorage.setItem("version", data.version);
				localStorage.setItem("reloadJSON", "true");
			}
		}
		else
		{
			if (storageAvailable("localStorage"))
			{
				localStorage.setItem("reloadJSON", "false");
			}
		}
	}
}

request.open("GET", "json-files/version.json", true);
request.send();

//directly taken from mdn docs
function storageAvailable(type)
{
	let storage;
	try
	{
		storage = window[type];
		const x = "__storage_test__";
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	} catch(e) {
		return (
			e instanceof DOMException &&
			e.name === "QuotaExceededError" &&
			storage &&
			storage.lenght !== 0
		);
	}

}

