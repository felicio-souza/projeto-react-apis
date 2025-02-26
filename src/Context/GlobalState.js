import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import {BASE_URL} from "../Serves/url";


const GlobalState = (props)=>{

    
   
    const [pokedex, setPokedex] = useState([])
    const [listaDePokemon, setlistaDePokemon] = useState([])
    
    
    
   
    
//     useEffect(()=>{
//         obterPokemons()
//         }, [])

//     const obterPokemons = async()=>{

//     try{        
//         const response = await axios.get(`${BASE_URL}pokemon`
//         )
//         const informacoesPokemon = await Promise.all(
//         response.data.results.map((pokemon)=>{
//             return axios.get(`${BASE_URL}pokemon/${pokemon.name}`)
//         }))
//         setlistaDePokemon(informacoesPokemon)
     
          
        
//     }catch(err){
//         console.log("Erro ao buscar lista de pokemons")
//         console.log(err.response)

//     }
    
// }

useEffect(() => {
    obterPokemons();
}, []);

const obterPokemons = async () => {
    try {
        const response = await axios.get(`${BASE_URL}pokemon`);
        setlistaDePokemon(response.data.results);
    } catch (error) {
        console.log("Erro ao buscar lista de pokemons");
        console.log(error.response);
    }
};
   
//Função para capiturar os pokemons para pokedex

    const capituraPokemon = (addPokemon)=>{
        const novaPokedex = [...pokedex
        ]
        const temPokemon = novaPokedex.find((pokemonJanaPokedex)=> pokemonJanaPokedex.name === addPokemon.name
        );
        if (!temPokemon) {
            const newPokemon = {...addPokemon}  
            novaPokedex.push(newPokemon)          ;
        }
        setPokedex(novaPokedex)
    }


// const capituraPokemon = ()=>{
//    return console.log("aqui")
// }
       
    const context = {

        pokedex,
        listaDePokemon,
        setlistaDePokemon,
        setPokedex,
        obterPokemons,
        capituraPokemon,
       


    }

   
    return(
             
        <GlobalContext.Provider value={context}>
            {props.children}

        </GlobalContext.Provider>
    )
}
export default GlobalState