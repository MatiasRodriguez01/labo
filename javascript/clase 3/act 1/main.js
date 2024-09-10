async function fetchUser() {

    try{
        const respuesta = await fetch("https://randomuser.me/api/");
        const data = await respuesta.json();
        console.log(data)
    
        const persona = data.results[0];
    
    
        const nombre = `${persona.name.first} ${persona.name.last}`;
        const ubicacion =` ${persona.location.country} ${persona.location.state}`;
        const urlImagen = persona.picture.medium;
        const divElement = document.getElementById("userInfo")
    
    
        divElement.innerHTML=`
        <p>${nombre}</p>
        <p>${ubicacion}</p>
        <img src=${urlImagen} width=400></img>
        `
    
    
        console.log(nombre);
        console.log(ubicacion);
        console.log(urlImagen)

    } catch (error) {
        console.log(error)
    }
}

function getUserDataWithThen(){
    fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {

        const person = data.results[0];
        const nombre = `${person.name.first} ${person.name.last}`;
        const ubicacion = `${person.location.country} ${person.location.state}`;
        const urlImagen = person.picture.medium;
        const divInfo = document.getElementById("userInfo")

        divInfo.innerHTML = `
        <p> Nombre: ${nombre}</p>
        <p> Ubicacion: ${ubicacion}</p>
        <img src=${urlImagen} width=150>
        `

    })
    .catch((err) => console.log(err));
}

getUserDataWithThen();
// fetchUser();