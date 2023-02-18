import React, { useContext } from 'react'
import CardPokemon from '../../Components/Card/CardPokemon'
import Header from '../../Components/Header/Header'
import { GlobalContext } from '../../Context/GlobalContext'
import { HomeContainer } from './stlyes'


const HomePage = () => {
   
  const context = useContext(GlobalContext)

  const {listaDePokemon, pokedex, obterCores} = context

 


  // const filtroListaPokemon = ()=>
  // obterPokemon.filter((pokemonNaLista)=> !pokedex.find((pokemonNaPokedex)=> pokemonNaLista.name === pokemonNaPokedex.name))



  return (
    <div>
   <Header/>
   <HomeContainer>
    
        {listaDePokemon.map((pokemon) => (
          <CardPokemon
            key={pokemon.url}
            pokemonUrl={pokemon.url}
            // cor={CorDoCard(pokemon.type[0])}
           
          />
        ))}
   </HomeContainer>
      </div>
  )
}

export default HomePage