const axios = require('axios');



const place=async(info)=>{
  let encodig = encodeURI(info);

   let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodig}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

   if (response.status ==="ZERO_RESULTS") {
      throw new Error ("No hay resultados con los datos digitados") 
   }

      console.log("it is ok");
   
  
    //console.log(JSON.stringify(response.data,undefined,2));
    //console.log(response.status);

    let location = response.data.results[0];
    //console.log("the location is ",location);

    
    let coords = location.geometry.location;
    let latitud=coords.lat;
    let longitud=coords.lng;
    

    return{
      coords,
      latitud,
      longitud
    }

}

  module.exports={
    place
  }