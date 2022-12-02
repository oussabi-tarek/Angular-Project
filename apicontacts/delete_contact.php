<?php

require 'connect.php';
$id=($_GET['id'] !== null ) ? $_GET['id'] :false;

if(!$id){
    return http_response_code(400);
}

$query="DELETE FROM contacts WHERE id='$id' LIMIT 1 ";

if($conn->exec($query)==1 ){
   $message=[
    "deleted"=>true
   ];
     echo json_encode($message);
//     echo json_encode(1);
//     //    echo json_encode($request->nom) ;
 }


?>