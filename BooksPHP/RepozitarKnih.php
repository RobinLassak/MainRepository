<?php 
    class RepozitarKnih{
        private $pdo;

        public function __construct(){
            $config = require('prihlasovaci_udaje.php');

            $this->pdo = Databaze::getInstance()->getConnection();
        }
        public function getVsechnyKnihy(){
            $stmt = $this->pdo->query('SELECT * FROM EvidenceKnih');
            $knihy = [];
            while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                $knihy[] = new Kniha($row['isbn'], $row['jmeno'], $row['prijmeni'], $row['nazev'], $row['popis'], $row['obrazek'], $row['id']);
            }
            return $knihy;
        }
        public function vytvorKnihu(Kniha $kniha){
            $stmt = $this->pdo->prepare("INSERT INTO EvidenceKnih (isbn, jmeno, prijmeni, nazev, popis, obrazek) VALUES (?,?,?,?,?,?)");
            return $stmt->execute([$kniha->isbn, $kniha->jmeno, $kniha->prijmeni, $kniha->nazev, $kniha->popis, $kniha->obrazek]);     
        }
        public function najdiKnihu($isbn, $jmeno, $prijmeni, $nazev) {
            
            $sql = "SELECT * FROM EvidenceKnih WHERE 1=1";
        
            $params = [];
        
            if (!empty($isbn)) {
                $sql .= " AND isbn LIKE ?";
                $params[] = '%' . $isbn . '%';
            }
        
            if (!empty($jmeno)) {
                $sql .= " AND jmeno LIKE ?";
                $params[] = '%' . $jmeno . '%';
            }
        
            if (!empty($prijmeni)) {
                $sql .= " AND prijmeni LIKE ?";
                $params[] = '%' . $prijmeni . '%';
            }
        
            if (!empty($nazev)) {
                $sql .= " AND nazev LIKE ?";
                $params[] = '%' . $nazev . '%';
            }
        
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute($params);
        
            return $stmt->fetchAll(PDO::FETCH_OBJ);
        }
    }
?>