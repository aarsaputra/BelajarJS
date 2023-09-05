var jmlAngkot = 10;
var AngkotBeroperasi = 6;
var noAngkot = 1;
for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
	if (noAngkot <= 6) {
		console.log('Angkot no ' + noAngkot + ' sedang beroprasi.');
	} else if(noAngkot === 8) {
		console.log('Angkot no ' + noAngkot + ' sedang lembur.');
	} else {
		console.log('Angkot no ' + noAngkot + ' sedang tidak beroprasi.');
	}

}