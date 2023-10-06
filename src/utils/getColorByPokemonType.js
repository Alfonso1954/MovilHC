import { POKEMON_TYPES_COLORS } from "./constans.js";

const getColorByPokemonType = (type) =>
  POKEMON_TYPES_COLORS[type - tolowerCase()];

export default getColorByPokemonType;
