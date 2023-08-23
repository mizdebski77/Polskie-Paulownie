import React from 'react';
import { Wrapper, HeaderImage, HeaderTitleWrapper, HeaderLink, HeaderButton, HeaderTitle } from './styledHeader';

export const Header = () => {
    return (
        <Wrapper>
            <HeaderTitleWrapper>
                <HeaderTitle>Satysfakcja z uprawy Paulowni w polskich warunkach to nasze zadanie</HeaderTitle>
                <HeaderLink to="/Strona-Główna">
                    <HeaderButton>Czytaj więcej</HeaderButton>
                </HeaderLink>
            </HeaderTitleWrapper>
            <HeaderImage />
        </Wrapper>
    );
};
