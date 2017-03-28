<section class="locations">
    <div class="container">
        <header>
            <h2 class="h1 page-header text-center"><a href="#locations" id="locations">Locations</a></h2>

            <div class="big-nav-pills">
                <ul class="nav nav-pills" role="tablist">
                    <li role="presentation" class="active"><a href="#brazil" aria-controls="brazil" role="tab" data-toggle="pill">Brazil</a></li>
                    <li role="presentation"><a href="#venezuela" aria-controls="venezuela" role="tab" data-toggle="pill">Venezuela</a></li>
                </ul>
            </div>
        </header>
    </div>
    <div class="tab-content">
        <div role="tabpanel" class="tab-pane fade in active" id="brazil">

            <?php include("templates/locations_brazil.php"); ?>

        </div>
        <div role="tabpanel" class="tab-pane fade" id="venezuela">

            <?php include("templates/locations_venezuela.php"); ?>

        </div>
    </div>
</section>
