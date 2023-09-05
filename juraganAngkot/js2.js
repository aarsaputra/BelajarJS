var jmlAngkot = 10;
var AngkotBeroperasi = 6;
var noAngkot = 1;

while	(noAngkot <= AngkotBeroperasi) {
	console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');

noAngkot++;	
}

for ( var noAngkot = AngkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++ ){
	console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.');
}