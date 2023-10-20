import React from 'react';
import { Content, Header, HeaderTitle, Image, TD, THead, TH, Table, Tile, TileText, TileTextWrapper, TileTitle, TileWrapper, Wrapper, TBody, TablesWrapper, TableWrapper, Caption, Title, CalcLink, PriceWrapper } from './styledOffer';
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
                                Nasza oferta zawiera sadzonki Paulowni, które są dostępne w różnych ilościach, idealne dla tych, którzy pragną wspierać rozwój polskiej produkcji drzew. Dostępne odmiany to Shang Tong i Tomentosa, które nie tylko zapewniają szybki wzrost, ale również są bardziej odporne na warunki atmosferyczne. To doskonały wybór dla tych, którzy kierują się troską o środowisko i marzą o dodaniu zieleni do swojego otoczenia. Nasze sadzonki to nie tylko inwestycja finansowa, ale także inwestycja w przyszłość - poprawa jakości powietrza wokół nas, co ma istotne znaczenie dla naszego środowiska. Zdecyduj się na zakup naszych sadzonek Paulowni, aby wesprzeć lokalną produkcję i cieszyć się korzyściami ekologicznymi, jakie przynosi ta piękna roślina. Warto zaznaczyć, że sadzonki wysiewamy sami w polskich warunkach z nasion, które pochodzą z drzewa rosnącego w Polsce. Dzięki temu możemy zagwarantować, że nasze drzewa są odpowiednio przystosowane do lokalnego klimatu, co sprzyja ich zdrowemu wzrostowi i rozwojowi.
                            </TileText>
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
                                    Nasze drzewa Paulowni są dostępne w różnych wysokościach od 1,5 m do 4,5 m i stanowią doskonałą inwestycję w przyszłość oraz ochronę środowiska. Odmiana Shang Tong jest łatwa w uprawie, a główną korzyścią płynącą z zakupu drzewa jest szybsze uzyskanie zysków w porównaniu do sadzonki. Wybierając drzewa Paulowni, podejmujesz decyzję na rzecz przyszłości i dobra naszej planety. Warto dodać, że nasze drzewa są przez nas sadzone jako sadzonki, a następnie rosną w naszym klimacie przez okres dwóch lat. Ten proces pozwala nam zagwarantować, że drzewa są solidnie ukorzenione i przygotowane do szybkiego wzrostu, gdy zostaną przeniesione do ostatecznej lokalizacji.
                                </TileText>
                            </TileTextWrapper>
                        </Tile>
                    </AnimatedTile>

                    <AnimatedTile>
                        <PriceWrapper>
                            <Title>Cennik</Title>
                            <TablesWrapper>
                                <TableWrapper>
                                    <Caption>Cena drzewa według wysokości</Caption>
                                    <Table>
                                        <THead>
                                            <tr>
                                                <TH>Od</TH>
                                                <TH>Do</TH>
                                                <TH>Cena za sztukę</TH>
                                            </tr>
                                        </THead>
                                        <TBody>
                                            <tr>
                                                <TD>50 cm</TD>
                                                <TD>100 cm</TD>
                                                <TD>70 zł</TD>
                                            </tr>
                                            <tr>
                                                <TD>100 cm</TD>
                                                <TD>150 cm</TD>
                                                <TD>100 zł</TD>
                                            </tr>
                                            <tr>
                                                <TD>150 cm</TD>
                                                <TD>200 cm</TD>
                                                <TD>150 zł</TD>
                                            </tr>
                                            <tr>
                                                <TD>200 cm</TD>
                                                <TD></TD>
                                                <TD>cena indywidualna</TD>
                                            </tr>
                                        </TBody>
                                    </Table>
                                </TableWrapper>

                                <TableWrapper>
                                    <Caption>Cena sadzonki według ilości</Caption>
                                    <Table>

                                        <THead>
                                            <tr>
                                                <TH>Od</TH>
                                                <TH>Do</TH>
                                                <TH>Cena za sztukę</TH>
                                            </tr>
                                        </THead>
                                        <TBody>
                                            <tr>
                                                <TD>1</TD>
                                                <TD>20</TD>
                                                <TD>40 zł</TD>
                                            </tr>
                                            <tr>
                                                <TD>21</TD>
                                                <TD>100</TD>
                                                <TD>35 zł</TD>
                                            </tr>
                                            <tr>
                                                <TD>101</TD>
                                                <TD>1000</TD>
                                                <TD>30 zł</TD>
                                            </tr>
                                            <tr>
                                                <TD>1001</TD>
                                                <TD></TD>
                                                <TD>cena indywidualna</TD>
                                            </tr>
                                        </TBody>
                                    </Table>
                                </TableWrapper>
                            </TablesWrapper>
                            <CalcLink to="/Kalkulator" onClick={() => window.scrollTo(0, 0)} >Zaplanuj swoją plantacje</CalcLink>
                        </PriceWrapper>
                    </AnimatedTile>
                </TileWrapper>
            </Content>

        </Wrapper >
    );
};

