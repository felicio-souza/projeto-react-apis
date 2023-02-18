import { useEffect, useState} from "react"
import axios from "axios"
import { TipoPokemon, TiposContainer, CardContainer, IdPokemon, NomedoPokemon, Pokemon, Pokebola } from "./styles"
import { TipoDePokemon } from "../../Serves/TipoDePokemon"
import pokebola from "../../assets/pokeball.png"




const CardPokemon = (props) => {

  const {pokemonUrl, cor} = props
 

 
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    buscarPokemon();
  }, []);

  const buscarPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  console.log(pokemon.types)
  return (
   <CardContainer cor = {cor}>
    <IdPokemon> #{pokemon.id}</IdPokemon>
    <NomedoPokemon> {pokemon.name}</NomedoPokemon>
    {/* <TipoPokemon>{TipoDePokemon(pokemon.types !== undefined && pokemon.types[0].type.name)}</TipoPokemon>
    <TipoPokemon>{TipoDePokemon(pokemon.types !== undefined && pokemon.types[1]?.type.name)}</TipoPokemon> */}
    <Pokemon src={pokemon.sprites?.other?.["official-artwork"]?.["front_default"]}/>
    {/* <Pokebola>
          <img src={pokebola} alt="Pokebola" />
    </Pokebola> */}
    
    
  </CardContainer>
    )
  
  
}

export default CardPokemon