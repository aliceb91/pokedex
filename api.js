const fetchPokemon = (pokemonName) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((data) => {
            typeArr = data.types.map((type) => type.type.name)
            return {
                name: data.name,
                id: data.id,
                height: data.height,
                weight: data.weight,
                types: typeArr
            }
        });
}

module.exports = fetchPokemon;