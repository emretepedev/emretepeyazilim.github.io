<?php

$IPAdresi = $_SERVER[ "REMOTE_ADDR" ];
$ZamanDamgasi = time();
$TarihSaat = date( "d.m.Y H:i:s", $ZamanDamgasi );

function RakamlarHaricTumKarakterleriSil( $Deger ) {
  $Islem = preg_replace( "/[^0-9]/", "", $Deger );
  $Sonuc = $Islem;
  return $Sonuc;
}

function DonusumleriGeriDondur( $Deger ) {
  $GeriDondur = htmlspecialchars_decode( $Deger, ENT_QUOTES );
  $Sonuc = $GeriDondur;
  return $Sonuc;
}

function Guvenlik( $Deger ) {
  $BoslukSil = trim( $Deger );
  $TaglariTemizle = strip_tags( $BoslukSil );
  $EtkisizYap = htmlspecialchars( $TaglariTemizle );
  $Sonuc = $EtkisizYap;
  return $Sonuc;
}

function SayiliIcerikleriFiltrele( $Deger ) {
  $BoslukSil = trim( $Deger );
  $TaglariTemizle = strip_tags( $BoslukSil );
  $EtkisizYap = htmlspecialchars( $TaglariTemizle );
  $Temizle = RakamlarHaricTumKarakterleriSil( $EtkisizYap );
  $Sonuc = $Temizle;
  return $Sonuc;
}


?>