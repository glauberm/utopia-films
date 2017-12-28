<?php

namespace Controller;

use Twig_Loader_Filesystem;
use Twig_Environment;

class BaseController
{
    protected $model;
    protected $view;

    public function renderAction()
    {
        $json = file_get_contents(BASE_DIR.'/src/Model/'.$this->model.'.json');

        $params = json_decode($json, true);

        return $this->render($params);
    }

    protected function render($params = array())
    {
        $loader = new Twig_Loader_Filesystem(BASE_DIR.'/src/View/');
        $twig = new Twig_Environment($loader);

        // Carrega os contatos em todas as páginas
        $json = file_get_contents(BASE_DIR.'/src/Model/contact.json');
        $contact = json_decode($json, true);

        echo $twig->render($this->view.'.html.twig', array(
            'BASE_URL' => BASE_URL,
            'INDEX_URL' => INDEX_URL,
            'contact' => $contact,
            'params' => $params,
        ));
    }
}
