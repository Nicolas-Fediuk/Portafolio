<?php
    $destino = 'nicolasfediuk@gmail.com';
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'],

    mail($destino,$asunto,$mensaje);
?>