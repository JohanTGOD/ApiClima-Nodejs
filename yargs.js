const argv = require('yargs').options({
    direccion:{
        alias : '-d',
        desc:'Ubicacion de la ciudad y el pais para obtener el clima',
        demand: true
    }
}).argv;

module.exports={
    argv
}