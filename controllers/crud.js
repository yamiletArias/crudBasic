const conexion = require('../database/db');

exports.save = (req, res) =>{

  const titulo = req.body.titulo;
  const autor = req.body.autor;
  const genero = req.body.genero;
  const precio = req.body.precio;

  conexion.query("INSERT INTO libros SET ?",
    {titulo: titulo, autor: autor, genero: genero, precio: precio},
    (error, results) => {
      if(error){
        console.error("No se pudo registrar cursos", error)
      }else{
        res.redirect('/');
      }
    }
  )
};
exports.update = (req, res) =>{
  const id = req.body.id;
  const titulo = req.body.titulo;
  const autor = req.body.autor;
  const genero = req.body.genero;
  const precio = req.body.precio;

  conexion.query("UPDATE libros SET ? WHERE id = ?",
    [{titulo: titulo, autor: autor, genero: genero, precio: precio}, id],
    (error, results) => {
      if(error){
        console.error("No se pudo Actualizar libros", error)
      }else{
        res.redirect('/');
      }
    }
  )
}