import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { buttonsAnimation, opacitySlide } from "../../../../core/animations";

export const Wrapper = styled.section`
    display: grid;
    align-items: center;
    max-width: 1320px;
    padding: 40px 0px;
    margin: 0 auto;
    gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 20px;
        gap: 20px;
    };
`;

export const ImagesWrapper = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    animation: ${opacitySlide} 1s;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        grid-template-columns: 1fr;
        margin: 0 auto;
    };
`;  

export const GalleryImage = styled.img`
    width: 100%;
`;

export const GalleryLink = styled(Link)`
    max-width: 360px;
    margin: 0 auto;
    width: 100%;
    animation: ${buttonsAnimation} 1s;
`;

export const Button = styled.button`
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

    &:hover{
        transform: scale(1.02);
        cursor: pointer;
        box-shadow: 0px 0px 20px -2px ${({ theme }) => theme.color.secondColor};
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    };
`;