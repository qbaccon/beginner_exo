const player = document.getElementById('player');
const screen = document.getElementById('gameContainer');
const moveSize = 24;
let list_obj_drop;
let tmp_obj_drop;

document.addEventListener('keydown', function(event) {
	if (event.code == 'ArrowUp')
	{
		player.style.backgroundImage = "url('img_perso/mv_top.gif')";
		window.setTimeout(function(){
			player.style.backgroundImage = "url('img_perso/stand_top.gif')";
		}, 200);
		if (player.offsetTop > 0)
			player.style.top = (player.offsetTop - moveSize) + "px";
	}
	else if (event.code == 'ArrowRight')
	{
		player.style.backgroundImage = "url('img_perso/mv_right.gif')";
		window.setTimeout(function(){
			player.style.backgroundImage = "url('img_perso/stand_right.gif')";
		}, 200);
		if (player.offsetLeft + moveSize < (screen.clientWidth - moveSize))
			player.style.left = (player.offsetLeft + moveSize) + "px";
	}
	else if (event.code == 'ArrowDown')
	{
		player.style.backgroundImage = "url('img_perso/mv_down.gif')";
		window.setTimeout(function(){
			player.style.backgroundImage = "url('img_perso/stand_down.gif')";
		}, 200);
		if (player.offsetTop + moveSize < (screen.clientHeight - moveSize))
			player.style.top = (player.offsetTop + moveSize) + "px";
	}
	else if (event.code == 'ArrowLeft')
	{
		player.style.backgroundImage = "url('img_perso/mv_left.gif')";
		window.setTimeout(function(){
			player.style.backgroundImage = "url('img_perso/stand_left.gif')";
		}, 200);
		if (player.offsetLeft > 0)
			player.style.left = (player.offsetLeft - moveSize) + "px";
	}
	else if (event.code == 'KeyE')
	{
		tmp_obj_drop = document.createElement("div");
		screen.insertBefore(tmp_obj_drop, player);
		tmp_obj_drop.classList.add("sword");
		tmp_obj_drop.style.position = "absolute";
		tmp_obj_drop.style.backgroundImage = "url('pctrs/sword.png')";
		tmp_obj_drop.style.top = (player.offsetTop + 22) + "px";
		tmp_obj_drop.style.left = (player.offsetLeft + 7) + "px";
		tmp_obj_drop.style.width = "16px";
		tmp_obj_drop.style.height = "16px";
	}
	else if (event.code == "KeyR")
	{
		list_obj_drop = document.querySelectorAll(".sword");
		list_obj_drop.forEach(elem => {
			if (Number(elem.style.top.slice(0, elem.style.top.length - 2)) - 22 == Number(player.style.top.slice(0, player.style.top.length - 2))
			&& Number(elem.style.left.slice(0, elem.style.left.length - 2)) - 7 == Number(player.style.left.slice(0, player.style.left.length - 2)))
				elem.remove();
		})
	}
});