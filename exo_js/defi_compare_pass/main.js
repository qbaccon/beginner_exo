function how_strong(str_length, str_caps, str_num, str_spe_char)
{
	let secure_degres = 0;
	if (str_length)
		secure_degres++;
	if (str_caps)
		secure_degres++;
	if (str_num)
		secure_degres++;
	if (str_spe_char)
		secure_degres++;
	return secure_degres;
}

function chk_strong_status(password)
{
	let i = 0;
	let j;
	let str_length;
	let str_caps = 0;
	let str_num = 0;
	let str_spe_char = 0;
	if (password.value.length >= 8)
		str_length = 1;
	else
		str_length = 0;
	while (password.value[i])
	{
		if (password.value.charCodeAt(i) >= 48 && password.value.charCodeAt(i) <= 57)
			str_num = 1;
		if (password.value.charCodeAt(i) >= 33 && password.value.charCodeAt(i) <= 47 ||
		password.value.charCodeAt(i) >= 58 && password.value.charCodeAt(i) <= 64 ||
		password.value.charCodeAt(i) >= 91 && password.value.charCodeAt(i) <= 96 ||
		password.value.charCodeAt(i) >= 123 && password.value.charCodeAt(i) <= 126)
			str_spe_char = 1;
		if (password.value.charCodeAt(i) >= 97 && password.value.charCodeAt(i) <= 122)
			str_caps = 1;
		if (str_caps == 1)
		{
			str_caps = 0;
			j = 0;
			while (password.value[j])
			{
				if (password.value.charCodeAt(j) >= 65 && password.value.charCodeAt(j) <= 90)
					str_caps = 1;
				j++;
			}
		}
		i++;
	}
	return how_strong(str_length, str_caps, str_num, str_spe_char);
}

function display_str(deg, strong)
{
	if (deg == 0)
	{
		strong.innerHTML = "Force du MdP : Très faible";
		strong.style.color = "#b50000";
	}
	else if (deg == 1)
	{
		strong.innerHTML = "Force du MdP : Faible";
		strong.style.color = "#d18732";
	}
	else if (deg == 2)
	{
		strong.innerHTML = "Force du MdP : Moyen";
		strong.style.color = "#f7e815";
	}
	else if (deg == 3)
	{
		strong.innerHTML = "Force du MdP : Fort";
		strong.style.color = "#0000b5";
	}
	else if (deg == 4)
	{
		strong.innerHTML = "Force du MdP : Très fort";
		strong.style.color = "#00b500";
	}
}

const password = document.getElementById("password");
const checkPassword = document.getElementById("checkpassword");
const strong = document.getElementById("strong_mes") ;
const alert = document.getElementById("message");
let secure_degres;

password.addEventListener('keyup', function() {
	secure_degres = chk_strong_status(password);
	display_str(secure_degres, strong);
});

checkPassword.addEventListener('keyup', function() {
	if (password.value != checkPassword.value)
	{
		alert.innerHTML = "Les mots de passe ne correspondent pas";
		alert.style.color = "#b50000";
	}
	else
	{
		alert.innerHTML = "Mots de passe correct";
		alert.style.color = "#00b500";
	}
});