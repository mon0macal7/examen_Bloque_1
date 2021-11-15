//Traer el Json de party con un fetch

fetch("./party.JSON")
  .then((response) => response.json())
  .then((data) => bootcampData(data))
  .catch((error) => console.log(error));

//Función para iterar arreglo party y acceder a las propiedades de cada objeto
let bootcampData = (data) => {
  for (const item of data.party) {
    console.log(item.Nombre);
    console.log(item.Apellido);
    console.log(item.Edad);
    console.log(item.Cumpleaños);

    let members = document.getElementById("BootcampMembers");

    members.innerHTML += `<h2 id= '${item.Nombre}'+''${item.Apellido}'></h2>`;
    members.innerHTML += `<ul id= '${item.Cumpleaños}'></ul>`;
  }
};

//Pintar en HTML datos de party
