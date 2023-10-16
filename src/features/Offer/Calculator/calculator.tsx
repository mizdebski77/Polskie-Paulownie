import React from 'react';
import { Button, CalcSection, Caption, Image, Input, InputWrapper, InputsWrapper, Paragraph, Result, ResultWrapper, Title, Wrapper } from './styledCalculator';
import img from './img.jpg'
export const Calculator = () => {
    return (
        <Wrapper>
            <Title>Zaplanuj swoją plantację dzięki naszemu kalkulatorowi</Title>
            <CalcSection>
                <InputsWrapper>
                    <InputWrapper>
                        <Caption>Szerokość działki</Caption>
                        <Input type='number' />
                    </InputWrapper>
                    <InputWrapper>
                        <Caption>Długość działki</Caption>
                        <Input type='number' />
                    </InputWrapper>
                    <InputWrapper>
                        <Caption>Odległość od granicy działki </Caption>
                        <Input type='number' placeholder='Sugerowane 5m' />
                    </InputWrapper>
                    <InputWrapper>
                        <Caption>Rozstaw sadzenia </Caption>
                        <Input type='number' placeholder='Sugerowane 3m' />
                    </InputWrapper>
                    <Button>Oblicz</Button>
                    <ResultWrapper>
                        Twój wynik to <Result>84</Result> sadzonek
                    </ResultWrapper>
                </InputsWrapper>
                <Image src={img} />
            </CalcSection>
        </Wrapper>
    );
};

