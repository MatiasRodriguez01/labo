
const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        const listaPost = document.getElementById('postsList');

        const listaDe1A10 = data.slice(0,10);

        listaDe1A10.forEach(ele => {
            const li = document.createElement('li'); 
            li.textContent = ele.title; 
            listaPost.appendChild(li);
        });
    })
    .catch((err) => console.log(err));
}



getData();