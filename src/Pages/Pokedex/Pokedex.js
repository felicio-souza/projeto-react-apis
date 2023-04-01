import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import { Box } from '@chakra-ui/react'
import Header from '../../Components/Header/Header'
import { HomeContainer } from '../Home/stlyes'
import CardPokemon from '../../Components/Card/CardPokemon'


const Pokedex = () => {

  const context = useContext(GlobalContext)

  const {pokedex, pokemon} = context

  
console.log(pokedex)

  
  return (
    <div>
    <Header/>
    <Box bg="#5E5E5E">
    <HomeContainer >
     
         {pokedex
                .map((pokemon) => (
           <CardPokemon
             key={pokemon.url}
             pokemon={pokemon}
           
             
            
           />
         ))}
    </HomeContainer>
    </Box>
       </div>
   
  )
  
}

export default Pokedex