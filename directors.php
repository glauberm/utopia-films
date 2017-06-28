<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Directors - Utopia Films - Brazil, Venezuela, USA, Caribbean</title>
        <meta name="description" content="Film and Photo Production Services in Rio de Janeiro, Sao Paulo, and throughout Brazil. Utopia Films is the leading choice for international film and photo productions in Brazil, as well as Venezuela, USA and Caribbean."/>
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/magnific-popup.css" rel="stylesheet" type="text/css"/>
        <link href="css/styles.css" rel="stylesheet" type="text/css"/>
        <link rel="shortcut icon" href="favicon.ico">
    	<link rel="icon" sizes="16x16 32x32 64x64" href="favicon.ico">
    	<link rel="icon" type="image/png" sizes="196x196" href="favicon-192.png">
    	<link rel="icon" type="image/png" sizes="160x160" href="favicon-160.png">
    	<link rel="icon" type="image/png" sizes="96x96" href="favicon-96.png">
    	<link rel="icon" type="image/png" sizes="64x64" href="favicon-64.png">
    	<link rel="icon" type="image/png" sizes="32x32" href="favicon-32.png">
    	<link rel="icon" type="image/png" sizes="16x16" href="favicon-16.png">
    	<link rel="apple-touch-icon" href="favicon-57.png">
    	<link rel="apple-touch-icon" sizes="114x114" href="favicon-114.png">
    	<link rel="apple-touch-icon" sizes="72x72" href="favicon-72.png">
    	<link rel="apple-touch-icon" sizes="144x144" href="favicon-144.png">
    	<link rel="apple-touch-icon" sizes="60x60" href="favicon-60.png">
    	<link rel="apple-touch-icon" sizes="120x120" href="favicon-120.png">
    	<link rel="apple-touch-icon" sizes="76x76" href="favicon-76.png">
    	<link rel="apple-touch-icon" sizes="152x152" href="favicon-152.png">
    	<link rel="apple-touch-icon" sizes="180x180" href="favicon-180.png">
    	<meta name="msapplication-TileColor" content="#FFFFFF">
    	<meta name="msapplication-TileImage" content="favicon-144.png">
    	<meta name="msapplication-config" content="browserconfig.xml">
    </head>
    <body>
        <script src="js/scrollreveal.min.js"></script>
        <header>
            <?php include("templates/fixed-container.php"); ?>

            <?php include("templates/menu-container-directors.php"); ?>

            <div id="black-out" class="black-out hidden"></div>
        </header>

        <div class="content" id="content">
            <div id="menu-trigger" class="menu-trigger">
                <button class="btn btn-link">
                    <?php include("templates/menu.svg.php"); ?>
                </button>
            </div>
            <main class="main">
                <?php include("templates/directors.php"); ?>

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
        <script>
            $("html, body").animate({
                scrollTop: $("#directors").offset().top - 150
            }, 500);
        </script>
    </body>
</html>
