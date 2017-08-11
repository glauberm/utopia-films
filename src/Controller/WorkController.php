<?php

namespace Controller;

class WorkController extends BaseController
{
    protected $model = 'work';
    protected $view = 'Work/work';

    public function renderAction()
    {
        $json = file_get_contents(BASE_DIR.'/src/Model/'.$this->model.'.json');
        $params = json_decode($json, true);

        $print = file_get_contents(BASE_DIR.'/src/Model/print.json');
        $printParams = json_decode($print, true);

        $params = array_merge($params, $printParams);

        return $this->render($params);
    }
}
