import React from 'react';
import { AboutText, Content, Header, HeaderTitle, Image, NewLine, TextWrapper, Title, Wrapper } from './styledAbout';
import circleImage from './aboutImage.png';

export const About = () => {
    return (
        <Wrapper>
            <Header>
                <HeaderTitle>O nas</HeaderTitle>
            </Header>

            <Content>
                <Image src={circleImage} />

                <TextWrapper>
                    <Title>Polskie Paulownie</Title>
                    <AboutText>Nasza pasja do przyrody i troska o nasz klimat skłoniły nas do założenia własnej hodowli drzew tlenowych, którą prowadzimy od ponad 8 lat. To nie tylko nasze zajęcie, ale również rodzinnie spajające przedsięwzięcie, w którym uczestniczy cała nasza rodzina oraz wielu przyjaciół. Nasza misja to nie tylko prowadzenie biznesu, ale także wpływanie pozytywnie na otaczający nas świat.
                        Hodowla drzew tlenowych to dla nas nie tylko źródło utrzymania, ale przede wszystkim sposób na aktywne zaangażowanie się w ochronę środowiska. Drzewa te pełnią niezwykle istotną rolę w ekosystemie, ponieważ absorbują dwutlenek węgla oraz produkują tlen. Nasza hodowla opiera się na starannie wyselekcjonowanych odmianie paulownii, która charakteryzują się dużą odpornością na temperaturę oraz szkodniki.
                        Codzienna praca na naszej hodowli jest zarówno wyzwaniem, jak i ogromną przyjemnością. Wierzymy, że każde drzewo, które rośnie dzięki naszej hodowli, to kropla w morzu działań na rzecz lepszego jutra dla nas wszystkich. Nasza hodowla nie opiera się jedynie na zysku, ale na trosce o przyszłe pokolenia i stan naszej planety. Jesteśmy dumni, że nasze drzewa pomagają zwiększyć zieloną powierzchnię oraz zmniejszyć emisję dwutlenku węgla.
                        <NewLine>Współpracujemy również z lokalnymi społecznościami i szkołami, organizując edukacyjne wycieczki na nasze tereny. Chcemy dzielić się wiedzą na temat ekologii, przyrody i znaczenia drzew dla naszego środowiska. To nasz drobny, ale istotny wkład w budowanie świadomości ekologicznej.
                        </NewLine>
                    </AboutText>
                </TextWrapper>
            </Content>

        </Wrapper>
    );
};

