import React from 'react';
import {  Wrapper } from './styledHome';
import { Header } from '../Sections/Header/header';
import { About } from '../Sections/About/about';

export const Home = () => {

    return (
        <Wrapper>
            <Header />
            <About />
        </Wrapper>
    );
};

