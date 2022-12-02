<?php
require('connect.php');
$data=file_get_contents("php://input");


if($data || !empty($data) ){
   
   $request=json_decode($data);
   
   $query="INSERT INTO contacts(nom,tel,prenom) VALUES('$request->nom','$request->tel','$request->prenom') ";
  
    if($conn->exec($query)==1 ){
     $contact=[
        'nom'=> $request->nom,
       'prenom'=>$request->prenom,
       'tel'=>$request->tel
      ];
      echo json_encode($contact);
//     echo json_encode(1);
//     //    echo json_encode($request->nom) ;
  }
//   echo json_encode(0);
// echo json_encode( );
}






?>