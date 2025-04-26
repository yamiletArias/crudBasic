const mysql = require('mysql');
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dblibros'
});

//cuando no hay errores, error = NULL
conexion.connect((error) => {
  if(error){
    console.log("Error en la conexion", error);
    return;
  }
  console.log("Conexion correctamente");
});

module.exports = conexion;