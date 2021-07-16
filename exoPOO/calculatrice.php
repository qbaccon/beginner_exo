<?php
class Calculatrice
{
	public static function addition($n1, $n2)
	{
		return ($n1 + $n2);
	}

	public function soustraction($n1, $n2)
	{
		return ($n1 - $n2);
	}

	public function multiplication($n1, $n2)
	{
		return ($n1 * $n2);
	}

	public function division($n1, $n2)
	{
		if ($n2 != 0)
			return ($n1 / $n2);
		else
			return "Impossible";
	}

	public function modulo($n1, $n2)
	{
		return ($n1 % $n2);
	}
}
?>