import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.section`
    max-width: 1320px;
    padding: 80px 0px;
    margin: 0 auto;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 20px 0;
    };
`;

export const ContactWrapper = styled.div`
    box-shadow: 0px 0px 42px -28px #000;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding:  40px 12px;
    border-radius: 10px;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        display: grid;
        text-align: center;
        gap: 20px;
        padding: 20px 12px;
    };
`;

export const ContactTitle = styled.span`
    font-size: 32px;
    color: ${({ theme }) => theme.color.secondColor};
    font-weight: bold;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
    };
`;

export const ContactSvgWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 12px;
    cursor: pointer;
`;

export const SVGIcon = styled.img`
    max-width: 50px;
    width: 100%;
    transition: 0.3s;

    &:hover {
        transform: scale(1.1);
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        max-width: 40px;
    };
`;

export const SVGLink = styled.a`

`;

export const ContactItemWrapper = styled.div`
    
`;

export const Span = styled.span`
    font-size: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 32px;
    };
`;

export const Title = styled.h4`

`;

export const ContactLink = styled(Link)`
    max-width: 200px;
    margin: 0 auto;
    width: 100%;
`;

export const ContactButton = styled.button`
    padding: 16px;
    background: ${({ theme }) => theme.color.secondColor};
    color: white;
    width: 100%;
    border: none;
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
    text-decoration: none;
    font-weight: bold;
    transition: 0.5s;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    };

    &:hover{
        transform: scale(1.04);
        cursor: pointer;
        box-shadow: 0px 0px 23px -2px ${({ theme }) => theme.color.secondColor};
    }
`;

