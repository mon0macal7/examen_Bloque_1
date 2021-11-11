//Traer el Json de party con un fetch

fetch("party.JSON")
  .then((response) => response.json())
  .then((data) => bootcampData(data))
  .catch((error) => console.log(error));

//Función para iterar arreglo party y acceder a las propiedades de cada objeto
let bootcampData = (data) => {
  for (const item of data.party) {
    console.log(item);
    for (const keys of party.Nombre.Apellido.Edad.Cumpleaños) {
      console.log(keys);
    }
  }
};
