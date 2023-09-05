alert('Hello, Selamat datang di kalkulator POP UP');

var lagi = true;

while (lagi) {
    var angka1 = parseFloat(prompt('Masukan angka pertama : '));
    var operator = prompt('Masukan operator');
    var angka2 = parseFloat(prompt('Masukan angka kedua'));
    var hasil;

    alert('Anda ingin menghitung ' + angka1 + ' ' + operator + ' ' + angka2);

    switch (operator) {
        case "+":
            hasil = angka1 + angka2;
            alert('Hasil dari ' + angka1 + ' + ' + angka2 + ' ialah ' + hasil);
            break;
        case "-":
            hasil = angka1 - angka2;
            alert('Hasil dari ' + angka1 + ' - ' + angka2 + ' ialah ' + hasil);
            break;
        case "x":
            hasil = angka1 * angka2;
            alert('Hasil dari ' + angka1 + ' x ' + angka2 + ' ialah ' + hasil);
            break;
        case "/":
            hasil = angka1 / angka2;
            alert('Hasil dari ' + angka1 + ' / ' + angka2 + ' ialah ' + hasil);
            break;
        default:
            alert('Operator yang Anda masukkan tidak valid');
    }

    lagi = confirm('Hitung lagi?');
}

console.log('test');
