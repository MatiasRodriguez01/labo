// const data = [{
//     title: 'Aprendiendo javacrispt',
//     year: '2020',
//     isbn: '979-871476774',
//     author: 'Lorena'
// },{
//     title: 'React js, Practico',
//     year: '2022',
//     isbn: 'TBD',
//     author: 'carlos azaustre'
// },{
//     title: 'Clean Javascript',
//     year: '2022',
//     isbn: 'T979-264323456',
//     author: 'Miguel A. gomex'
// }]

const data = [];

// const data = () => {
//     console.log(data);
// }


// const data = () => {
//     setTimeout(() => {
//         resolve(data);
//     }, 1500);
// }

const getDate = () => {
    return new Promise((resolve, reject) => {
        if (data.length === 0){
            reject(new Error("no existen datos"));
        }
        setTimeout(() => {
        resolve(data);
        }, 1500);
    });
}

async function fetchingData() {
    try{
        const datos = await getDate();
        console.log(datos);
    } catch(err){
        console.log(err.message)
    }

    
}

fetchingData();