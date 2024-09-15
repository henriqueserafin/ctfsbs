const fs = require('fs');

// Tentativa de ler o arquivo de flag
fs.readFile('/flag.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading the flag file:', err);
    } else {
        console.log('Flag:', data);
    }
});
