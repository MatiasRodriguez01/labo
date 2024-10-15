const apikey = `c61e0400e304a834d4159274cfc06146`;

const getData = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${3844421}&appid=${apikey}`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

getData();