<?php 
    include "map_knihy.php";

    $repo = new RepozitarKnih();
    $knihy = $repo->getVsechnyKnihy();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seznam Knih</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
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
                        <a class="nav-link active" aria-current="page" href="index.php">Seznam Knih</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="pridatKnihu.php">Přidat Knihu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="vyhledatKnihu.php">Vyhledat Knihu</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
<div class="container py-5">
<h1 class="display-5">Seznam knih</h1>
    <table class="table table-striped text-center my-5">
        <tr>
            <th>ISBN</th>
            <th>Jmeno autora</th>
            <th>Prijmeni autora</th>
            <th>Nazev knihy</th>
            <th>Popis</th>
            <th>Obrazek obalu</th>
        </tr>
        <?php 
            foreach ($knihy as $kniha) : ?>
            <tr>
                <td><?php echo htmlspecialchars($kniha->isbn); ?></td>
                <td><?php echo htmlspecialchars($kniha->jmeno); ?></td>
                <td><?php echo htmlspecialchars($kniha->prijmeni); ?></td>
                <td><?php echo htmlspecialchars($kniha->nazev); ?></td>
                <td><?php echo htmlspecialchars($kniha->popis); ?></td>
                <td><img src="<?php echo htmlspecialchars($kniha->obrazek); ?>" alt="Obal knihy" style="max-width:200px; max-height:200px;"></td>
            </tr>
        <?php endforeach; ?>
    </table>
</div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
</body>
</html>