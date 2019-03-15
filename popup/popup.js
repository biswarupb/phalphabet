function highlight() 
{
	try 
	{
		for (i = 0; i < 26; i++) 
		{
			var ch = (i+10).toString(36).toUpperCase();
			document.getElementById(ch+"1").style.backgroundColor = "";
		}
		var t = document.getElementById("textbox1").value;
		var c = t[t.length-1].toUpperCase();
		try 
		{
			document.getElementById(c+"1").style.backgroundColor = "#86f4af";
			console.clear();
		}
		catch(e)
		{
			console.log("Phalphabet error code 403 - Entered character is not an alphabet.");
		}
	}
	catch(e)
	{

	}
}

document.getElementById("textbox1").addEventListener("keyup", function() {	
	highlight();
}, false);