function scrollIndicator()
{
	const html = document.documentElement;
	const prog_bar = document.querySelector("#bar");
	
	const html_height = html.scrollHeight;
	const html_height_onscreen = html.clientHeight;
	let scrolltop = html.scrollTop;
	let screen_height = html_height - html_height_onscreen;

	let calc_perc;
	calc_perc = (scrolltop / screen_height) * 100;
	if (calc_perc < 20)
		prog_bar.style.background = "#10bd1e";
	if (calc_perc > 20 && calc_perc < 40)
		prog_bar.style.background = "#1055bd";
	if (calc_perc > 40 && calc_perc < 60)
		prog_bar.style.background = "#dbd812";
	if (calc_perc > 60 && calc_perc < 80)
		prog_bar.style.background = "#e2931d";
	if (calc_perc > 80)
		prog_bar.style.background = "#c20f0f";
	prog_bar.style.width = calc_perc + "%";
}

window.onscroll = function() {scrollIndicator()};