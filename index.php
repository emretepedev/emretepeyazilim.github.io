<?php
require_once( "settings/ayar.php" );
require_once( "settings/fonksiyonlar.php" );
require_once( "settings/sitesayfalari.php" );
if ( isset( $_REQUEST[ "SK" ] ) ) {
  $SayfaKoduDegeri = SayiliIcerikleriFiltrele( $_REQUEST[ "SK" ] );
} else {
  $SayfaKoduDegeri = 0;
}
?>
<!DOCTYPE HTML>
<html>

<head>
    <title>emretepeyazilim</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <link rel="stylesheet" href="assets/css/main2.css" />
    <noscript>
        <link rel="stylesheet" href="assets/css/noscript.css" />
    </noscript>
</head>

<body class="is-preload">

    <!-- Wrapper -->
    <div id="wrapper" class="fade-in">

        <!-- Intro -->


        <!-- Header -->
        <header id="header">

        </header>

        <!-- Nav -->
        <nav id="nav">
            <ul class="links">
                <li><a href="index.html">HOŞ GELDİN!</a></li>
                <li class="<?php if ($SayfaKoduDegeri == 0){echo "active";} ?>"><a href="index.php?SK=0">ANASAYFA</a></li>
                <li class="<?php if ($SayfaKoduDegeri == 1){echo "active";} ?>"><a href="index.php?SK=1">HAKKIMDA</a></li>
                <li class="<?php if ($SayfaKoduDegeri == 2 || ($SayfaKoduDegeri >= 50 && $SayfaKoduDegeri <= 59)){echo "active";} ?>"><a href="index.php?SK=2">BLOG</a></li>
                <li class="<?php if ($SayfaKoduDegeri == 3){echo "active";} ?>"><a href="index.php?SK=3">İLETİŞİM</a></li>
            </ul>
            <ul class="icons">
                <li><a href="https://facebook.com/emretepeyazilim" class="fab fa-facebook-f fa-lg" target="_blank" style="border: 0;"><span class="label"></span></a></li>
                <li><a href="https://twitter.com/emretepeyazilim" class="fab fa-twitter fa-lg" target="_blank" style="border: 0;"><span class="label"></span></a></li>
                <li><a href="https://instagram.com/emretepeyazilim" class="fab fa-instagram fa-lg" target="_blank" style="border: 0;"><span class="label"></span></a></li>
                <li><a href="https://github.com/emretepeyazilim" class="fab fa-github fa-lg" target="_blank" style="border: 0;"><span class="label"></span></a></li>
                <li><a href="https://www.linkedin.com/in/emre-tepe-0b65611b6/" class="fab fa-linkedin-in fa-lg" target="_blank" style="border: 0;"><span class="label"></span></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=905522801804&text=Merhaba%20@emretepeyazilim." class="fab fa-whatsapp fa-lg" target="_blank" style="border: 0;"><span class="label"></span></a></li>
                <li><a href="https://telegram.me/emretepeyazilim" class="fab fa-telegram-plane fa-lg" target="_blank" style="border: 0;"><span class="label"></span></a></li>
                <li><a href="skype:live:.cid.ebf04f9e644e1570" class="fab fa-skype fa-lg" target="_blank" style="border: 0;"><span class="label"></span></a></li>
                <li><a href="tel:+905522801804" class="fas fa-phone-alt fa-lg" target="_blank" style="border: 0;"><span class="label"></span></a></li>
                <li><a href="mailto:emretepeyazilim@gmail.com" class="far fa-envelope fa-lg" target="_blank" style="border: 0;"><span class="label"></span></a></li>

            </ul>
        </nav>

        <!-- Main -->
        <div id="main">
            <?php
                if ((!$SayfaKoduDegeri) or ($SayfaKoduDegeri == "" )or($SayfaKoduDegeri == 0)) {
                        include( $Sayfa[ 0 ] );
                    } else {
                        include( $Sayfa[ $SayfaKoduDegeri ] );
                    }
            ?>
        </div>




        <!-- Copyright -->
        <div id="copyright">
            <ul>
                <li>&copy; TÜM HAKLARI SAKLIDIR</li>
                <li>DESIGN BY <a target="_blank" href="https://github.com/emretepeyazilim">EMRE TEPE</a></li>
            </ul>
        </div>

        <!-- Scripts -->
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/jquery.scrollex.min.js"></script>
        <script src="assets/js/jquery.scrolly.min.js"></script>
        <script src="assets/js/browser.min.js"></script>
        <script src="assets/js/breakpoints.min.js"></script>
        <script src="assets/js/util.js"></script>
        <script src="assets/js/main.js"></script>
        <script src="https://kit.fontawesome.com/ae6228a6a4.js" crossorigin="anonymous"></script>

</body>

</html>
