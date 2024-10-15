const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => {
        const lista = document.getElementById('lista');

        const titulos = data.slice(0,5);

        titulos.forEach(tit => {
            const li = document.createElement('li');
            li.textContent = tit.title + " (completado: " + tit.completed + ")";
            lista.appendChild(li);
        });
    })
}

getData();