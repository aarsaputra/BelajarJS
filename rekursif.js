// LOOPING DALAM RECURSIF
function looping(n){
  if ( n === 0 ){
    return;
  }
  console.log(n);
  return looping(n-1)
}
looping(5);
// Penggunaan recursif untuk menghitung faktorial 5!=120
function faktorial(f){
  if (f === 0) return 1;
  return f * faktorial(f-1);
  
}
var hasil_f = faktorial(5);
console.log(hasil_f);