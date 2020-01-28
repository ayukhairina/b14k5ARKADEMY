<?php

function hitung_karakter($string){
    if (is_string($string)){
$text = str_replace(' ', '', $string);
foreach (count_chars($text, 1) as $i => $val)
{
    if ($val != 1){
   echo "Huruf \"" , chr($i) , "\" muncul $val kali.\n";
}
}
}
else{
    echo "Harus memasukan karakter dan harus string!";
}
}

hitung_karakter("cepat kerjakan!!!");
?>
