import { styled } from "styled-components";
import ex from '../../common/Images/Example/header1.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { opacitySlide, slideBottom } from "../../core/animations";

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

export const GalleryWrapper = styled.div`
    column-count: 4;
    max-width: 1500px;
    margin: 0 auto;
    padding: 40px;
    animation: ${opacitySlide} 1s;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      column-count: 2;
      padding: 20px;
  };
`;

export const Pics = styled.div`
  border-radius: 10px;
  border: 1px solid white;
  box-shadow: 0 0 10px rgb(148, 152, 158);
  overflow: hidden;
  `;

export const Image = styled.img`
  width: 100%;
  cursor: pointer;
  transition: 0.5s linear;
  transition-timing-function:ease-in-out;
  transform: scale(1.04);

  &:hover {
    zoom: normal;
    transform: scale(1.1);
    opacity: 70%;
  }
    
`;

export const FullScreenWrapper = styled.div`
    display: block;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    padding: 40px;
`;

export const CustomSwiper = styled(Swiper)`
    width: 100%;
    height: 100%;

    .swiper-button-prev {
        color: ${({ theme }) => theme.color.secondColor};
    };

    .swiper-button-next {
        color: ${({ theme }) => theme.color.secondColor};
    };
`;

export const CustomSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
`;

export const FullScreenImage = styled.img`
    max-height: 100%;
    max-width: 100%;
    user-select: none;
`;

export const CloseButton = styled.button`
  position: fixed;
  z-index: 1;
  top: 20px;
  color: ${({ theme }) => theme.color.mainColor};
  transition: 0.3s;
  cursor: pointer;
  right: 80px;
  background: transparent;
  border: none;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    right: 10px;
  };
  &:hover {
    transform: scale(1.2);

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        transform: none;
      };
  }
`;