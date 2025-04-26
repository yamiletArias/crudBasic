//Express = framework JS
const express = require('express');
const app = express(); //Framework

//Definir un motor de plantillas
app.set('view engine', 'ejs');

//Configuracion 
app.use(express.urlencoded({extended: false}));
app.use(express(express.json));

//Incorporar
app.use('/', require('./router'));

//Servidor local
app.listen(5000, () => {
  console.log("Servidor ejecutando http://localhost:5000");
});