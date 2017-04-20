<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Utopia Films</title>
        <link href="css/bootstrap.min.css" rel="stylesheet"/>
        <link href="css/magnific-popup.css" rel="stylesheet"/>
        <link href="css/styles.css" rel="stylesheet"/>
    </head>
    <body>
        <header>
            <h1 class="hidden">Utopia Films</h1>

            <?php include("templates/fixed-container.php"); ?>

            <?php include("templates/menu-container.php"); ?>

            <div id="black-out" class="black-out hidden"></div>
        </header>

        <div class="content" id="content">
            <div id="menu-trigger" class="menu-trigger">
                <button class="btn btn-link">Menu</button>
            </div>
            <main class="main">
                <?php include("templates/about.php"); ?>

                <?php include("templates/work.php"); ?>

                <?php include("templates/production-service.php"); ?>

                <?php include("templates/directors.php"); ?>

                <?php include("templates/locations.php"); ?>

                <?php include("templates/contact.php"); ?>
            </main>
            <footer class="footer">
                <?php include("templates/footer.php"); ?>
            </footer>
        </div>

        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/bootstrap-toolkit.min.js"></script>
        <script src="js/jquery.magnific-popup.min.js"></script>
        <script src="js/scripts.js"></script>
    </body>
</html>
