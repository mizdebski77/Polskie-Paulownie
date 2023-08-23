import React from 'react';
import {  Title, Wrapper } from './styledHome';
import { Header } from './Sections/Header/header';
import { About } from './Sections/About/about';
import { Services } from './Sections/Services/services';

export const Home = () => {

    return (
        <Wrapper>
            <Header />
            <About />
            <Title>Nasza oferta obejmuje:</Title>
            <Services />
            
        </Wrapper>
    );
};

