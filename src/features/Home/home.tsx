import React from 'react';
import { Header, HeaderButton, HeaderImage, HeaderLink, HeaderTitle, HeaderTitleWrapper, Wrapper } from './styledHome';
import { Link } from 'react-router-dom';
import ex1 from '../../common/Images/Example/ex1.jpg'
import ex2 from '../../common/Images/Example/ex2.jpg'

export const Home = () => {


    return (
        <Wrapper>
            <Header>
                <HeaderTitleWrapper>
                    <HeaderTitle>Satysfakcja z uprawy Paulowni w polskich warunkach to nasze zadanie</HeaderTitle>
                    <HeaderLink to="/Strona-Główna">
                        <HeaderButton>Czytaj więcej</HeaderButton>
                    </HeaderLink>
                </HeaderTitleWrapper>

                    <HeaderImage  />
            </Header>
        </Wrapper>
    );
};

