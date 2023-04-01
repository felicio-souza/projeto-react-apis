import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 15px;
  min-width: 400px;
  max-width: 440px;
  min-height: 210px; 
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  flex-direction:column;
  position: relative;
  margin: 12px;
  /* gap: 3px; */
  color: #ffffff;
`;

export const IdPokemon = styled.p`


width: 30px;
height: 19px;
left: 23px;
top: 25px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;

color: #FFFFFF;
`;

export const NomedoPokemon = styled.h1`


height: 39px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
color: #FFFFFF;
transform: translateY(-7px);
::first-letter {
  text-transform: uppercase;}
`;

export const TipoPokemon = styled.img`
  min-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
  
`;



export const TiposContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const Pokebola = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
`;

export const Pokemon = styled.img`
  width: 193px;
  height: 193px;
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 2;`


