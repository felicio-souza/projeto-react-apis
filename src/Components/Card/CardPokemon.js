import { useEffect, useState} from "react"
import axios from "axios"
import { TipoPokemon, TiposContainer, CardContainer, IdPokemon, NomedoPokemon, Pokemon, Pokebola, CatchButton } from "./styles"
import { tipoDePokemon, TipoDePokemon } from "../../Serves/RetorneTipoDePokemon"
import pokebola from "../../assets/pokeball.png"
import { GlobalContext } from '../../Context/GlobalContext'
import React, { useContext } from 'react'
import { corDoCard, CorDoCard } from '../../Serves/RetorneCorDoCard'






const CardPokemon = (props) => {

   
  const context = useContext(GlobalContext)

  const {capituraPokemon} = context

  const {pokemonUrl} = props
 

 
  const [pokemon, setPokemon] = useState([])
  const [types, setTypes] = useState([])

  useEffect(() => {
    buscarPokemon();
  }, []);

  const buscarPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
      setTypes(response.data.types[0].type.name)

    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  return (
    <CardContainer color={types && corDoCard(types)}>
      <IdPokemon> #{pokemon.id}</IdPokemon>
      <NomedoPokemon> {pokemon.name}</NomedoPokemon>
      <TiposContainer>
        {pokemon && pokemon.types?.map((type, index) => {
          console.log(corDoCard())
                return <TipoPokemon  key={index} src={tipoDePokemon(type.type.name)} alt='' />
              
            })}
           

        </TiposContainer>
          
      <Pokemon
        src={pokemon.sprites?.other?.["official-artwork"]?.["front_default"]}
      />
      <CatchButton onClick={()=>capituraPokemon(pokemon)}>Caputar</CatchButton>
      {/* <Pokebola>
          <img src={pokebola} alt="Pokebola" />
    </Pokebola> */}
    </CardContainer>
  );
  
  
}

export default CardPokemon