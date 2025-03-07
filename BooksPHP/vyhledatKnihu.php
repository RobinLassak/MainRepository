<?php
include 'map_knihy.php';
$repo = new RepozitarKnih();
$knihy = [];
$errorMessage = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $isbn = isset($_POST['isbn']) ? trim($_POST['isbn']) : '';
    $jmeno = isset($_POST['jmeno']) ? trim($_POST['jmeno']) : '';
    $prijmeni = isset($_POST['prijmeni']) ? trim($_POST['prijmeni']) : '';
    $nazev = isset($_POST['nazev']) ? trim($_POST['nazev']) : '';

    
    if (empty($isbn) && empty($jmeno) && empty($prijmeni) && empty($nazev)) {
        $errorMessage = 'Musíte zadat alespoň jednu hodnotu pro vyhledávání.';
    } else {
        
        $knihy = $repo->najdiKnihu($isbn, $jmeno, $prijmeni, $nazev);
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Vyhledat Knihu</title>
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
                    <a class="nav-link" href="index.php">Seznam Knih</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="pridatKnihu.php">Přidat Knihu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="vyhledatKnihu.php">Vyhledat Knihu</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<div class="container py-5">
    <h1 class="display-5">Vyhledavani</h1>
    <form action="vyhledatKnihu.php" method="post" class="py-5">
        <div class="mb-2 py-2">
            <input class="form-control" type="text" name="prijmeni" id="prijmeni" value="" placeholder="Zadej prijmeni autora">
        </div>
        <div class="mb-2 py-2">
            <input class="form-control" type="text" name="jmeno" id="jmeno" value="" placeholder="Zadej krestni jmeno autora">
        </div>
        <div class="mb-2 py-2">
            <input class="form-control" type="text" name="nazev" id="nazev" value="" placeholder="Zadej nazev knihy">
        </div>
        <div class="mb-2 py-2">
            <input class="form-control" type="text" name="isbn" id="isbn" value="" placeholder="Zadej ISBN knihy">
        </div>
        <div class="mb-2 py-2">
            <button type="submit" class="btn btn-secondary btn-sm">Vyhledat</button>
        </div>
    </form>

    <?php if (!empty($errorMessage)): ?>
        <div class="alert alert-danger"><?php echo htmlspecialchars($errorMessage); ?></div>
    <?php endif; ?>

    <?php if (!empty($knihy)): ?>
        <h2 class="display-5">Výsledky vyhledávání</h2>
        <table class="table table-striped text-center my-5">
        <tr>
            <th>ISBN</th>
            <th>Jmeno autora</th>
            <th>Prijmeni autora</th>
            <th>Nazev knihy</th>
            <th>Popis</th>
        </tr>
            <?php foreach ($knihy as $kniha): ?>
                <tr>
                <td><?php echo htmlspecialchars($kniha->isbn); ?></td>
                <td><?php echo htmlspecialchars($kniha->jmeno); ?></td>
                <td><?php echo htmlspecialchars($kniha->prijmeni); ?></td>
                <td><?php echo htmlspecialchars($kniha->nazev); ?></td>
                <td><?php echo htmlspecialchars($kniha->popis); ?></td>
            </tr>
            <?php endforeach; ?>
        </table>
    <?php elseif ($_SERVER['REQUEST_METHOD'] === 'POST' && empty($errorMessage)): ?>
        <p>Nebyly nalezeny žádné knihy odpovídající zadaným kritériím.</p>
    <?php endif; ?>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
