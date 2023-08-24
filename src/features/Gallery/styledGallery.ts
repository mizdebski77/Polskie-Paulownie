import { styled } from "styled-components";
import ex from '../../common/Images/Example/ex2.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
    min-height: 100vh;
    max-width: 1720px;
    margin: 0 auto;
    padding: 10px;
`;

export const Header = styled.header`
    width: 100%;
    height: 400px;
    background-image: url("${ex}");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 11px 13px 28px 0px rgba(0, 0, 0, 0.50);
`;

export const HeaderTitle = styled.h1`
    position: absolute;
    font-size: 100px;
    color: white;
`;

export const GalleryWrapper = styled.div`
    column-count: 4;
    max-width: 1500px;
    margin: 0 auto;
    padding: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      column-count: 2;
      padding: 20px;
  };
`;

export const Pics = styled.div`
  overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    cursor: pointer;
    transition: 0.3s linear;

    :hover {
        transform: scale(1.04);

      @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        transform: none;
      };
    }
`;

export const FullScreenWrapper = styled.section <{ fullScreenPhoto: boolean }>`
    display: ${({ fullScreenPhoto }) => (fullScreenPhoto ? 'block' : 'none')};
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    padding: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 12px;
    };
`;

export const CloseButton = styled.button`
  position: fixed;
  z-index: 1;
  top: 20px;
  color: white;
  transition: 0.3s;
  cursor: pointer;
  right: 80px;
  background: transparent;
  border: none;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    right: 10px;
  };
  :hover {
    transform: scale(1.2);

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        transform: none;
      };
  }
`;

export const ImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
`;

export const FullScreenImage = styled(motion.img)`
    max-height: 100%;
    max-width: 100%;
    user-select: none;
`;

export const CustomSwiper = styled(Swiper) <{ fullScreenPhoto: boolean }>`
    width: 100%;
    height: 100%;
`;

export const CustomSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
`;