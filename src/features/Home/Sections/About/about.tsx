import React from 'react';
import { AboutImage, AboutText, AboutTextWrapper, AboutTitle, ContentWrapper, Wrapper } from './styledAbout';
import firstImg from './1.jpg'
import scndImg from './2.jpg'
import AnimatedElement from '../AnimatedElements';

export const About = () => {
    return (
        <Wrapper>
            <ContentWrapper>
                <AboutTextWrapper>
                    <AboutTitle>Paulownia: Nasza Pasja, Twoja Zielona Przyszłość</AboutTitle>
                    <AboutText> Witaj na naszej stronie! Jesteśmy dumni, że możemy dostarczyć Ci najwyższej jakości sadzonki i drzewa Paulownia, które nie tylko ozdobią Twój ogród, ale znajdą zastosowanie na plantacjach drzew użytkowych. Nasze starannie wyselekcjonowane sadzonki są w zasięgu Twojej ręki! Gwarantujemy Ci profesjonalizm i pełne zaangażowanie w to, co robimy. Paulownie to nasza pasja.
                    </AboutText>
                </AboutTextWrapper>
                <AboutImage src={firstImg} />
            </ContentWrapper>

            <ContentWrapper reverse>
                <AnimatedElement left>
                    <AboutImage src={scndImg} />
                </AnimatedElement>
                <AnimatedElement>
                    <AboutTextWrapper>
                        <AboutText> Nasza firma opiera się na dziesięcioletnim doświadczeniu, które zdobyliśmy dzięki nieustannym próbom i błędom oraz podróżom po świecie, gdzie Paulownia występuje w różnorodnych klimatach i warunkach. To właśnie te doświadczenia sprawiły, że jesteśmy ekspertami w hodowli tych drzew. Naszą pasją jest dostarczanie Ci najlepszych sadzonek, aby Twoje ogrody i plantacje drzew mogły kwitnąć i rosnąć tak, jak nasze drzewa. Razem możemy kroczyć w kierunku zielonej przyszłości!
                        </AboutText>
                    </AboutTextWrapper>
                </AnimatedElement>
            </ContentWrapper>

        </Wrapper>
    );
};

