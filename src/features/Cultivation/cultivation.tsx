import React from 'react';
import { Content, Header, HeaderTitle, Image, MainText, Span, TextWrapper, Tile, TileText, TileTextWrapper, TileTitle, TileWrapper, Wrapper } from './styledCultivation';
import ex from '../../common/Images/Example/bee.png';

export const Cultivation = () => {
    return (
        <Wrapper>
            <Header>
                <HeaderTitle>Uprawa paulowni</HeaderTitle>
            </Header>
            <Content>

                <TextWrapper>
                    <MainText>
                        Nasze doświadczenie uprawy paulowni od 9 lat pozwala na doradzaniu klientom jak poprawnie uprawiać paulownie w naszym kraju, gdyż wymaga to zdecydowanie innych działań, aniżeli w południowej Europie czy też wschodniej Azji. Nasz okres wegetacyjny jest o wiele krótszy i występują zimy mroźne, a najgorsze są późnowiosenne przymrozki.
                    </MainText>
                    <Span>
                        Chcemy się z Państwem dzielić naszym doświadczeniem i dlatego podzieliliśmy nasze porady w takich zakresach:
                    </Span>
                </TextWrapper>

                <TileWrapper>
                    <Tile>
                        <TileTextWrapper>
                            <TileTitle>
                                Lorem Ipsum
                            </TileTitle>
                            <TileText>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur minima enim aliquid sit neque ea repellendus totam tenetur expedita quisquam quaerat adipisci inventore quam beatae nemo, nostrum iusto error est!
                            </TileText>
                        </TileTextWrapper>
                        <Image src={ex} />
                    </Tile>

                    <Tile left>
                        <Image src={ex} />
                        <TileTextWrapper>
                            <TileTitle>
                                Lorem Ipsum
                            </TileTitle>
                            <TileText>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur minima enim aliquid sit neque ea repellendus totam tenetur expedita quisquam quaerat adipisci inventore quam beatae nemo, nostrum iusto error est!
                            </TileText>
                        </TileTextWrapper>
                    </Tile>

                    <Tile>
                        <TileTextWrapper>
                            <TileTitle>
                                Lorem Ipsum
                            </TileTitle>
                            <TileText>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur minima enim aliquid sit neque ea repellendus totam tenetur expedita quisquam quaerat adipisci inventore quam beatae nemo, nostrum iusto error est!
                            </TileText>
                        </TileTextWrapper>
                        <Image src={ex} />
                    </Tile>

                    <Tile left>
                        <Image src={ex} />
                        <TileTextWrapper>
                            <TileTitle>
                                Lorem Ipsum
                            </TileTitle>
                            <TileText>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur minima enim aliquid sit neque ea repellendus totam tenetur expedita quisquam quaerat adipisci inventore quam beatae nemo, nostrum iusto error est!
                            </TileText>
                        </TileTextWrapper>
                    </Tile>
                </TileWrapper>
            </Content>

        </Wrapper>
    );
};

