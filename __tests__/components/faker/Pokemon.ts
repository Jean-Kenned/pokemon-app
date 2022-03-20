export const makePokemonFake = () => {
    return {
        id: 1,
        height: 40,
        weight: 100,
        name: 'bulbasaur',
        types: ['grass', 'poison'],
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        colorNameSpecie: 'green',
        mainDescription: 'A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.',
        stats: [
            { name: 'attack', baseStat: 56 },
            { name: 'defense', baseStat: 90 },
            { name: 'hp', baseStat: 100 },
            { name: 'special-attack', baseStat: 10 },
        ],
        mainPower: 'mist-ball',
    };
};
