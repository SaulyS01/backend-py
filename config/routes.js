const router = require('express').Router();
const conexion = require('./conexion');

//------------------

//get practicantes
router.get('/', (req, res) => {
    let sql = 'select * from practicante';
    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else {
            res.json(rows);
        }
    });
});

//get practicante
router.get('/:id', (req, res) => {
    const {id} = req.params;
    let sql = 'select * from practicante where prac_id = ?';
    conexion.query(sql, [id], (err, rows, fields) => {
        if(err) throw err;
        else {
            res.json(rows);
        }
    });
});

//create practicante
router.post('/create', (req, res) => {
    const {nombres, apellidos, codigo, dni, celular, tema, direccion} = req.body;
    let sql = `insert into practicante(prac_nombres, prac_apellidos, prac_codUni, prac_dni, prac_numeroCelular, prac_temasInteres, prac_direccion) 
    values('${nombres}', '${apellidos}', '${codigo}', '${dni}', '${celular}', '${tema}', '${direccion}')`;
    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else {
            res.json({status: 'practicante creado con exito'});
        }
    });
});

//eliminar
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    let sql = `delete from practicante where prac_id = '${id}'`;
    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else {
            res.json({status: 'practicante eliminado'});
        }
    });
});

//editar
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {nombres, apellidos, codigo, dni, celular, tema, direccion} = req.body;
    let sql = `update practicante set 
    prac_nombres = '${nombres}', prac_apellidos = '${apellidos}', prac_codUni = '${codigo}', prac_dni = '${dni}', prac_numeroCelular = '${celular}', prac_temasInteres = '${tema}', prac_direccion = '${direccion}'
    where prac_id = '${id}'`;
    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else {
            res.json({status: 'practicante modificado'});
        }
    });
});

//------------------


//asginamos todas las rutas
router.get('/', function(req, res) {
    res.send('hola desde rutas/inicio');
});

module.exports = router;