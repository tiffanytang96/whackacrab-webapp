<?php
    require_once('phplogin.php')

    $name = $_POST['name'];
    $score = $_POST['score'];

    $result = $db->query("INSERT INTO users(name, score) Values ('$name', '$score')");
    $arr = $result->fetchAll();

    echo json_encode($arr);
?>

