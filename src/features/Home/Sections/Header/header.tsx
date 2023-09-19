import React from 'react';
import { Wrapper, HeaderImage, HeaderTitleWrapper, HeaderLink, HeaderButton, HeaderTitle, CustomSlider } from './styledHeader';
import ex1 from '../../../../common/Images/Example/header2.jpg.png';
import ex2 from '../../../../common/Images/Example/header1.jpg.png';
import ex3 from '../../../../common/Images/Example/header3.png';
import ex4 from '../../../../common/Images/Example/header5.png';
import ex5 from '../../../../common/Images/Example/header4.png';
import ex6 from '../../../../common/Images/Example/header6.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Header = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false

    };

    return (
        <Wrapper>
            <HeaderTitleWrapper>
                <HeaderTitle>Satysfakcja z uprawy Paulowni w polskich warunkach to nasze zadanie</HeaderTitle>
                <HeaderLink to="/O-nas">
                    <HeaderButton>Czytaj więcej</HeaderButton>
                </HeaderLink>
            </HeaderTitleWrapper>

            <CustomSlider {...settings}>
                <HeaderImage src={ex1} />
                <HeaderImage src={ex2} />
                <HeaderImage src={ex3} />
                <HeaderImage src={ex4} />
                <HeaderImage src={ex5} />
                <HeaderImage src={ex6} />
            </CustomSlider>


        </Wrapper>
    );
};
