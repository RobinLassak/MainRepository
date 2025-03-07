<?php 
    include 'map_knihy.php';

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $isbn = $_POST["isbn"] ?? "";
        $jmeno = $_POST["jmeno"] ?? "";
        $prijmeni = $_POST["prijmeni"] ?? "";
        $nazev = $_POST["nazev"] ?? "";
        $popis = $_POST["popis"] ?? "";
        $obrazek = $_POST["obrazek"] ?? "";
    
        $repo = new RepozitarKnih();
        $kniha = new Kniha($isbn, $jmeno, $prijmeni, $nazev, $popis, $obrazek);
        $repo->vytvorKnihu($kniha);
        header("Location: index.php");
        exit();
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Nova Kniha</title>
</head>

<body>
<nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="index.php">Seznam Knih</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="pridatKnihu.php">Přidat Knihu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="vyhledatKnihu.php">Vyhledat Knihu</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container py-5">
        <h1 class="display-5">Přidej knihu</h1>
        <form action="pridatKnihu.php" method="post">
            <div class="mb-2">
                <label class="form-label" for="isbn">ISBN:</label>
                <input class="form-control" type="text" name="isbn" id="isbn" value="" required>
            </div>
            <div class="mb-2">
                <label class="form-label" for="jmeno">Jmeno autora:</label>
                <input class="form-control" type="text" name="jmeno" id="jmeno" value="" required>
            </div>
            <div class="mb-2">
                <label class="form-label" for="prijmeni">Prijmeni autora:</label>
                <input class="form-control" type="text" name="prijmeni" id="prijmeni" value="" required>
            </div>
            <div class="mb-2">
                <label class="form-label" for="nazev">Nazev knihy:</label>
                <input class="form-control" type="text" name="nazev" id="nazev" value="" required>
            </div>
            <div class="mb-2">
                <label class="form-label" for="popis">Popis knihy:</label>
                <textarea class="form-control" name="popis" id="popis" rows="4" required></textarea>
            </div>
            <div class="mb-2">
                <label class="form-label" for="obrazek">URL obrazku obalu:</label>
                <input class="form-control" type="text" name="obrazek" id="obrazek" value="" required>
            </div>
            <div class="mb-2">
                <button type="submit" class="btn btn-secondary btn-sm">Pridej knihu</button>
            </div>
        </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>