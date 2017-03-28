<section class="work">
    <div class="container">
        <header>
            <h2 class="h1 page-header text-center"><a href="#work" id="work">Work</a></h2>

            <div class="big-nav-pills">
                <ul class="nav nav-pills" role="tablist">
                    <li role="presentation" class="active"><a href="#featured-work" aria-controls="featured-work" role="tab" data-toggle="pill">Featured Work</a></li>
                    <li role="presentation"><a href="#reels" aria-controls="reels" role="tab" data-toggle="pill">Reels</a></li>
                    <li role="presentation"><a href="#production-companies" aria-controls="reels" role="tab" data-toggle="pill">Production Companies</a></li>
                    <li role="presentation"><a href="#ad-agencies" aria-controls="ad-agencies" role="tab" data-toggle="pill">Ad Agencies</a></li>
                    <li role="presentation"><a href="#clients" aria-controls="clients" role="tab" data-toggle="pill">Clients</a></li>
                    <li role="presentation"><a href="#directors-photographers" aria-controls="directors-photographers" role="tab" data-toggle="pill">Directors/Photographers</a></li>
                    <li role="presentation"><a href="#feature-films-tv-docs" aria-controls="feature-films-tv-docs" role="tab" data-toggle="pill">Feature Films - TV Series - Docs</a></li>
                    <li role="presentation"><a href="#print" aria-controls="print" role="tab" data-toggle="pill">Print</a></li>
                </ul>
            </div>
        </header>
    </div>
    <div class="tab-content">
        <div role="tabpanel" class="tab-pane fade in active" id="featured-work">

            <?php include("templates/work_featured-work.php"); ?>

        </div>
        <div role="tabpanel" class="tab-pane fade" id="reels">

            <?php include("templates/work_reels.php"); ?>

        </div>
        <div role="tabpanel" class="tab-pane fade" id="production-companies">

            <?php include("templates/work_production-companies.php"); ?>

        </div>
        <div role="tabpanel" class="tab-pane fade" id="ad-agencies">

            <?php include("templates/work_ad-agencies.php"); ?>

        </div>
        <div role="tabpanel" class="tab-pane fade" id="clients">

            <?php include("templates/work_clients.php"); ?>

        </div>
        <div role="tabpanel" class="tab-pane fade" id="directors-photographers">

            <?php include("templates/work_directors-photographers.php"); ?>

        </div>
        <div role="tabpanel" class="tab-pane fade" id="feature-films-tv-docs">

            <?php include("templates/work_feature-films-tv-docs.php"); ?>

        </div>
        <div role="tabpanel" class="tab-pane fade" id="print">

            <?php include("templates/work_print.php"); ?>

        </div>
    </div>
</section>
