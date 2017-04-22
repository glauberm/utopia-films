<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Utopia Films</title>
        <style>
            <?php include("css/bootstrap.min.css"); ?>
            <?php include("css/magnific-popup.css"); ?>
            <?php include("css/styles.css"); ?>
        </style>
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
                <?php include("templates/work.php"); ?>

                <?php include("templates/service.php"); ?>

                <?php include("templates/directors.php"); ?>

                <?php include("templates/locations.php"); ?>

                <?php include("templates/contact.php"); ?>
            </main>
            <footer class="footer">
                <?php include("templates/footer.php"); ?>
            </footer>
        </div>

        <script>
            <?php include("js/jquery.min.js"); ?>
            <?php include("js/bootstrap.min.js"); ?>
            <?php include("js/bootstrap-toolkit.min.js"); ?>
            <?php include("js/jquery.magnific-popup.min.js"); ?>
            <?php include("js/scripts.js"); ?>
        </script>
    </body>
</html>
