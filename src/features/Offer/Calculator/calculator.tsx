import React, { useState } from 'react';
import { CountButton, CalcSection, Caption, Image, Input, InputWrapper, InputsWrapper, Result, ResultWrapper, Title, Wrapper, ButtonsWrapper, ClearButton } from './styledCalculator';
import img from './img.jpg'

export const Calculator = () => {

    const [width, setWidth] = useState<string | number>('');
    const [length, setLength] = useState<string | number>('');
    const [distance, setDistance] = useState<string | number>('');
    const [spacingPlanting, setSpacingPlanting] = useState<string | number>('');
    const [result, setResult] = useState<number>(0);

    const count = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const firstStepVar1 = parseFloat(length as string) - parseFloat(distance as string);
        const firstStepVar2 = parseFloat(width as string) - parseFloat(distance as string);
        const secondStepVar1 = Math.floor(firstStepVar1 / parseFloat(spacingPlanting as string));
        const secondStepVar2 = Math.floor(firstStepVar2 / parseFloat(spacingPlanting as string));
        const calculateResult = secondStepVar1 * secondStepVar2;
        setResult(calculateResult);
    };

    const resetForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setWidth('');
        setLength('');
        setDistance('');
        setSpacingPlanting('');
        setResult(0);
    };




    return (
        <Wrapper>
            <Title>Zaplanuj swoją plantację dzięki naszemu kalkulatorowi</Title>
            <CalcSection>
                <InputsWrapper>
                    <InputWrapper>
                        <Caption>Szerokość działki (m) *</Caption>
                        <Input
                            type='number'
                            value={width}
                            onChange={({ target }) => setWidth(parseFloat(target.value))}
                            min={0}
                            required

                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Caption>Długość działki (m) *</Caption>
                        <Input
                            type='number'
                            value={length}
                            onChange={({ target }) => setLength(parseFloat(target.value))}
                            min={0}
                            required
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Caption>Odległość od granicy działki (m) *</Caption>
                        <Input
                            type='number'
                            value={distance}
                            placeholder='Sugerowane 5m'
                            onChange={({ target }) => setDistance(parseFloat(target.value))}
                            min={0}
                            required
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Caption>Rozstaw sadzenia (m) *</Caption>
                        <Input
                            type='number'
                            value={spacingPlanting}
                            placeholder='Sugerowane 3m'
                            onChange={({ target }) => setSpacingPlanting(parseFloat(target.value))}
                            min={0}
                            required
                        />
                    </InputWrapper>
                    <ButtonsWrapper>
                        <CountButton onClick={count}>Oblicz</CountButton>
                        <ClearButton onClick={resetForm} disabled={
                            !(width || length || distance || spacingPlanting)
                        } >Wyczyść formularz</ClearButton>
                    </ButtonsWrapper>
                    {result > 0 ? (
                        <ResultWrapper>
                            Twój wynik to
                            <Result> {result} </Result>
                            drzew
                        </ResultWrapper>
                    ) : <ResultWrapper>
                        Wprowadź dane do formularza
                    </ResultWrapper>}
                </InputsWrapper>
                <Image src={img} />
            </CalcSection>
        </Wrapper>
    );
};

