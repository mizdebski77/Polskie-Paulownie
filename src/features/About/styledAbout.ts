import { styled } from "styled-components";
import ex from '../../common/Images/Example/ex1.jpg';
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
`;

export const HeaderTitle = styled.h1`
    position: absolute;
    font-size: 100px;
    color: white;
    animation: ${slideBottom} 1s;
`;

export const Content = styled.section`
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 80px;
    gap: 80px;
    align-items: center;
`;

export const TextWrapper = styled.div`
    padding: 20px;
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 48px;
    color: ${({ theme }) => theme.color.secondColor};
    margin: 10px;
    animation: ${slideRight} 1s;
`;

export const AboutText = styled.article`
    line-height: 1.2; 
    font-size: 24px;
    animation: ${slideBottom} 1s;
`;

export const Image = styled.img`
    width: 500px;
    height: 500px;
    border-radius: 50%;
    border: 6px solid #0F7701;
    box-shadow: 20px 20px 0px 0px #DDD;
    animation: ${slideLeft} 1s;
`;

