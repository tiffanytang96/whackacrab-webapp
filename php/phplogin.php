<?php
    header("Access-Control-Allow-Origin:*");
    $servername = "localhost";
    $dblogin = "root";
    $password = "root";
    $dbname= "minigame";

 try {
        $db = new PDO ("mysql:host=$servername; dbname=$dbname", $dblogin, $password);
    } catch(PDOException $e){
        echo $e->getMessage();
    }
?>