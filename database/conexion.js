const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://gerar0112:KGPYytSEuTEFRynS@proyecto1.thbnhnx.mongodb.net/test');

const objetobd = mongoose.connection

objetobd.on('connected', () => { console.log('Conexion correcta a MongoDB'); })
objetobd.on('error', () => { console.log('Error en la coneción a MongoDB'); })

module.exports = mongoose