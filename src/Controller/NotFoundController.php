<?php

namespace Controller;

class NotFoundController extends BaseController
{
    protected $model = 'notFound';
    protected $view = 'NotFound/notFound';

    public function renderAction()
    {
        return $this->render();
    }
}
