const fetchPokemon = require('./api');

describe('fetchPokemon', () => {

    it('can fetch the data for Charizard', async () => {
        const charizard = {
            name: 'charizard',
            id: 6,
            height: 17,
            weight: 905,
            types: ['fire', 'flying']
        }
        const response  = await fetchPokemon('charizard');
        expect(response).toEqual(charizard);
    });
});
