import styled from 'styled-components';

interface ILegendProps{
    color: string;
}

export const Container = styled.div `
width: 48%;
min-height: 260px;
margin: 10px 0;
background-color: ${props => props.theme.colors.tertiary};
color: ${props => props.theme.colors.white};
border-radius: 7px;
display: flex;

@media(max-width: 1200px){
   flex-direction: flex;
   flex-direction: column;
   width: 100%;
   height: auto;
}
`;

export const SideLeft = styled.aside `
flex: 1;
padding: 30px 20px;

>h2{
    padding-left: 16px;
    margin-bottom: 18px;
}
`;

export const LegendContainer = styled.ul `
list-style: none;
height: 175px;
padding-right: 15px;
overflow-y: scroll;

::-webkit-scrollbar{
    width: 10px;
}
::-webkit-scrollbar-thumb{
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 10px;
}
::-webkit-scrollbar-track{
    background-color: ${props => props.theme.colors.tertiary};
}

@media(max-width: 1200px){
   flex-direction: flex;
   height: auto;
}

`;

export const Legend = styled.li<ILegendProps> `
display: flex;
align-items: center;
margin-bottom: 7px;
font-weight: 500;
padding-left: 16px;


>div{
    background-color: ${props => props.color};
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
}

>span {
    margin-left: 5px;
}

@media(max-width: 1200px){

>div{
    font-size:10px;
    line-height: 30px;
    width: 30px;
    height: 30px;
}
}
`;

export const SideRight = styled.main `
min-height: 150px;
flex: 1;
display: flex;
justify-content: center;
padding-top: 35px;
padding-right: 16px;
`;
