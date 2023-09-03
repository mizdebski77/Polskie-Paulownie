import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    align-items: center;
    max-width: 1320px;
    padding: 80px 0px;
    margin: 0 auto;
    gap: 40px;
    row-gap: 80px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        text-align: center;
        padding: 12px;
        grid-template-columns: 1fr;
        gap: 20px;
    };
`;

export const ServicesTextWrapper = styled.div`

`;

export const ContentWrapper = styled.div <{ reverse?: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        display: flex;
        flex-direction: column;

        ${({ reverse }) => reverse && css`
            flex-direction: column-reverse;
        `};
    };
`;

export const ServicesTitle = styled.h2`
    font-size: 36px;
    color: ${({ theme }) => theme.color.secondColor};
    text-align: center;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 28px;
    };
`;

export const ServicesText = styled.h3`
    font-size: 24px;
    margin: 10px;
    font-weight: normal;
    line-height: 1.2; 
    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 20px;
    };
`;

export const ServicesImage = styled.img`
    max-width: 320px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        max-width: 200px;
    };
`;