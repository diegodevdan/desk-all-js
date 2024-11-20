

function getCharacters(api){
    let dataCharacter;
    const resp = fetch(api).then(res => {
        return res.json();
    }).then(data => {
        console.log(data)
        dataCharacter=data
    })
    .catch(err => {
        throw new Error('something were wrong')
    })

    return dataCharacter;
}

async function getCharacters2(api){

    try {
        const resp = await fetch(api);
        const data = await resp.json();
        // console.log(data)
        return data;
    } catch (e) {
        throw new Error(e)
    }
}

// console.log(getCharacters('https://rickandmortyapi.com/api/character'))
console.log(getCharacters2('https://rickandmortyapi.com/api/character'))