<?php
require("connect.php");

$term=($_GET['term'] !== null ) ? $_GET['term']:false;

$query="SELECT * FROM contacts WHERE  nom like '%$term%' ";
$stmt = $conn->prepare($query);




$contacts=[];
if($stmt->execute()==1){
    while($data = $stmt->fetch()){
        array_push($contacts, $data);
    }
    echo json_encode($contacts);
}









?>