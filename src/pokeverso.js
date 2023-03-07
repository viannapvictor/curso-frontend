import pokemons from './pokemons'

console.log(pokemons);

const filtered = pokemons.filter((pokemons) => {
  return pokemons.name === 'Pikachu'
});

toPrint = filtered.map( (pokemons) => {
  return pokemons.type1
});

pokemons.forEach( pokemon => {
  toPrint2 += pokemon.name + ' '
});

console.log(filtered);

document.getElementById('root').innerHTML = toPrint + toPrint2;
