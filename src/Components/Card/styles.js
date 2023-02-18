import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 16px;
  width: 440px;
  height: 210px;
  /* background-color: ${(props) => props.cor}; */
  background: #729F92;
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 50px;
  color: #ffffff;
`;

export const IdPokemon = styled.p`

position: absolute;
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

position: absolute;
width: 159px;
height: 39px;
left: 23px;
top: 40px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;



color: #FFFFFF;
`;

export const TipoPokemon = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;

`;

export const TiposContainer = styled.div`
  margin-bottom: 52px;
`;
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
position: absolute;
width: 193px;
height: 193px;
left: 274px;
top: 294px;

z-index:2;
`

