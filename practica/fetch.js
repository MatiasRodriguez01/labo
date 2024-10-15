const link = "https://jsonplaceholder.typicode.com/users";

// fetch(link)
// .then(res => res.json())
// .then(data => console.log(data))

const hola = async() => {

    const res = await fetch(link)
    const data = await res.json()
    
    console.log(data)

}

hola();