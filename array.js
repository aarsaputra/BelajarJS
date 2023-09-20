var array1 = [1,2,3,4,5];
// alert(array1[2])
console.log(array1);
// Memanipulasi Array 
//1. Menambah isi Arrayvar 
// var arr = [];
// arr[0] = "Aar";
// arr[1] = "Saputra";
//   console.log(arr);
  
  // 2. Menghapus isi Array
  // var arr = ["Aar", "Saputra"];
  // arr[1] = undefined;
  // console.log(arr);
  
  // 3. Menampilkan isi Array
//   var arr = ["Aar","Saputra"];

// for(var i = 0; i < arr.length; i++) {
//   console.log('Nama siswa ke ' + (i+1) + ' ' + arr[i]);
// }

//          METHOD PADA ARRAY 
// 1. join
// var arr = ["Aar","Saputra"];
// console.log(arr.join(' - '));

// 2. push, pop, 
// arr.push('Heee','Heeeeee');
// arr.pop();
// 3. shift, unsift
// arr.shift();
// arr.unshift('heew');
// console.log(arr.join(' - '));
// 4. Splice
// var arr = ['Aar', 'Saputra', 'hanna', 'fitri'];
// rumus splice(IndexAwal, maudihapusBerapa, elemenBaru1,
// elemenBaru2,.....elemenBarun)
// arr.splice(1,0,'Hai','semua');
// 5. Slice
// var arr2 = arr.slice(2,3);
// console.log(arr2.join(' - '));
// 6. ForEach
var angka = [1,2,3,4,5,6,7,8];
var arr = ['Aar', 'Saputra', 'hanna', 'fitri'];
// for (var i = 0; i < angka.length; i++){
//   console.log(angka[i]);
// }
angka.forEach(function(e){
  console.log(e);
 })
 arr.forEach(function(e,i){
   console.log('Mahasiswa ke - ' + (i+1) + ' adalah : ' + e);
 })