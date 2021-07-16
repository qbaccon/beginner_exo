function tab_string(tab)
{
	let res = "";
	let i = tab.length - 1;
	while (i != -1)
	{
		res = tab[i] + res;
		i--;
	}
	return (res);
}

function to_binary(n)
{
	let n_res = [];
	while (n != 0)
	{
		if (n % 2 == 0)
			n_res.unshift('0');
		else
			n_res.unshift('1');
		n = Math.floor(n / 2);
	}
	n_res = tab_string(n_res);
	return (n_res);
}

const convert = document.getElementById("convert") ;
convert.addEventListener("click", function() {
	let text = document.getElementById("msgToCode").value;
	let res_dis = document.getElementById("crypted");
	let pre_res = "";
	let i = 0;
	let char_int = 0;
	while (i < text.length)
	{
		char_int = text.charCodeAt(i);
		if (i != 0)
			pre_res = pre_res + ', ' + to_binary(char_int);
		else
			pre_res = pre_res + to_binary(char_int);
		i++;
	}
	res_dis.textContent = pre_res;
});