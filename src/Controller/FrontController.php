<?php

namespace Controller;

class FrontController
{
    public function __construct($baseUrl)
    {
        // Armazena a URL completa.
        $fullUrl = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];

        // Extrai tudo após a baseUrl como string.
        $urlParams = substr($fullUrl, strlen(INDEX_URL));
        // Remove requisições GET dos parâmetros
        // $urlParams = substr($urlParams, 0, strrpos($urlParams, '?'));

        // Se a extração funcionar...
        if($urlParams) {
            // ... cria um array com os parâmetros...
            $params = explode('/', $urlParams);
            // ... e extrai o primeiro valor do array para ser o controller.
            $controller = ucfirst(array_shift($params)).'Controller';
        }
        // Senão, define o controller para o padrão
        else {
            $controller = 'WorkController';
        }

        // Se ainda houver parâmetros...
        if(!empty($params)) {
            // ... extrai o segundo valor do array
            // (agora primeiro), para ser a action
            $action = strtolower(array_shift($params)).'Action';
        }
        // Senão, define a action para a padrão
        else {
            $action = 'renderAction';
        }

        // var_dump($fullUrl, $urlParams, $controller, $action);

        // Instancia e chama o método
        $controller = __NAMESPACE__ . "\\" . $controller;
        $controller = new $controller;
        $controller->$action();
    }
}
