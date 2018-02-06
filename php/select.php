<?php
    require_once("phplogin.php")

    $name = $_POST['name'];
    $score = $_POST['score'];

    $result = $db->query("SELECT MAX(score) AS highestscore from minigameTable");
    $arr = $result->fetchAll();

    echo json_encode($arr);
?>
