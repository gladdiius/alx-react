import { Map } from 'immutable';

// Create an Immutable Map with initial values
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Update values in the original map to create a new map
export const map2 = map.withMutations(m => {
  m.set(2, 'Benjamin').set(4, 'Oliver');
});
