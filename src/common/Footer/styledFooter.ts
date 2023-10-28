import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.footer`
    display: flex;
    width: 100%;
    align-items:center;
    justify-content: space-around;
    padding: 20px;
    min-height: 320px;
    background: ${({ theme }) => theme.color.secondColor};
    color: white;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        display: grid;
        gap: 56px;
        padding: 10px;
        justify-content: center;
        min-height: 480px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 40px 10px;
        min-height: 440px;
    };
`;

export const LogoLink = styled(Link)`
    display: flex;
    justify-content: center;
`;

export const Logo = styled.img`
    width: 280px;
    border-radius: 300px;
    background: white ;
    border: 8px solid white;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        width: 140px;
    };
`;

export const ContactWrapper = styled.div`
    display: grid;
    gap: 12px;
`;

export const FooterTitle = styled.span`
    font-size: 32px;
    text-align: center;
    font-weight: bold;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
    };
`;

export const ContactElement = styled.p`
    font-size: 20px;
    margin: 0px;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    };
`;

export const Hidden = styled.span`
    visibility: hidden;
`;

export const Socials = styled.div`
    display: grid;
    justify-content: center;
    gap: 16px;
`;

export const SVGLinks = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    padding: 0 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        margin: 0;
    };
`;

export const SVGLink = styled.a`
    transition: 1s;
    width: 32px;
    height: 32px;
    fill: white;
    transition: 0.3s;

    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }

    :active{
    }
`;

export const Image = styled.img`
    width: 48px;
    height: 48px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        width: 40px;
        height: 40px;
    };
`;