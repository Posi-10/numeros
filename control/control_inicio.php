<?php
  $i = 0;
  $numeros = array();
  do{
    $numeros[$i] = rand(0, 100);
    $i++;
  }while($i < 5);
  echo json_encode($numeros);
?>