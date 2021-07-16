function change_style(i, btn)
{
	btn.forEach(tmp_btn => tmp_btn.style.color = "#252525");
	btn.forEach(tmp_btn => tmp_btn.style.backgroundColor = "#25a536");
	btn[i].style.color = "#25a536";
	btn[i].style.backgroundColor = "#252525";
}

const btn = document.querySelectorAll("button");
const pctr_all = document.querySelectorAll(".row img");
const pctr_smr = document.querySelectorAll(".summer");
const pctr_atm = document.querySelectorAll(".autumn");
const pctr_spg = document.querySelectorAll(".spring");
const pctr_wtr = document.querySelectorAll(".winter");
change_style(0, btn);
btn[0].onclick = function() {
	pctr_all.forEach(pctr => pctr.style.display = "block");
	change_style(0, btn);
};
btn[1].onclick = function() {
	pctr_all.forEach(pctr => pctr.style.display = "block");
	pctr_atm.forEach(pctr => pctr.style.display = "none");
	pctr_spg.forEach(pctr => pctr.style.display = "none");
	pctr_wtr.forEach(pctr => pctr.style.display = "none");
	btn.forEach(tmp_btn => tmp_btn.style.boxShadow = "none");
	change_style(1, btn);
};
btn[2].onclick = function() {
	pctr_all.forEach(pctr => pctr.style.display = "block");
	pctr_smr.forEach(pctr => pctr.style.display = "none");
	pctr_spg.forEach(pctr => pctr.style.display = "none");
	pctr_wtr.forEach(pctr => pctr.style.display = "none");
	change_style(2, btn);
};
btn[3].onclick = function() {
	pctr_all.forEach(pctr => pctr.style.display = "block");
	pctr_atm.forEach(pctr => pctr.style.display = "none");
	pctr_smr.forEach(pctr => pctr.style.display = "none");
	pctr_spg.forEach(pctr => pctr.style.display = "none");
	change_style(3, btn);
};
btn[4].onclick = function() {
	pctr_all.forEach(pctr => pctr.style.display = "block");
	pctr_atm.forEach(pctr => pctr.style.display = "none");
	pctr_wtr.forEach(pctr => pctr.style.display = "none");
	pctr_smr.forEach(pctr => pctr.style.display = "none");
	change_style(4, btn);
};