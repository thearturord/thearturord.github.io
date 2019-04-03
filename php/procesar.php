<?php

$nombre = $_POST['nombre'];
$apellidos = $_POST["apellidos"];
$email = $_POST["email"];
$pais = $_POST["pais"];
$mensaje = $_POST["mensaje"];

$destinatario = "thisisrdmusic@gmail.com";
$asunto = "Respuesta de Lula";

$carta = "Nombre completo: $nombre . $apellidos \n";
$carta .= "Email: $email\n";
$carta .= "De: $pais \n";
$carta .= "Mensaje: $mensaje";

mail($destinatario, $asunto, $carta);

?>
