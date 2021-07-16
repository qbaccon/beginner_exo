<?php
class Film
{
	private $id;
	private $nom;
	private $real;
	private $annee;

	public function __construct($id, $nom, $real, $annee)
	{
		$this->id = $id;
		$this->nom = $nom;
		$this->real = $real;
		$this->annee = $annee;
	}

	public function setid($id)
	{
		$this->id = $id;
	}

	public function getid()
	{
		return $this->id;
	}

	public function setnom($nom)
	{
		$this->nom = $nom;
	}

	public function getnom()
	{
		return $this->nom;
	}

	public function setreal($real)
	{
		$this->real = $real;
	}

	public function getreal()
	{
		return $this->real;
	}

	public function setannee($annee)
	{
		$this->annee = $annee;
	}

	public function getannee()
	{
		return $this->annee;
	}
}
?>