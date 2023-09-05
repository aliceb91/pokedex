const Pokedex = require('./pokedex')

const pokedex = new Pokedex();

pokedex.catch('pikachu')
    .then(() => pokedex.catch('jigglypuff'))
    .then(() => console.log(pokedex.all()));
