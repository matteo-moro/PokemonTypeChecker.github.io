if (localStorage.getItem("reloadJSON") === "true")
{
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function(response)
	{
		if (request.readyState === 4 && request.status === 200)
		{
			if (storageAvailable("localStorage"))
			{
				localStorage.setItem("pokemon-json", request.responseText);
			}
		}
	}
	
	request.open("GET", "json-files/svlist.json", true);
	request.send();
}

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