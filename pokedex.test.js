const Pokedex = require('./pokedex');

describe('Pokedex', () => {

    describe('all', () => {

        it('returns an empty array when no pokemon have been added', () => {
            const pokedex = new Pokedex();
            expect(pokedex.all()).toEqual([]);
        });
    });

    describe('catch', () => {

        it('adds the pokemon object for Pikachu to the pokemon array', async () => {
            const pokedex = new Pokedex();
            const pikachu = {
                name: 'pikachu',
                id: 25,
                height: 4,
                weight: 60,
                types: ['electric']
            }
            await pokedex.catch('pikachu');
            expect(pokedex.all()).toEqual([pikachu]);
        });

        it('adds multiple pokemon objects to the pokemon array', async () => {
            const pokedex = new Pokedex();
            const pikachu = {
                name: 'pikachu',
                id: 25,
                height: 4,
                weight: 60,
                types: ['electric']
            }
            const jigglypuff = {
                name: 'jigglypuff',
                id: 39,
                height: 5,
                weight: 55,
                types: ['normal', 'fairy']
            }
            await pokedex.catch('pikachu').then(() => pokedex.catch('jigglypuff'));
            expect(pokedex.all()).toEqual([pikachu, jigglypuff]);
        });
    });
});