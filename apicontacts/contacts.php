
    <?php
    
  include_once("connect.php");

 
  $query = 'SELECT * FROM contacts ';
  $stmt = $conn->prepare($query);
  $stmt->execute();
  $result_array=[];

  while($data = $stmt->fetch()){
      array_push($result_array, $data);
  }

  echo json_encode($result_array);

  $stmt->closeCursor();
    
    ?>
