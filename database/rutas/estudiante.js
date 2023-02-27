const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaestudiante = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idestudiante: String
})

const ModeloEstudiante = mongoose.model('estudiantes', eschemaestudiante)
module.exports = router

//Ruta de prueba
// router.get('/ejemplo', (req, res) => {
//     res.end('Saludo carga desde ruta ejemplo')
// })


//Agregar estudiantes
router.post('/agregarestudiante', (req, res) => {
    const nuevoestudiante = new ModeloEstudiante({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idestudiante: req.body.idestudiante,
    })
    nuevoestudiante.save(function (err) {
        if (!err) {
            res.send('Estudiante agregado correctamente')
        } else {
            res.send(err)
        }
    })
})

//Obtener todos los estudiantes
router.get('/obtenerestudiantes', (req, res) => {
    ModeloEstudiante.find({}, function (docs, err) {
        if (!err) {
            res.send('Estudiante agregado correctamente')
        } else {
            res.send(err)
        }
    })
})


//Obtener data de estudiante
router.post('/obtenerdataestudiante', (req, res) => {
    ModeloEstudiante.find({ idestudiante: req.body.idestudiante }, function (docs, err) {
        if (!err) {
            res.send('Estudiante agregado correctamente')
        } else {
            res.send(err)
        }
    })
})

//Actualiza estudiante
router.post('/actualizaestudiante', (req, res) => {
    ModeloEstudiante.findOneAndUpdate({ idestudiante: req.body.idestudiante }, {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
    }, (err) => {
        if (!err) {
            res.send('Estudiante actualizado correctamente')
        } else {
            res.send(err)
        }
    })
})

//Borrar estudiante
router.post('/borrarestudiante', (req, res) => {
    ModeloEstudiante.findOneAndDelete({ idestudiante: req.body.idestudiante }, (err) => {
        if (!err) {
            res.send('Estudiante eliminado correctamente')
        } else {
            res.send(err)
        }
    })
})