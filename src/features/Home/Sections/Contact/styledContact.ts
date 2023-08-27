import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { slideBottom } from "../../../../core/animations";

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
    animation: ${slideBottom} 1s;
    border-radius: 10px;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        display: grid;
        text-align: center;
        gap: 12px;
        padding: 20px 12px;
    };
`;

export const ContactTitle = styled.span`
    font-size: 32px;
    color: ${({theme}) => theme.color.secondColor};
    font-weight: bold;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
    };
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
