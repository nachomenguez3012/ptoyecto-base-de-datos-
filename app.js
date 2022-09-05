const express = require('express');
const path = require("path")
const app = express();
const mainRouter = require ("./routes/mainRouter"); 

app.set("view engine" , "ejs");
    app.set('views', path.join(__dirname, '/views'))

app.use(express.static('public'));

app.use("/", mainRouter);

app.listen(3030, () => { console.log('Servidor arriba en el puerto 3030 🤓👌');})