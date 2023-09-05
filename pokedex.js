const fetchPokemon = require('./api');

class Pokedex {
    constructor() {
        this.pokemon = [];
    }

    all() {
        return this.pokemon;
    }

    async catch(pokemonName) {
        const response = await fetchPokemon(pokemonName);
        this.pokemon.push(response);
        return;
    }
}

module.exports = Pokedex;