import { css, styled } from "styled-components";
import ex from '../../common/Images/Example/ex1.jpg';

export const Wrapper = styled.div`
    min-height: 100vh;
    max-width: 1720px;
    margin: 0 auto;
    padding: 10px;
`;

export const Header = styled.header`
    width: 100%;
    height: 400px;
    background-image: url("${ex}");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 11px 13px 28px 0px rgba(0, 0, 0, 0.50);
`;

export const HeaderTitle = styled.h1`
    position: absolute;
    font-size: 100px;
    color: white;
`;

export const Content = styled.div`
    max-width: 1200px;
    margin: 64px auto;
`;


export const TextWrapper = styled.div`
    text-align: center;
    display: grid;
    gap: 40px;
`;

export const MainText = styled.article`
    font-size: 32px;
`;

export const Span = styled.span`
    font-size: 28px;
    color: ${({ theme }) => theme.color.secondColor};
    font-weight: bold;
`;

export const TileWrapper = styled.div`
    margin-top: 80px;
    display: grid;
    gap: 88px;
`;

export const Tile = styled.div <{left?: boolean}>`
    display: grid; 
    grid-template-columns: 2fr 1fr;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 13px 10px -10px rgba(0, 0, 0, 0.25);
    border: 2px solid ${({theme}) => theme.color.secondColor};
    padding: 20px;
    border-radius: 10px;

    ${({left}) => left && css`
        grid-template-columns: 1fr 2fr;
    `};
`;

export const TileTextWrapper = styled.div`

`;

export const TileTitle = styled.h2`
    font-size: 32px;
    color: ${({ theme }) => theme.color.secondColor};
    text-align: center;
`;

export const TileText = styled.article`
    font-size: 24px;
`;

export const Image = styled.img`
    width: 240px;
    margin: 0 auto;
`;