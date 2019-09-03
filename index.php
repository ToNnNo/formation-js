<?php

header("Access-Control-Allow-Origin: *"); // autorise tous les serveurs a récupérer la réponse

if( isset($_GET['name']) && !empty($_GET['name']) ){

    echo "Hello ".$_GET['name'];

}