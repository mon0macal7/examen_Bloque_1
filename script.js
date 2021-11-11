//Traer el Json de party con un fetch

fetch(".party.JSON")
  .then((response) => response.json())

  .then((data) => bootcampData(data))
  .catch((error) => console.log(error));

//Funcion para iterar party
/*let bootcampData = (data) => {
    for (const  of partyJSON ) {
        
    }
    */

//Iterar el objeto
