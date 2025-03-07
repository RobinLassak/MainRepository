<?php 
class Databaze {
    private static $instance = null;

    private $pdo;

    private function __construct() {
        
        $config = require('prihlasovaci_udaje.php');

        try{
            $this->pdo = new PDO("mysql:host={$config['host']}; dbname={$config['db']};charset=utf8", $config['user'], $config['pass']);

            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e){
            echo "Chyba připojení: " . $e->getMessage() . "\n";
            exit;
        }
    }

    public static function getInstance(){
        if(self::$instance === null){
            self::$instance = new Databaze();
        }    
        return self::$instance;   
    }

    public function getConnection(){
        return $this->pdo;
    }

    public function isConnected() {
        try {
            $this->pdo->query('SELECT 1');
            return true;
        } catch (PDOException $e) {
            echo "Chyba připojení: " . $e->getMessage() . "\n";
            return false;
        }
    }
}

$db = Databaze::getInstance();
$db->isConnected();
?>