let res = [];
let nr = 0;
let i = 0;
let unique;

i = 0;
unique = true;
nr = 0;
while (nr < 5)
{
	n = Math.floor(Math.random() * 800);
	if (n != 0 && n % 50 == 0 && (n < 350 || n > 450))
	{
		for (i; i < res.length; i++)
		{
			if (n == res[i])
				unique = false;
		}
		if (unique)
		{
			res.unshift(n);
			nr++;
		}
		unique = true;
		i = 0;
	}
}
console.log(res);