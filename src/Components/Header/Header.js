import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToPokedex } from '../../Routes/Coordinator'
import { Cabecalho } from './styles'

const Header = () => {
    const navigate = useNavigate()
    const tela = useLocation
  return (
    <Cabecalho>
        <img className='logo'
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="PokéAPI"/>

        {tela? <button onClick={()=>goToPokedex(navigate)}>Pokedesk</button> :
         <button >Excluir</button> }
    </Cabecalho>
  )
}

export default Header