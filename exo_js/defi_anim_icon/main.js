function balanceScale()
{
	const blc = document.querySelector("#balanceIcon");
	blc.innerHTML = ("&#xf24e");
	setTimeout(function(){
		blc.innerHTML = ("&#xf515");
	}, 1000);
	setTimeout(function(){
		blc.innerHTML = ("&#xf24e");
	}, 2000);
	setTimeout(function(){
		blc.innerHTML = ("&#xf516");
	}, 3000)
	setTimeout(function(){
		blc.innerHTML = ("&#xf24e");
	}, 4000);
}

function lock()
{
	const lock = document.querySelector("#lock");
	lock.innerHTML = ("&#xf023");
	setTimeout(function(){
		lock.innerHTML = ("&#xf09c");
	}, 1000);
	setTimeout(function(){
		lock.innerHTML = ("&#xf023");
	}, 2000);
}

function battery()
{
	const brty = document.querySelector("#battery");
	brty.innerHTML = ("&#xf244");
	setTimeout(function(){
		brty.innerHTML = ("&#xf243");
	}, 1000);
	setTimeout(function(){
		brty.innerHTML = ("&#xf242");
	}, 2000);
	setTimeout(function(){
		brty.innerHTML = ("&#xf241");
	}, 3000)
	setTimeout(function(){
		brty.innerHTML = ("&#xf240");
	}, 4000);
	setTimeout(function(){
		brty.innerHTML = ("&#xf244");
	}, 5000);
}

function virus()
{
	const vrs = document.querySelector("#virus");
	vrs.innerHTML = ("&#xe074");
	setTimeout(function(){
		vrs.innerHTML = ("&#xf666");
	}, 1000);
	setTimeout(function(){
		vrs.innerHTML = ("&#xe076");
	}, 2000);
	setTimeout(function(){
		vrs.innerHTML = ("&#xe074");
	}, 3000)
}

balanceScale();
lock();
battery();
virus();
setInterval(balanceScale, 4000);
setInterval(lock, 2000);
setInterval(battery, 5000);
setInterval(virus, 3000);