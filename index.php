<?php

require_once(__DIR__.'/vendor/autoload.php');
require_once('config.php');

use Controller\FrontController;

$front = new FrontController(BASE_URL);
