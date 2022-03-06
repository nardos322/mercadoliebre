const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    let home = path.join(__dirname, '/views/home.html');
    res.sendFile(home);
})

app.get('/registro', (req, res) => {
    let register = path.join(__dirname, '/views/register.html');
    res.sendFile(register);
});

app.get('/login', (req, res) => {
    let login = path.join(__dirname, '/views/login.html');
    res.sendFile(login);
});







app.listen(PORT, ()=> console.log(`Servidor levantado en el puerto ${PORT}`));