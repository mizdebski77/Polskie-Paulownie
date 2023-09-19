import React from 'react';
import { Title, Wrapper } from './styledHome';
import { Header } from './Sections/Header/header';
import { About } from './Sections/About/about';
import { Services } from './Sections/Services/services';
import { Gallery } from './Sections/Gallery/gallery';
import { Contact } from './Sections/Contact/contact';
import AnimatedElement from './Sections/AnimatedElements';

export const Home = () => {

    return (
        <Wrapper>
            {/* <Header />
            <About />
            <AnimatedElement bottom>
                <Title>Nasza oferta obejmuje:</Title>
            </AnimatedElement>
            <Services />
            <AnimatedElement bottom>
                <Title>Galeria zdjęć:</Title>
            </AnimatedElement>
            <Gallery />
            <Contact /> */}
        </Wrapper>
    );
};

