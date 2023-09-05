// Menentukan variabel volume kubus
// var kubus_a = prompt('Masukkan Nilai kubus a')
// var kubus_b = prompt('Masukkan Nilai kubus b')
// // Menjumlahkan masing masing nilai kubus 
// hasil_a = kubus_a * kubus_a * kubus_a;
// hasil_b = kubus_b * kubus_b * kubus_b;
// //Menjumlahkan kedua kubus
// hasil_volume = hasil_a + hasil_b;
// alert('Maka jumlah kedua volume kubus tersebut adalah ' + hasil_volume );
function MenjumlahkanVolume2Kubus(a, b)
{
  var Volume_a;
  var Volume_b;
  var total;
  
  Volume_a = a * a * a;
  Volume_b = b * b * b;
  
  total = Volume_a + Volume_b;
  
  return total;
}
alert('Total volume 2 kubus dari ialah '  + (MenjumlahkanVolume2Kubus(7, 8)));