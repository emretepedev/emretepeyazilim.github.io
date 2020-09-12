<?php

try {
  $VeritabaniBaglantisi = new PDO( "mysql:host=localhost;dbname=emresite;charset=UTF8", "root", "" );
} catch ( PDOException $Hata ) {
  //echo "Bağlantı Hatası!"
  die();
}

$AyarlarSorgusu = $VeritabaniBaglantisi->prepare( "SELECT * FROM ayarlar LIMIT 1" );
$AyarlarSorgusu->execute();
$AyarlarSayisi = $AyarlarSorgusu->rowCount();
$Ayarlar = $AyarlarSorgusu->fetch( PDO::FETCH_ASSOC );

if ( $AyarlarSayisi > 0 ) {

    $SiteAdi = $Ayarlar[ "SiteAdi" ];
    $SiteTitle = $Ayarlar[ "SiteTitle" ];
    $SiteDescription = $Ayarlar[ "SiteDescription" ];
    $SiteKeywords = $Ayarlar[ "SiteKeywords" ];
    $SiteCopyrightMetni = $Ayarlar[ "SiteCopyrightMetni" ];
    $SiteLogosu = $Ayarlar[ "SiteLogosu" ];
    $SiteEmailAdresi = $Ayarlar[ "SiteEmailAdresi" ];
    $SiteEmailSifresi = $Ayarlar[ "SiteEmailSifresi" ];
    $SosyalLinkFacebook = $Ayarlar[ "SosyalLinkFacebook" ];
    $SosyalLinkTwitter = $Ayarlar[ "SosyalLinkTwitter" ];   
    $SosyalLinkLinkedin = $Ayarlar[ "SosyalLinkLinkedin" ];
    $SosyalLinkInstagram = $Ayarlar[ "SosyalLinkInstagram" ];
    $SosyalLinkPinterest = $Ayarlar[ "SosyalLinkPinterest" ];
    $SosyalLinkYoutube = $Ayarlar[ "SosyalLinkYoutube" ];
} else {
  //echo "Site Ayar Sorgusu Hatalı!"
  die();
}

$MetinlerSorgusu = $VeritabaniBaglantisi->prepare( "SELECT * FROM sozlesmelervemetinler LIMIT 1" );
$MetinlerSorgusu->execute();
$MetinlerSayisi = $MetinlerSorgusu->rowCount();
$Metinler = $MetinlerSorgusu->fetch( PDO::FETCH_ASSOC );

if ( $MetinlerSayisi > 0 ) {

  $HakkimizdaMetni = $Metinler[ "HakkimizdaMetni" ];
  $UyelikSozlesmesiMetni = $Metinler[ "UyelikSozlesmesiMetni" ];
  $KullanimKosullariMetni = $Metinler[ "KullanimKosullariMetni" ];
  $GizlilikSozlesmesiMetni = $Metinler[ "GizlilikSozlesmesiMetni" ];
  $MesafeliSatisSozlesmesiMetni = $Metinler[ "MesafeliSatisSozlesmesiMetni" ];
  $TeslimatMetni = $Metinler[ "TeslimatMetni" ];
  $IptalIadeDegisimMetni = $Metinler[ "IptalIadeDegisimMetni" ];

} else {
  //echo "Metinler Sorgusu Hatalı!"
  die();
}

?>
