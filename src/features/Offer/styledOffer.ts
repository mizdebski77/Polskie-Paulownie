import styled, { css } from "styled-components";
import background from './background.jpg';
import { opacitySlide, slideBottom, slideLeft, slideRight } from "../../core/animations";

export const Wrapper = styled.div`
    min-height: 100vh;
    max-width: 1720px;
    margin: 0 auto;
    padding: 10px;
`;

export const Header = styled.header`
    width: 100%;
    height: 240px;
    background-image: url("${background}");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 11px 13px 28px 0px rgba(0, 0, 0, 0.50);
    animation: ${opacitySlide} 1s;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        height: 160px;
    };
`;

export const HeaderTitle = styled.h1`
    position: absolute;
    font-size: 100px;
    color: white;
    animation: ${slideBottom} 1s;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        font-size: 80px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 36px;
    };
`;

export const Content = styled.div`
    max-width: 1200px;
    margin: 64px auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        margin: 32px auto;
    };
`;

export const TextWrapper = styled.div`
    text-align: center;
    display: grid;
    gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        gap: 20px;
    };
`;

export const MainText = styled.article`
    font-size: 32px;
    animation: ${slideLeft} 1s;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 20px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        animation: ${slideBottom} 1s;
    };
`;

export const Span = styled.span`
    font-size: 28px;
    color: ${({ theme }) => theme.color.secondColor};
    font-weight: bold;
    animation: ${slideRight} 1s;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        animation: ${slideBottom} 1s;
    };
`;

export const TileWrapper = styled.div`
    margin-top: 80px;
    display: grid;
    gap: 88px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        margin-top: 32px;
        gap: 40px;
    };
`;

export const Tile = styled.div <{ left?: boolean }>`
    display: grid; 
    grid-template-columns: 2fr 1fr;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 13px 10px -10px rgba(0, 0, 0, 0.25);
    border: 2px solid ${({ theme }) => theme.color.secondColor};
    padding: 20px;
    border-radius: 10px;
    animation: ${slideLeft} 1s;

    ${({ left }) => left && css`
        grid-template-columns: 1fr 2fr;
        animation: ${slideRight} 1s;

        @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
            display: flex;
            flex-direction: column-reverse;
        };

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        animation: ${slideBottom} 1s;
    };
    `};

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        grid-template-columns:1fr;
        padding:12px;
        gap:20px;
    };
`;

export const TileTextWrapper = styled.div`

`;

export const TileTitle = styled.h2`
    font-size: 32px;
    color: ${({ theme }) => theme.color.secondColor};
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
        margin: 10px;
    };
`;

export const TileText = styled.article`
    font-size: 24px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
        text-align: center;
    };
`;

export const Image = styled.img`
    width: 240px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        width: 120px;
    };
`;

export const AnimatedTileWrapper = styled.div`
    opacity: 0;
    transform: translateX(30%);
    transition: opacity 1s, transform 1s;
    &.visible {
        opacity: 1;
        transform: translateY(0);
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        transform: translateY(10%);
    };
`;

export const Title = styled.h3`
        text-align: center;
        font-size: 52px;
        margin: 10px 0px 40px;
        color: ${({ theme }) => theme.color.secondColor};
`;

export const TablesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        grid-template-columns: 1fr;
    };
`;

export const TableWrapper = styled.div`
    display: grid;
    gap: 20px;
`;

export const Caption = styled.span`
    color: ${({ theme }) => theme.color.secondColor};
    font-size: 32px;
    text-align: center;
    font-weight: normal;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
    };
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  caption-side: bottom;
  font-size: 24px;
  border: 1px solid ${({ theme }) => theme.color.secondColor};

  @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        font-size: 16px;
        padding: 8px;
    };
`;

export const THead = styled.thead`
  background-color: #ccc;
`;

export const TBody = styled.tbody`
    
`;

export const TH = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #4f4f4f;
  border-right: 1px solid #4f4f4f; 

`;

export const TD = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #4f4f4f;
  border-right: 1px solid #4f4f4f; 

`;