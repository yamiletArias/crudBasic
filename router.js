//router = enrutador
const express = require('express');
const router = express.Router();
const conexion = require('./database/db');


router.get('/', (req, res) => {
  conexion.query('SELECT * FROM libros', (error, results) =>{
    if(error){
      throw error;
    }else{
      res.render('index', {libros: results});
    }
  });
});

//registrar
router.get('/create', (req, res) => {
  res.render('create');
});

//actualizar
router.get('/edit/:id', (req, res) => {
  conexion.query('SELECT * FROM libros WHERE id = ?', [req.params.id], (error, results) =>{
    if(error){
      throw error;
    }else{
      res.render('edit', { libro: results[0] });
    }
  });
});

//eliminar
router.get('/delete/:id', (req, res) => {
  conexion.query('DELETE FROM libros WHERE id = ?', [req.params.id], (error, results) =>{
    if(error){
      throw error;
    }else{
      res.redirect('/');
    }
  });
})

//Acceso a CRUD
const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;