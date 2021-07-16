function slideDown()
{
	const html = document.documentElement;
	let navbar = document.querySelector("#navbar");
	let contact = document.querySelector("#ctc");
	let html_scrolled = html.scrollTop;
	if (html_scrolled >= 300)
		navbar.style.top = "0px";
	if (html_scrolled < 300)
	{
		contact.style.bottom = "-50px";
		navbar.style.top = "-50px";
	}
}

function ctc()
{
	let contact = document.querySelector("#ctc")
	contact.style.bottom = "0px";
}

window.onscroll = function() {slideDown()};