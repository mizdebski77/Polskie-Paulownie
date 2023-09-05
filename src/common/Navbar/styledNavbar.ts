import styled, { css } from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const Wrapper = styled.nav <{ scrolled?: boolean }>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 54px;
    position: sticky;
    z-index: 10; 
    top:0;
    background: ${({ theme }) => theme.color.mainColor};
    transition: 0.3s;
    
    ${({ scrolled }) => scrolled && css`
    border-bottom: 2px solid ${({ theme }) => theme.color.secondColor};
  `};

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        padding: 12px 20px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 10px;
    };
`;

export const LogoLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.fontColor};
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 20px;
        gap: 10px;
    };
`;

export const Logo = styled.img`
    width: 68px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        width: 54px;
    };
`;

export const LinksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    margin: 0 ;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        gap: 20px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        display: none;
    };
  `;

const activeClassName = "active";

export const Links = styled(NavLink)`
    color: ${({ theme }) => theme.color.fontColor};
    text-decoration: none;
    font-size: 20px;
    text-align: center;
    transition: 0.5s;
    text-underline-offset: 6px;
    padding: 10px 12px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        font-size: 16px;
        padding: 12px;
        width: 70%;
        margin: 0 auto;
        border-radius: 0;
        color: ${({ theme }) => theme.color.mainColor};

    };

    &:hover {
        transform: translateY(-5px);
        color: ${({ theme }) => theme.color.secondColor};

        @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
            transform: none;
            text-decoration: none;
            color: ${({ theme }) => theme.color.mainColor};
        };
    };

    &.${activeClassName} {
        color: ${({ theme }) => theme.color.secondColor};
        text-decoration: underline;

        @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        color: white;
        };


        &:hover {
            transform: none;
        }
    }
`;

export const PhoneNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    cursor: pointer;

    @media (min-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        display: none;
    };
`;


export const PhoneNavbarWrapper = styled.div`
    background: rgba(15, 119, 1, 0.97);
    border-bottom: 1px solid ${({ theme }) => theme.color.secondColor};
    position: fixed;
    width: 100%;
    z-index: 1;
    padding: 0 0 20px 0;
    padding: 12px;
    min-height: 200px;

    @media (min-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        display: none;
    };
`;

export const PhoneLinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
