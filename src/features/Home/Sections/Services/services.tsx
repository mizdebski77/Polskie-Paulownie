import React from 'react';
import { ContentWrapper, ServicesImage, ServicesText, ServicesTextWrapper, ServicesTitle, Wrapper } from './styledServices';
import firstImg from './3.jpg'
import scndImg from './4.jpg'
import AnimatedElement from '../AnimatedElements';

export const Services = () => {
    return (
        <Wrapper>
            <ContentWrapper>
                <AnimatedElement left >
                    <ServicesImage src={firstImg} />
                </AnimatedElement>

                <AnimatedElement>
                    <ServicesTextWrapper>
                        <ServicesTitle>Sadzonki</ServicesTitle>
                        <ServicesText>Oferujemy sadzonki Paulowni w różnych ilościach, idealne dla tych, którzy chcą wesprzeć polską produkcję drzew. Dostępne odmiany to Shang Tong i Tomentosa, zapewniające szybki wzrost i produkcję tlenu. To doskonały wybór dla tych, którzy dbają o środowisko i chcą dodać zieleni do swojego otoczenia.</ServicesText>
                    </ServicesTextWrapper>
                </AnimatedElement>

            </ContentWrapper>

            <ContentWrapper reverse>
                <AnimatedElement left >
                    <ServicesTextWrapper>
                        <ServicesTitle>Drzewa</ServicesTitle>
                        <ServicesText>Nasze drzewa Paulowni, dostępne w różnych wysokościach od 1,5 m do 4,5 m, to doskonała inwestycja w przyszłość. Odmiana Shang Tong jest łatwa w uprawie i zapewnia naturalne piękno. Dzięki nim możesz dodać zieleni do swojego otoczenia, a jednocześnie przyczynić się do poprawy jakości powietrza i ochrony środowiska.</ServicesText>
                    </ServicesTextWrapper>
                </AnimatedElement>

                <AnimatedElement>
                    <ServicesImage  tree src={scndImg} />
                </AnimatedElement>
            </ContentWrapper>
        </Wrapper>
    );
};

