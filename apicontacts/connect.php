
    <?php
    //dans cette place je dois pas specifier  le html body.. ca me genere un erreur lors de la recuperation du fichier jsons
    $servername = "localhost";
    $username = "root";
    $password = "";
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");
    try {
      $conn = new PDO("mysql:host=$servername;dbname=contacts", $username, $password);
      // set the PDO error mode to exception
    
    } catch(PDOException $e) {
      echo "Connection failed: " . $e->getMessage();
    }
    
     ?>