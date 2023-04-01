import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { goToHomePage, goToPokedex } from '../../Routes/Coordinator'
import { BotaoPodkedex, Cabecalho, TodosPokemon } from './styles'

const Header = () => {
    const navigate = useNavigate()
    const tela = useLocation()
    const params = useParams()

  const renderizarHeader = ()=>{

    switch(tela.pathname){

      case "/":
        return (
          <Cabecalho>
          <img className='logo'
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="PokéAPI"/>
  
          <BotaoPodkedex onClick={()=>goToPokedex(navigate)}>Pokedex</BotaoPodkedex> :
           
      </Cabecalho>
        );
        case "/pokedex":
          return(
            <Cabecalho>
            <img className='logo'
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="PokéAPI"/>
    
            <TodosPokemon onClick={()=>goToHomePage(navigate)}>Todos os pokemon</TodosPokemon> :
            
        </Cabecalho>
          )
    }
  }
  return (
    <Cabecalho>
        {renderizarHeader()}
    </Cabecalho>
  )
}

export default Header