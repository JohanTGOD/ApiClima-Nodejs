const axios = require('axios');

const getClima=async(lat,lon)=>{

   let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=88f855ba5871e5685b13f3a0d167814b`)
   if (response.cod ==="400") {
    throw new Error ("No hay resultados con los datos digitados") 
 }
 
 
    return response.data.main.temp;

}



module.exports={

    getClima
}