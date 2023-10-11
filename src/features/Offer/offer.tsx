import React from 'react';
import { Content, Header, HeaderTitle, Image, MainText, Span, TextWrapper, Tile, TileText, TileTextWrapper, TileTitle, TileWrapper, Wrapper } from './styledOffer';
import ex from '../../common/Images/Example/bee.png';
import AnimatedTile from './AnimatedTile';
import seedling from './sadzonka.png';
import tree from './tree.png';

export const Offer = () => {

    return (
        <Wrapper>
            <Header>
                <HeaderTitle>Nasza oferta</HeaderTitle>
            </Header>
            <Content>
                <TileWrapper>
                    <Tile>
                        <TileTextWrapper>
                            <TileTitle>
                                Sadzonki
                            </TileTitle>
                            <TileText>
                                Nasza oferta zawiera sadzonki Paulowni, które są dostępne w różnych ilościach, idealne dla tych, którzy pragną wspierać rozwój polskiej produkcji drzew. Dostępne odmiany to Shang Tong i Tomentosa, które nie tylko zapewniają szybki wzrost, ale również są bardzie odporne na warunki atmosferyczne. To doskonały wybór dla tych, którzy kierują się troską o środowisko i marzą o dodaniu zieleni do swojego otoczenia. Nasze sadzonki to nie tylko inwestycja finansowa, ale także inwestycja w przyszłość - poprawa jakości powietrza wokół nas, co ma istotne znaczenie dla naszego środowiska. Zdecyduj się na zakup naszych sadzonek Paulowni, aby wesprzeć lokalną produkcję i cieszyć się korzyściami ekologicznymi, jakie przynosi ta piękna roślina.                                </TileText>
                        </TileTextWrapper>
                        <Image src={seedling} />
                    </Tile>
                    <AnimatedTile>

                        <Tile left>
                            <Image src={tree} />
                            <TileTextWrapper>
                                <TileTitle>
                                    Drzewa
                                </TileTitle>
                                <TileText>
                                    Nasze drzewa Paulowni są dostępne w różnych wysokościach od 1,5 m do 4,5 m i stanowią doskonałą inwestycję w przyszłość oraz ochronę środowiska. Odmiana Shang Tong jest łatwa w uprawie, a główną korzyścią płynącą z zakupu drzewa jest szybsze uzyskanie zysków w porównaniu do sadzonki. Nasza oferta to wyjątkowa okazja do zaangażowania się w dbanie o środowisko i wsparcie lokalnej produkcji. Wybierając drzewa Paulowni, podejmujesz decyzję na rzecz przyszłości i dobra naszej planety.                                </TileText>
                            </TileTextWrapper>
                        </Tile>
                    </AnimatedTile>
                </TileWrapper>
            </Content>

        </Wrapper >
    );
};

