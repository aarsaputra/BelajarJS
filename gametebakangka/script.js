// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 9) + 1;

let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 9) {
        alert('Masukkan angka antara 1 dan 9.');
        return;
    }

    attempts++;

    if (guess === targetNumber) {
        showMessage(`Selamat! Anda berhasil menebak angka ${targetNumber} dalam ${attempts} percobaan.`);
    } else if (guess < targetNumber) {
        showMessage('Angka terlalu kecil. Coba lagi!');
    } else {
        showMessage('Angka terlalu besar. Coba lagi!');
    }
}

function showMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
}
