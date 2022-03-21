import { getIdFromUrl } from '@/main/utils';

describe('getIdFromUrl util function', () => {
  it('should return the correct id number', () => {
    expect(getIdFromUrl('https://pokeapi.co/api/v2/pokemon-species/132/')).toBe('132');
  });
});
