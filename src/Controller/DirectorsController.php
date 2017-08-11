<?php

namespace Controller;

class DirectorsController extends BaseController
{
    protected $model = 'directors';
    protected $view = 'Directors/directors';

    public function renderAction()
    {
        return $this->render();
    }
}
