const input = document.getElementById("input");
const msg = document.getElementById("display");
document.getElementById('checkbox').addEventListener('click', function() {
	if (input.type == "password")
	{
		input.type = "text";
		msg.textContent = "Hide";
	}
	else
	{
		input.type = "password";
		msg.textContent = "Show";
	}
});

input.addEventListener('mousedown', function() {
	if (input.type == "password")
		input.type = "text";
});

input.addEventListener('mouseup', function() {
	if (input.type == "text")
		input.type = "password";
});