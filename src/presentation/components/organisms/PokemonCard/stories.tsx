import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import PokemonCard from '.';
import DefaultDecorator from '@/../storybook/defaultDecorator';
import ReactNavigationDecorator from '@/../storybook/navigatorDecorator';
import { PokemonModel } from '@/domain/models';
import { number, select, text } from '@storybook/addon-knobs';

const pokemonModel: PokemonModel = {
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


const CardWrapper = (story: any) => {
    return (
        <View style={{ height: 150, width: 200 }}>
            {story()}
        </View>
    );
};

storiesOf('PokemonCard', module)
    .addDecorator(CardWrapper)
    .addDecorator(DefaultDecorator)
    .addDecorator(ReactNavigationDecorator)
    .add('default', () => <PokemonCard pokemon={{
        ...pokemonModel,
        name: text('name', 'bulbasaur'),
        colorNameSpecie: select('colorNameSpecie', {
            Red: 'red',
            Green: 'green',
            Yellow: 'yellow',
        },'yellow'),
        id: number('id',1),
    }} />);
