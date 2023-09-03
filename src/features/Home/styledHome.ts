import { css, styled } from "styled-components";

export const Wrapper = styled.div`
    min-height: 100vh;
    max-width: 1720px;
    margin: 0 auto;
    padding: 10px;
`;

export const Title = styled.header`
    font-size: 48px;
    margin-top: 40px;
    font-weight: 600 ;
    text-align: center;
    color: ${({ theme }) => theme.color.secondColor};

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 32px;
    };  
`;

export const AnimatedElementWrapper = styled.div <{ left?: boolean, bottom?: boolean, gallery?: boolean }>`
    margin: 0 auto;
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

    ${({ left }) => left && css`
        margin: 0 auto;
        opacity: 0;
        transform: translateX(-30%);
        transition: opacity 1s, transform 1s;

        &.visible {
            opacity: 1;
            transform: translateY(0);
        };
    `};

    ${({ bottom }) => bottom && css`
        margin: 0 auto;
        opacity: 0;
        transform: translateY(20%);
        transition: opacity 1s, transform 1s;

        &.visible {
            opacity: 1;
            transform: translateY(0);
        };
    `};

    ${({ gallery }) => gallery && css`
        margin: 0 auto;
        opacity: 0;
        transform: translateY(10%);
        transition: opacity 1s, transform 1s;

        &.visible {
            opacity: 1;
            transform: translateY(0);
        };

        @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        transform: translateY(2%);
    };
    `};
`;