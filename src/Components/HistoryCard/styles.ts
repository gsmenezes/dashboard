import styled, {keyframes} from 'styled-components';

interface ITagProps {
    color: string;
}

const animate = keyframes `
0% {
    transform: translateX(-100px);
    opacity:0;
}
50%{
    opacity: .3;
}
100%{
    transform:translateX(0px);
    opacity: 1;
}
`;


export const Container = styled.li`
background-color: ${props => props.theme.colors.tertiary};
list-style: none;
border-radius: 5px;
margin: 10px 0;
padding: 12px 10px;
display: flex;
justify-content: space-between;
align-items:center;
cursor: pointer;
transition: all .3s;
position: relative;

animation: ${animate} .5s ease-in-out;

&:hover{
    opacity: .7;
    transform: translateX(10px);
}

> div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
    color: ${props => props.theme.colors.white};
}

> div span {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 2px;
}

> h3 {
    color: ${props => props.theme.colors.white};
}
`;

export const Tag = styled.div`
position: absolute;
width: 10px;
height: 60%;
background-color: ${props => props.color};
left: 0;
`;