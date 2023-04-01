import styled from "styled-components";


export const Cabecalho = styled.header`


 display: flex;
  height: 18vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: 50%;

.logo{
position: absolute;
width: 307px;
height: 113px;
left: 566px;
top: 21px;
background: url(image.png);

}


`
export const BotaoPodkedex = styled.button`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;

position: absolute;
width: 287px;
height: 74px;
left: 1112px;
top: 41px;

background: #33A4F5;
border-radius: 8px;
`

export const TodosPokemon = styled.button`

position: absolute;
width: 404px;
height: 72px;
left: 40px;
top: 220px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;

`;
