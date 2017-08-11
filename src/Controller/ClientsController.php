<?php

namespace Controller;

class ClientsController extends BaseController
{
    protected $model = 'clients';
    protected $view = 'Clients/clients';

    public function renderAction()
    {
        $json = file_get_contents(BASE_DIR.'/src/Model/'.$this->model.'.json');
        $params = json_decode($json, true);

        $print = file_get_contents(BASE_DIR.'/src/Model/print.json');
        $printParams = json_decode($print, true);

        array_push($params, $printParams);

        return $this->render($params);
    }
}
