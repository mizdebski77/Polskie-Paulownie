import { styled } from "styled-components";
import ex from '../../common/Images/Example/header1.jpg';
import { opacitySlide, slideBottom, slideLeft, slideRight } from "../../core/animations";

export const Wrapper = styled.div`
    min-height: 100vh;
    max-width: 1720px;
    margin: 0 auto;
    padding: 10px;
`;

export const Header = styled.header`
    width: 100%;
    height: 240px;
    background-image: url("${ex}");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 11px 13px 28px 0px rgba(0, 0, 0, 0.50);
    animation: ${opacitySlide} 1s;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        height: 120px;
    };
`;

export const HeaderTitle = styled.h1`
    position: absolute;
    font-size: 100px;
    color: white;
    animation: ${slideBottom} 1s;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 64px;
    };
`;

export const Content = styled.section`
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 80px;
    gap: 80px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        display: flex;
        flex-direction: column-reverse;
        padding: 12px;
    };
`;

export const TextWrapper = styled.div`
    padding: 20px;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 0px;
    };

`;

export const Title = styled.h2`
    text-align: center;
    font-size: 48px;
    color: ${({ theme }) => theme.color.secondColor};
    margin: 10px;
    animation: ${slideRight} 1s;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 28px;
    };
`;

export const AboutText = styled.article`
    line-height: 1.2; 
    font-size: 24px;
    animation: ${slideBottom} 1s;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 20px;
    };
`;

export const Image = styled.img`
    max-width: 500px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    border: 6px solid #0F7701;
    box-shadow: 20px 20px 0px 0px #DDD;
    animation: ${slideLeft} 1s;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        max-width: 20px;
    };
`;

