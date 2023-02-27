const express = require('express')
const app = express()

//Importar conexión mongoDB
const archivoDB = require('./conexion')

//Importación del archivo de rutas y modelo usuario
const rutaestudiante = require('./rutas/estudiante')

//Importación de body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: 'true' }))

app.use('/api/estudiante', rutaestudiante)

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend de estudiantes. Corriendo...')
})


//Server básico
app.listen(3001, function () {
    console.log('el servidor está corriendo correctamente');
})