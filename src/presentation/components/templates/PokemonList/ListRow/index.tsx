import {PokemonModel} from '@/domain/models';
import React from 'react';
import {Container, Separator} from './styles';
import {PokemonCard} from '@/presentation/components/organisms';

type Props = {
  pokemonItem: PokemonModel[];
};

const ListRow: React.FC<Props> = ({pokemonItem}: Props) => {
  return (
    <Container>
      <PokemonCard pokemon={pokemonItem[0]} />
      {pokemonItem.length > 1 && (
        <>
          <Separator />
          <PokemonCard pokemon={pokemonItem[1]} />
        </>
      )}
    </Container>
  );
};

export default ListRow;
