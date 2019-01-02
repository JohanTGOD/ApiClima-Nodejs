//estoy usando destructuracion
//instancia de clases
const { argv } = require('./yargs'); 
const {place}= require('./places');
const {getClima}=require('./clima');

//esto es bogota Colombia
//console.log(argv.direccion);



//Forma larga

// un asyn devulve una promesa
//  place(argv.direccion).then(res=>{
//      console.log("la respuesta es : ",res );

//  }).catch(err=>{
    
//      console.log("El erro es ",err);
//  })

// getClima("4.710988599999999","-74.072092").then(res=>{

//     console.log("El clima es  : "+res+" C");

// }).catch(err=>{

//     console.log("el get climas es ",err);
// })


//forma corta

let getInfo=async(direccion)=>{
    try {
        let place1= await place(direccion);
        let weather = await getClima(place1.latitud,place1.longitud);
        return `El clima en ${direccion} es de ${weather} C `;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`
    }
   
}

getInfo(argv.direccion).then(res=>{

    console.log(res);
}).catch(err=>{

    console.log("El error es",err);
})