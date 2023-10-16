import React from 'react';
import { Content, Header, HeaderTitle, Image, MainText, Span, TextWrapper, Tile, TileText, TileTextWrapper, TileTitle, TileWrapper, Wrapper } from './styledCultivation';
import ex from '../../common/Images/Example/bee.png';
import AnimatedTile from './AnimatedTile';

export const Cultivation = () => {

    return (
        <Wrapper>
            <Header>
                <HeaderTitle>Uprawa paulowni</HeaderTitle>
            </Header>
            <Content>

                <TextWrapper>
                    <MainText>
                        Chcemy się z Państwem podzielić naszym doświadczeniem w poniższych dziedzinach:
                    </MainText>
                </TextWrapper>

                <TileWrapper>

                    <AnimatedTile>
                        <Tile left>
                            <Image src={ex} />
                            <TileTextWrapper>
                                <TileTitle>
                                    Ogrodnictwo
                                </TileTitle>
                                <TileText>
                                    Kiedy paulownia kwitnie to u wszystkich wzbudza zachwyt, można patrzeć i patrzeć oraz czuć prawdziwy powiew wiosny. Wśród kwiatów uwijają się pszczoły, gwarno dyskutując o wiośnie, ale kiedy kwiaty opadną, paulownia zamienia się w zieloną kopułę pięknych liści. Kształt jej kulisty pasuje do naszych polskich ogrodów. Od wielu już lat spotykamy ją pojedynczych nasyceniach, ale także w alejach przy uzdrowiskach, miastach czy też szpitalach. Drzewo można formować, podnosić koronę lub wysmuklać dostosowując do miejsca, w którym przyszło jej rosnąć. Paulownia ma duże liście i kiedy przychodzi pierwszy przymrozek, wówczas liście czernieją w jedną noc i spadają. Z racji swej ciężkości nie fruwają do sąsiadów, ale pod swym konarem rozkruszają się do marca, użyźniając tym samym glebę.                                </TileText>
                            </TileTextWrapper>
                        </Tile>
                    </AnimatedTile>

                    <AnimatedTile>
                        <Tile>
                            <TileTextWrapper>
                                <TileTitle>
                                    Plantacje na drewno użytkowe
                                </TileTitle>
                                <TileText>
                                    Paulownie to szybko rosnące drzewa, które są coraz częściej sadzone ze względu na ich drewno użytkowe. Drewno paulowni jest lekkie i trwałe, co czyni je atrakcyjnym surowcem do produkcji mebli, podłóg i innych wyrobów stolarskich. Ponadto, paulownie są również cenne ze względu na swoje właściwości ekologiczne, ponieważ są efektywne w pochłanianiu dwutlenku węgla z atmosfery. To sprawia, że są one interesującym wyborem dla osób i firm zainteresowanych zrównoważonym gospodarowaniem lasami i produkcją drewna.                                </TileText>
                            </TileTextWrapper>
                            <Image src={ex} />
                        </Tile>
                    </AnimatedTile>

                    <AnimatedTile>
                        <Tile left>
                            <Image src={ex} />
                            <TileTextWrapper>
                                <TileTitle>
                                    Produkcja Biomasy
                                </TileTitle>
                                <TileText>
                                    Paulownia jest jednym z najefektywniejszych gatunków drzew szybko rosnących, co sprawia, że jest idealna do uprawy w celu produkcji biomasy. Jej drewno jest wyjątkowo lekkie i ma wysoką wartość energetyczną. Drzewa Paulowni mogą być hodowane na plantacjach, a następnie przetwarzane na pellety, brykiety lub drewno opałowe, co przyczynia się do produkcji odnawialnej energii oraz biomasy wykorzystywanej w przemyśle. To zrównoważone źródło biopaliwa, które ma potencjał do zaspokajania rosnącego zapotrzebowania na energię. </TileText>
                            </TileTextWrapper>
                        </Tile>
                    </AnimatedTile>

                    <AnimatedTile>
                        <Tile >
                            <TileTextWrapper>
                                <TileTitle>
                                    Rekultywacja Terenów
                                </TileTitle>
                                <TileText>
                                    Drzewa Paulowni stanowią doskonałą opcję dla rekultywacji terenów, które uległy degradacji na skutek wydobycia surowców naturalnych lub innych działalności przemysłowych. Ich szybki wzrost i zdolność do dostosowywania się do różnych warunków klimatycznych i glebowych sprawiają, że są idealnym wyborem. Korzenie Paulowni pomagają w stabilizacji gruntów i zapobiegają erozji. W wyniku tego procesu, tereny, które kiedyś były nieużyteczne, stają się przyjazne dla przyrody, co przyczynia się do odbudowy ekosystemów i przywracania naturalnej równowagi.                                </TileText>
                            </TileTextWrapper>
                            <Image src={ex} />

                        </Tile>
                    </AnimatedTile>

                    <AnimatedTile>
                        <Tile left>
                            <Image src={ex} />
                            <TileTextWrapper>
                                <TileTitle>
                                    Pszczelarstwo
                                </TileTitle>
                                <TileText>
                                    Roślina należy do gatunku roślin C4 – miododajnych. Od końca kwietnia, przez 5 tygodni, kwitnie w koszykach kwiatowych o wysokości do 60 cm. Z końcem maja kwiaty schną i pojawiają się liście. Najbardziej znana jest jako paulownia puszysta, ale można ją spotkać także pod nazwą: cesarska lub omszona. Wieczorem, gdy pszczoły już nie pracują, słychać jeszcze gwar trzmieli, które zbierają spadź. Z racji, że liście są lepkie, nie spotykamy pod tymi drzewami mszyc, komarów, muszek – chyba boją się, że się przykleją.
                                    W Moszczanicy obok Żywca wraz z uczniami klasy pszczelarskiej możemy obserwować cały rok jak pszczoły współpracują z paulowniami.
                                </TileText>
                            </TileTextWrapper>
                        </Tile>
                    </AnimatedTile>

                    <AnimatedTile>
                        <Tile >
                            <TileTextWrapper>
                                <TileTitle>
                                    Sadzenie dla Krajobrazu Miejskiego
                                </TileTitle>
                                <TileText>
                                    Paulownia jest doskonałym dodatkiem do miejskich krajobrazów, który przynosi nie tylko estetyczne korzyści, ale także wpływa na jakość powietrza w obszarach miejskich. Jej piękne, fioletowe kwiaty i dekoracyjne liście czynią ją atrakcyjnym drzewem dla miejskich ogrodów i parków. Ponadto, drzewa te przyczyniają się do oczyszczania powietrza z zanieczyszczeń i dostarczają cennego cienia w cieplejszych miesiącach.     </TileText>
                            </TileTextWrapper>
                            <Image src={ex} />
                        </Tile>
                    </AnimatedTile>

                    <AnimatedTile>
                        <Tile left>
                            <Image src={ex} />
                            <TileTextWrapper>
                                <TileTitle>
                                    Hodowla Zwierząt
                                </TileTitle>
                                <TileText>
                                    Drzewa Paulowni oferują cenny cień i schronienie dla zwierząt hodowlanych w okresach gorących letnich miesięcy. To gatunek drzewa, który rośnie gęsto i zapewnia przyjemne warunki do wypasu i wypasu zwierząt. Dla rolników, którzy dbają o swoje stada, Paulownia stanowi naturalny sposób na utrzymanie zwierząt w komfortowych warunkach i poprawienie ich samopoczucia.      </TileText>
                            </TileTextWrapper>
                        </Tile>
                    </AnimatedTile>

                    <AnimatedTile>
                        <Tile>
                            <TileTextWrapper>
                                <TileTitle>
                                    Badania Naukowe
                                </TileTitle>
                                <TileText>
                                    Paulownia jest przedmiotem licznych badań naukowych związanym z jej uprawą, właściwościami drewna i wpływem na środowisko. Badacze interesują się szczególnie potencjałem tych drzew do sekwestroacji dwutlenku węgla, produkcji biomasy, oraz jako źródła biomasy dla celów energetycznych i przemysłowych. Dzięki swojemu szybkiemu wzrostowi i wszechstronności, Paulownia przyciąga uwagę naukowców dążących do zrównoważonego rozwoju.  </TileText>
                            </TileTextWrapper>
                            <Image src={ex} />
                        </Tile>
                    </AnimatedTile>


                </TileWrapper>
            </Content>

        </Wrapper >
    );
};

