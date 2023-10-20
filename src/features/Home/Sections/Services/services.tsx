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
                        <ServicesText>Oferujemy sadzonki Paulowni w różnych ilościach, idealne dla tych, którzy chcą wesprzeć polską produkcję drzew. Dostępne odmiany to Shang Tong i Tomentosa, zapewniające szybki wzrost i produkcję tlenu. To doskonały wybór dla tych, którzy dbają o środowisko i chcą dodać zieleni do swojego otoczenia. Nasze sadzonki są wysiewane w polskich warunkach, z nasion pochodzących z drzewa rosnącego w Polsce, co gwarantuje, że są one odpowiednio przystosowane do lokalnego klimatu i terenu. Dzięki temu możemy zapewnić, że nasze drzewa rosną silnie i zdrowo, przyczyniając się do zielonej przestrzeni w całej Polsce.
                        </ServicesText>
                    </ServicesTextWrapper>
                </AnimatedElement>

            </ContentWrapper>

            <ContentWrapper reverse>
                <AnimatedElement left >
                    <ServicesTextWrapper>
                        <ServicesTitle>Drzewa</ServicesTitle>
                        <ServicesText>Nasze drzewa Paulowni, oferowane w zakresie wysokości od 1,5 m do 4,5 m, stanowią doskonałą inwestycję w przyszłość. Odmiana Shang Tong, charakteryzująca się łatwością w uprawie i naturalnym pięknem, pozwala dodać zieleni do otoczenia, jednocześnie przyczyniając się do poprawy jakości powietrza i ochrony środowiska. Warto podkreślić, że nasze drzewa przechodzą proces sadzenia w postaci młodych roślin, które następnie przez dwa lata rosną w polskim klimacie.
                            Dzięki temu zapewniamy, że roślina jest dobrze ukorzeniona, co powoduje prawidłowy wzrost w nowej lokalizacji.</ServicesText>
                    </ServicesTextWrapper>
                </AnimatedElement>

                <AnimatedElement>
                    <ServicesImage tree src={scndImg} />
                </AnimatedElement>
            </ContentWrapper>
        </Wrapper>
    );
};

