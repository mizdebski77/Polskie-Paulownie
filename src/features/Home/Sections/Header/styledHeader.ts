import { Link } from "react-router-dom";
import { styled } from "styled-components";
import ex1 from '../../../../common/Images/Example/ex1.jpg'
import Slider from "react-slick";
import { buttonsAnimation, opacitySlide, slideBottom, slideRight } from "../../../../core/animations";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 40px;
    gap: 40px;
    box-shadow: 0px 20px 48px -26px rgba(12, 106, 0, 0.30);
    animation: ${opacitySlide} 1s;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        grid-template-columns: 1fr;
        padding: 12px;
    }
`;

export const HeaderTitleWrapper = styled.div`
    display: grid;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        gap: 12px;
    }
`;

export const HeaderTitle = styled.h1`
    font-size: 54px;
    text-align: center;
    color: #4D534D;
    animation: ${slideBottom} 1s;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        font-size: 44px;
        margin: 10px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 36px;
    };
`;

export const HeaderLink = styled(Link)`
    max-width: 200px;
    margin: 0 auto;
    width: 100%;
    animation: ${buttonsAnimation} 1s;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        max-width: 160px;
    }
`;

export const HeaderButton = styled.button`
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
    }

    &:hover{
        transform: scale(1.04);
        cursor: pointer;
        box-shadow: 0px 0px 23px -2px ${({ theme }) => theme.color.secondColor};
    }
`;

export const HeaderPhotos = styled(Slider)`

`;

export const HeaderImage = styled.div`
    max-width: 860px ;
    height: 400px;
    box-shadow: 0px 0px 54px 64px #EFEFEF inset;
    background-image: url("${ex1}") ;
    background-size: cover;
    background-position: center;
    animation: ${slideRight} 1s;
`;