<?php 
    class Kniha{
        //properties
        public $id;
        public $isbn;
        public $jmeno;
        public $prijmeni;
        public $nazev;

        public $popis;

        public $obrazek;

        //konstruktor
        public function __construct($isbn, $jmeno, $prijmeni, $nazev, $popis, $obrazek, $id = -1){
            $this->id = $id;
            $this->isbn = $isbn;
            $this->jmeno = $jmeno;
            $this->prijmeni = $prijmeni;
            $this->nazev = $nazev;
            $this->popis = $popis;
            $this->obrazek = $obrazek;
        }
    }
?>