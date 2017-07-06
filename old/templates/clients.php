<section class="clients">
    <div class="container">
        <header>
            <h2 class="h1 page-header text-center"><a href="#clients" id="clients">Clients</a></h2>

            <div class="big-nav-pills">
                <ul class="nav nav-pills" role="tablist">
                    <li role="presentation" class="active"><a href="#production-companies" aria-controls="production-companies" role="tab" data-toggle="pill">Production Companies</a></li>
                    <li role="presentation"><a href="#agencies" aria-controls="agencies" role="tab" data-toggle="pill">Agencies</a></li>
                    <li role="presentation"><a href="#clients-tab" aria-controls="clients-tab" role="tab" data-toggle="pill">Clients</a></li>
                    <li role="presentation"><a href="#directors-photographers" aria-controls="directors-photographers" role="tab" data-toggle="pill">Directors / Photographers</a></li>
                    <li role="presentation"><a href="#feature-films-tv" aria-controls="feature-films-tv" role="tab" data-toggle="pill">Feature Films / TV Series</a></li>
                    <li role="presentation"><a href="#print" aria-controls="print" role="tab" data-toggle="pill">Print</a></li>
                </ul>
            </div>
        </header>
    </div>
    <div class="tab-content">
        <div role="tabpanel" class="tab-pane fade in active" id="production-companies">

            <?php include("templates/clients_production-companies.php"); ?>

        </div>
        <div role="tabpanel" class="tab-pane fade" id="agencies">

            <?php include("templates/clients_agencies.php"); ?>

        </div>
        <div role="tabpanel" class="tab-pane fade" id="clients-tab">

            <?php include("templates/clients_clients.php"); ?>

        </div>
        <div role="tabpanel" class="tab-pane fade" id="directors-photographers">

            <?php include("templates/clients_directors-photographers.php"); ?>

        </div>
        <div role="tabpanel" class="tab-pane fade" id="feature-films-tv">

            <?php include("templates/clients_feature-films-tv.php"); ?>

        </div>
        <div role="tabpanel" class="tab-pane fade" id="print">

            <?php include("templates/clients_print.php"); ?>

        </div>
    </div>
</section>
