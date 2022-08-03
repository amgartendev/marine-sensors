<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="_cdn/login_style.css">
    <title>Login</title>
</head>

<body>

    <img src="images/background_lisbon.png" alt="background" width="100%" />

    <div class="tela-login">
        <form method="POST" enctype="multipart/form-data">
            <h1>LOGIN</h1>
            <input name="email" type="email" placeholder="E-mail" required />
            <br><br>
            <input name="password" type="password" placeholder="Senha" required />
            <br><br>
            <input name="button" id="button" type="submit" value="Login" />
        </form>
    </div>
</body>
</html>

<script>
    <?php
    require __DIR__ . "\Source\autoload.php";
    require __DIR__ . "\Source\Support\Config.php";

    $login = new \Source\Support\Login();
    
    if (isset($_POST['button'])) {
        $login->setEmail($_POST['email']);
        $login->setPassword($_POST['password']);
        $login->verifyCredentials($_POST['email'], $_POST['password']);
    }
    ?>
</script>