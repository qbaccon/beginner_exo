function display(event)
{
	if (event.getModifierState("CapsLock") && event.getModifierState("NumLock"))
	{
		msg_c.style.display = "none";
		msg_n.style.display = "none";
		msg_b.style.display = "block";
	}
	else
	{
		if (event.getModifierState("CapsLock"))
			msg_c.style.display = "block";
		else
			msg_c.style.display = "none";

		if (event.getModifierState("NumLock"))
			msg_n.style.display = "block";
		else
			msg_n.style.display = "none";
		msg_b.style.display = "none";
	}
}

const msg_c = document.querySelector("p#warningcaps");
const msg_n = document.querySelector("p#warningnum");
const msg_b = document.querySelector("p#warningboth");
const input = document.getElementById("input")
input.addEventListener("click", function(event)
{	
	display(event);
});

input.addEventListener("keyup", function(event)
{	
	display(event);
});

input.addEventListener("focusout", function(event)
{	
	msg_c.style.display = "none";
	msg_n.style.display = "none";
	msg_b.style.display = "none";
});