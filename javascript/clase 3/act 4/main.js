const getData = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
        const godImagen = document.getElementById('dogImage');

        const perros = data.message;

        godImagen.innerHTML=`
            <p>perro</p>
            <img src=${perros} width=400></img>
            `
        console.log(perros)
    })

}

getData();