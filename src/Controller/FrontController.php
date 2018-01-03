<?php

namespace Controller;

class FrontController
{
    public function __construct($baseUrl)
    {
        $fullUrl = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];

        $urlParams = substr($fullUrl, strlen(INDEX_URL));

        if ($urlParams) {
            $params = explode('/', $urlParams);
            $controller = ucfirst(array_shift($params)).'Controller';
        } else {
            $controller = 'WorkController';
        }

        if (!empty($params)) {
            $action = strtolower(array_shift($params)).'Action';
        } else {
            $action = 'renderAction';
        }

        $controller = __NAMESPACE__ . "\\" . $controller;
        $controller = new $controller;
        $controller->$action();
    }
}
