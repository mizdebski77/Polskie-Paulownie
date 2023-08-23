import { styled } from "styled-components";

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

export const AboutTextWrapper = styled.div`

`;

export const AboutTitle = styled.h2`
    font-size: 36px;
    color: ${({theme}) => theme.color.secondColor};
    text-align: center;
    margin: 0;
`;

export const AboutText = styled.h3`
    font-size: 24px;
    margin: 10px;
    font-weight: normal;
    line-height: 1.2; 
`;

export const AboutImage = styled.img`

`;