<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $asunto = $_POST["subject"];
    $mensaje = $_POST["mensaje"];

    // Aquí puedes realizar el envío del correo utilizando la función mail() de PHP
    // o utilizando una librería de correo como PHPMailer o Swift Mailer
    // En este ejemplo utilizamos la función mail(), pero ten en cuenta que esta
    // función puede no funcionar correctamente en todos los servidores.

    $destinatario = "zeerooh1993@gmail.com";
    $cabeceras = "From: $nombre <$email>\r\n";
    $cabeceras .= "Reply-To: $email\r\n";
    $cabeceras .= "Content-Type: text/plain; charset=utf-8\r\n";

    mail($destinatario, $asunto, $mensaje, $cabeceras);

    // Redirigir al usuario a una página de "gracias" o mostrar un mensaje de éxito
    header("Location: /gracias.html");
    exit;
}
?>
