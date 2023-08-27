import { styled } from "styled-components";
import { slideBottom, slideLeft, slideRight } from "../../../../core/animations";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    max-width: 1320px;
    padding: 80px 0px;
    margin: 0 auto;
    gap: 40px;
    row-gap: 80px;
`;

export const ServicesTextWrapper = styled.div`

`;

export const ServicesTitle = styled.h2`
    font-size: 36px;
    color: ${({theme}) => theme.color.secondColor};
    text-align: center;
    margin: 0;
    animation: ${slideRight} 1s;
`;

export const ServicesText = styled.h3`
    font-size: 24px;
    margin: 10px;
    font-weight: normal;
    line-height: 1.2; 
    animation: ${slideBottom} 1s;
`;

export const ServicesImage = styled.img`
    max-width: 320px;
    margin: 0 auto;
    animation: ${slideLeft} 1s;

`;