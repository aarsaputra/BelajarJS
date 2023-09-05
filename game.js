var tanya = true;
while ( tanya ){
// Menangkap Pilhan player
var b = prompt('Kamu memilih : Gajah, Semut, atau manusia?');
// Menangkap bilangan random dan komputer
var comp = Math.random();
if ( comp < 0.34  ) { comp = 'gajah'; } else if ( comp > 0.34 && comp < 0.67 ) { comp = 'orang'; } 
else {  comp = 'semut'; }
 var hasil = '';
// Menentukan hasil
if ( b == comp ) { hasil = 'SERI!!!'; }
else if ( b == 'gajah' ){
  // if (comp == ) {
  //   hasil = 'MENANG';
  // } else {
  //   hasil = 'KALAH'; }
  // }
  // }
  // Menggunakan operator ternari
  hasil = ( comp == 'orang' ) ? 'MENANG' : 'KALAH'; } 
  else if ( b == 'orang' )  { hasil = ( comp == 'gajah' ) ? 'KALAH' : 'MENANG'; } 
  else if ( b == 'semut' ) { hasil = ( comp == 'orang' ) ? 'KALAH' : 'MENANG'; } else { hasil = 'Anda memasukkan pilhan yang salah!!!';  }
// Tampilkan hasilnya
alert('Kamu memilih : ' + b + ' dan komputer memilih : ' + comp + '\nmaka hasilnya kamu ' + hasil );
tanya = confirm('Lagi?');
}
alert('Terimakasih telah bermain')
