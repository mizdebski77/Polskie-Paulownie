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
        padding: 20px 0 0 0;
        grid-template-columns: 1fr;
        gap: 32px;
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
        gap: 20px;

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
        font-size: 24px;
    };
`;

export const ServicesText = styled.h3`
    font-size: 24px;
    margin: 10px;
    font-weight: normal;
    line-height: 1.2; 
    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    };
`;

export const ServicesImage = styled.img<{ tree?: boolean }>`
    max-width: 400px;
    margin: 0 auto;
    border: 4px solid #0F7701;
    border-radius: 4px;
    box-shadow: 20px 20px 0px 0px #DDD;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        max-width: 240px;
    };

    ${({ tree }) => tree && css`
        max-width: 500px;
        @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        max-width: 300px;
    };
    `};
`;