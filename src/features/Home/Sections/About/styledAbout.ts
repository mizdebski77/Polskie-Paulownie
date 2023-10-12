import styled, { css } from "styled-components";
import { slideBottom, slideLeft, slideRight } from "../../../../core/animations";

export const Wrapper = styled.section`
    display: grid;
    align-items: center;
    max-width: 1320px;
    padding: 80px 0px;
    margin: 0 auto;
    gap: 40px;
    row-gap: 80px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        grid-template-columns: 1fr;
        padding: 0;
        margin-top: 40px;
        text-align: center;
    };
`;

export const AboutTextWrapper = styled.div <{ reverse?: boolean }>`
    animation: ${slideLeft} 1s;

    ${({ reverse }) => reverse && css`
        animation: ${slideRight} 1s;
        
        @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
            animation: ${slideBottom} 1s;
        };
    `};

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        animation: ${slideBottom} 1s;
    };
`;

export const ContentWrapper = styled.div <{ reverse?: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        display: flex;
        flex-direction: column;
        gap: 20px;

        ${({ reverse }) => reverse && css`
            flex-direction: column-reverse;
        `};
    };
`;

export const AboutTitle = styled.h2`
    font-size: 36px;
    color: ${({ theme }) => theme.color.secondColor};
    text-align: center;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
    };
`;

export const AboutText = styled.h3`
    font-size: 24px;
    margin: 10px;
    font-weight: normal;
    line-height: 1.2; 

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    };
`;

export const AboutImage = styled.img<{ reverse?: boolean }>`
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
    animation: ${slideRight} 1s;
    border: 4px solid #0F7701;
    border-radius: 4px;
    box-shadow: 20px 20px 0px 0px #DDD;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        animation: ${slideBottom} 1s;
        max-width: 240px;
    };

    ${({ reverse }) => reverse && css`
        animation: ${slideLeft} 1s;

        @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        animation: ${slideBottom} 1s;
    };
    `};
`;