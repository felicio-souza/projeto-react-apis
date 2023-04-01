import React, { useContext } from 'react'
import CardPokemon from '../../Components/Card/CardPokemon'
import Header from '../../Components/Header/Header'
import { GlobalContext } from '../../Context/GlobalContext'
import { HomeContainer } from './stlyes'
import { Box } from '@chakra-ui/react'


const HomePage = () => {
   
  const context = useContext(GlobalContext)

  const {listaDePokemon, pokedex} = context

 


  



  return (
    <div>
   <Header/>
   <Box bg="#5E5E5E">
   <HomeContainer >
    
        {listaDePokemon.map((pokemon) => (
          <CardPokemon
            key={pokemon.url}
            pokemonUrl={pokemon.url}
            pokemon={pokemon}
                        
           
          />
        ))}
   </HomeContainer>
   </Box>
      </div>
  )
}

export default HomePage