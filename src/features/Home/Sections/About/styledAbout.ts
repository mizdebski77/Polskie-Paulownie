import { css, styled } from "styled-components";
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
        padding: 12px;
        margin-top: 40px;
        text-align: center;
    };
`;

export const AboutTextWrapper = styled.div`

`;

export const ContentWrapper = styled.div <{ reverse?: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        display: flex;
        flex-direction: column;

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
    animation: ${slideLeft} 1s;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 28px;
    };
`;

export const AboutText = styled.h3`
    font-size: 24px;
    margin: 10px;
    font-weight: normal;
    line-height: 1.2; 
    animation: ${slideBottom} 1s;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 20px;
    };
`;

export const AboutImage = styled.img`
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
    animation: ${slideRight} 1s;
`;